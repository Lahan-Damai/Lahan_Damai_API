import { ChromaClient, GoogleGenerativeAiEmbeddingFunction } from 'chromadb';
import { Storage } from '@google-cloud/storage';
import pdf from 'pdf-parse';

const client = new ChromaClient();
const storage = new Storage();
const bucketName = 'lahan-damai'; 
const API_KEY = "AIzaSyDZoWiABYgRKzeWRp-z89XDtG8fS_eJ2QU";
const embedder = new GoogleGenerativeAiEmbeddingFunction({googleApiKey: API_KEY});

async function clearCollection() {
    try {
        client.deleteCollection({name:"pdf_embeddings"});
    } catch (error) {
        console.error(error);
    }
}

async function createCollection() {
    try {
        await client.createCollection({name: "pdf_embeddings", embeddingFunction: new GoogleGenerativeAiEmbeddingFunction({googleApiKey: "AIzaSyDZoWiABYgRKzeWRp-z89XDtG8fS_eJ2QU"})})
    } catch (error) {
        console.error(error);
    }
}

/**
 * Inserts a file into ChromaDB by extracting text from a PDF, splitting it into chunks, and storing the embeddings.
 *
 * @param {string} fileName - The name of the file to be inserted.
 * @param {string} UUName - The unique identifier for the file.
 * @return {Promise<void>} A promise that resolves when the file has been successfully inserted.
 */
async function insertFileToChromaDb(fileName, UUName) {
    try {
        const text = await extractTextFromPDF(bucketName, fileName);
        const chunks = splitTextIntoChunks(text, 341);
        await storeEmbeddingsInChromaDB(chunks, UUName);
    } catch (error) {
        console.error('Error in processing:', error);
    }
}

async function query(queryText) {
    // const semanticKeys = await toSemanticKey(queryText);
    const semanticKeys = queryText;
    
    const results =  await queryChromaDB(semanticKeys);
    if (results === 404) {
        return 404;
    }

    const collection = await client.getCollection({ 
        name: 'pdf_embeddings',
        embeddingFunction: embedder
    });

    let fullResult = [];
    for (const id of results.ids[0]) {
        let ids = getSurroundingDocumentIDs(id);
        let arr = await collection.get({ ids: ids });
        fullResult.push( "Berdasarkan " + getDocumentName(id) + " : " + arr.documents.join(" ") + '\n');
    }

    return fullResult.join("\n");
}

//////////////////////////////////////////
//           HELPER FUNCTIONS           //
//////////////////////////////////////////


async function queryChromaDB(queryText) {
    const API_KEY = "AIzaSyDZoWiABYgRKzeWRp-z89XDtG8fS_eJ2QU";
    const RELEVANT_THRESHOLD = 0.3;
    const client = new ChromaClient();
    const collection = await client.getCollection({ 
        name: 'pdf_embeddings',
        embeddingFunction: embedder
    });

    const results = await collection.query({
        queryTexts: queryText,
        nResults: 5, 
    });
    
    if(results.distances[0][0] > RELEVANT_THRESHOLD){
        return 404;
    }
    return results;
}

async function toSemanticKey(query) {
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
    // const instruction = `Cantumkan kata kunci semantik yang terkait dengan kueri pengguna berikut ini. Kembalikan sebagai daftar yang dipisahkan dengan koma: `
    const instruction = `Ekstrak kata kunci yang paling relevan dan penting dari kueri pengguna ini, dan kembalikan dalam bentuk daftar yang dipisahkan dengan koma: `;
    const prompt = instruction + query;
    const semanticKeys = await model.generateContent({
        contents: [
            {
              role: 'user',
              parts: [
                {
                  text: prompt,
                }
              ],
            }
          ],
        generationConfig: {
            maxOutputTokens: 1000,
            temperature: 0,
        },
    });
    return semanticKeys.response.text();
}

function getSurroundingDocumentIDs(docID) {
    const lastIdx = docID.lastIndexOf('_');
    const documentName = docID.slice(0, lastIdx);
    const id = parseInt(docID.slice(lastIdx + 1), 10);
    return [
        `${documentName}_${id - 1}`,
        `${documentName}_${id}`,
        `${documentName}_${id + 1}`,
    ];
}

function getDocumentName(documentId) {
    const separatorIndex = documentId.lastIndexOf('_');
    const documentName = documentId.slice(0, separatorIndex);
    return documentName;
}

async function extractTextFromPDF(bucketName, fileName) {
    try {
        const bucket = storage.bucket(bucketName);
        const file = bucket.file(fileName);
        const [fileContents] = await file.download();
        const data = await pdf(fileContents);
        return data.text;
    } catch (error) {
        console.error('Error extracting text from PDF:', error);
        throw error;
    }
}

function splitTextIntoSentences(text) {
    return text.match(/[^.!?]+[.!?]*/g).map(sentence => sentence.trim());
}

function splitTextIntoChunks(text, chunkSize = 2000) {
    const sentences = splitTextIntoSentences(text);
    const chunks = [];
    let currentChunk = '';

    for (const sentence of sentences) {
        if ((currentChunk.length + sentence.length) > chunkSize) {
            chunks.push(currentChunk.trim());
            currentChunk = '';
        }
        currentChunk += sentence + ' ';
    }

    if (currentChunk) {
        chunks.push(currentChunk.trim());
    }

    return chunks;
}

async function getEmbeddingsInBatches(textChunks, batchSize = 20) {
    const embedder = new GoogleGenerativeAiEmbeddingFunction({ googleApiKey: API_KEY });
    const embeddings = [];

    try {
        for (let i = 0; i < textChunks.length; i += batchSize) {
            console.log(`Processing batch ${Math.floor(i / batchSize) + 1}`);
            const batch = textChunks.slice(i, i + batchSize);
            const vectors = await embedder.generate(batch);
            embeddings.push(...vectors);
        }
    } catch (error) {
        console.error('Error generating embeddings:', error);
        throw error;
    }

    return embeddings;
}

async function storeEmbeddingsInChromaDB(textChunks, UUName) {
    try {
        const collection = await client.getCollection({ 
            name: 'pdf_embeddings',
            embeddingFunction: embedder 
        });

        const embeddingsList = await getEmbeddingsInBatches(textChunks);
        const idsList = textChunks.map((_, index) => `${UUName}_${index}`);

        await collection.add({
            embeddings: embeddingsList,
            documents: textChunks,
            ids: idsList,
        });
    } catch (error) {
        console.error('Error storing embeddings in ChromaDB:', error);
        throw error;
    }
}

export default {
    clearCollection,
    createCollection,
    insertFileToChromaDb,
    query
}