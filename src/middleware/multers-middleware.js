import Multer from 'multer';

const upload = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
});

const maxFiles = 10; 

export const multersMiddleware = async (req, res, next) => {
    upload.fields([
        { name: 'foto', maxCount: maxFiles }, 
        { name: 'foto_dokumen', maxCount: maxFiles }
    ])(req, res, function (err) {
        if (err instanceof Multer.MulterError) {
            return res.status(400).json({ error: err.message });
        } else if (err) {
            return res.status(500).json({ error: 'An unknown error occurred while uploading.' });
        }
        next();
    });
};
