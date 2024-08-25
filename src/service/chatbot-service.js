import vdb from "../application/vdb.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { bucket } from "../application/storage.js";
import { prismaClient } from "../application/database.js";

const API_KEY = "AIzaSyDZoWiABYgRKzeWRp-z89XDtG8fS_eJ2QU";
const genAI = new GoogleGenerativeAI(API_KEY);  

const generateAnswer = async (query) => {
    if (!query) return "Maaf, pertanyaanmu tidak boleh kosong.";

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const context = await vdb.query(query);

    if (context === 404) return "Maaf, saya tidak memiliki informasi yang relevan dengan topik ini.";
    
    const prompt = `Jawab pertanyaan berikut secara rinci dan sertakan sumber undang-undang yang relevan dalam jawabanmu. Jangan sebutkan bahwa informasi berasal dari konteks, tetapi integrasikan secara alami dalam jawaban.\n\nInformasi: ${context}\n\nPertanyaan: ${query}`;

    const result = await model.generateContent({
        contents: [
            {
                role: 'user',
                parts: [{ text: prompt }],
            },
        ],
        generationConfig: {
            maxOutputTokens: 1000,
            temperature: 0,
        },
    });

    return result.response.text();
}

const postFileToGoogleCloudStorage = async (req) => {
    if (!req.files) {
        return "no files provided";
    }
    if (req.files.length !== 1) {
        return "only one file can be uploaded at a time";
    }

    let url = "";
    const file = req.files[0];
    const blob = bucket.file('UUTanah/'+file.originalname);
    const blobStream = blob.createWriteStream();
    await new Promise((resolve, reject) => {
        blobStream.on('error', (err) => {
            reject(err);
        });
        blobStream.on('finish', () => {
            url = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            resolve();
        });
        blobStream.end(file.buffer);
    });

    const result = await prismaClient.fileContext.create({
        data: {
            url: url,
            uu_name: req.body.uu_name
        }
    });

    return result;
}

const deleteAllContextFile = async () => {
    const contextList = await prismaClient.fileContext.findMany();

    for (const context of contextList) {
        await prismaClient.fileContext.delete({
            where: {
                id: context.id
            }
        });
        const fileName = context.url.split('/').pop();
        console.log(fileName);
        const blob = bucket.file('UUTanah/'+fileName);
        await blob.delete();
    }
}

const insertAllContextFileToVectorDatabase = async () => {
    const contextList = await prismaClient.fileContext.findMany({
        where: {
            is_inserted: false
        }
    });
    for (const context of contextList) {
        const fileName = context.url.split('/').pop();
        await vdb.insertFileToChromaDb('UUTanah/'+fileName, context.uu_name);
        await prismaClient.fileContext.update({where: {id: context.id}, data: {is_inserted: true}});
    }
}

const resetCollection = async () => {
    await vdb.clearCollection();
    await vdb.createCollection();
}

export default {
    generateAnswer,
    postFileToGoogleCloudStorage,
    deleteAllContextFile,
    insertAllContextFileToVectorDatabase,
    resetCollection
}