import vdb from "../application/vdb.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { bucket } from "../application/storage.js";

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
    const file = req.file;
    const blob = bucket.file(file.originalname);
    const blobStream = blob.createWriteStream();
    blobStream.on('error', (err) => {
        console.log(err);
    });
    blobStream.on('finish', async () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        console.log(publicUrl);
    });
    blobStream.end(file.buffer);
}

export default {
    generateAnswer,
}