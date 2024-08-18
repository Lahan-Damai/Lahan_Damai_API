import chatbotService from "../service/chatbot-service.js";    
import vdb from "../application/vdb.js";

const generateAnswer = async (req, res, next) => {
    try {
        const result = await chatbotService.generateAnswer(req.body.query);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


// admin api
const deleteCollection = async (req, res, next) => {
    try {
        await vdb.clearCollection();
        res.status(200).json({
            data: "success"
        });
    } catch (e) {
        next(e);
    }
}

const createCollection = async (req, res, next) => {
    try {
        await vdb.createCollection();
        res.status(200).json({
            data: "success"
        });
    } catch (e) {
        next(e);
    }
}


const insertFileToChromaDb = async (req, res, next) => {
    try {
        await vdb.insertFileToChromaDb(req.body.file_name, req.body.uu_name);
        res.status(200).json({
            data: "success"
        });
    } catch (e) {
        next(e);
    }
}

export default {
    generateAnswer,
    deleteCollection,
    insertFileToChromaDb,
    createCollection
}