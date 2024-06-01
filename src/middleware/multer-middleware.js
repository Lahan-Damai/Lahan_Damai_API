import Multer from 'multer';


const upload = Multer({ 
    storage: Multer.memoryStorage() ,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
})

export const multerMiddleware = async (req, res, next) => {
    upload.single('foto')(req, res, function (err) {
        if (err instanceof Multer.MulterError) {
            return res.status(400).json({ error: err.message });
        } else if (err) {
            return res.status(500).json({ error: 'An unknown error occurred while uploading.' });
        }
        next();
    });
}