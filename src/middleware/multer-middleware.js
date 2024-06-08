import Multer from 'multer';

const upload = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
});

const maxFiles = 10; 

/**
 * multerMiddleware is a middleware function that handles file uploads.
 * It uses the Multer library to handle the file uploads and stores the files in memory.
 * The function takes three parameters: req (request object), res (response object), and next (callback function).
 * It uses the upload middleware to handle file uploads and passes the request, response, and a callback function to it.
 * The callback function checks if there was an error during file upload.
 * If there was a Multer error, it returns a 400 status code with an error message.
 * If there was an error that is not a Multer error, it returns a 500 status code with an error message.
 * If there was no error, it calls the next function to pass control to the next middleware.
 */

export const multerMiddleware = async (req, res, next) => {
    // Use the upload middleware to handle file uploads
    upload.array('foto', maxFiles)(req, res, function (err) {
        // Check if there was an error during file upload
        if (err instanceof Multer.MulterError) {
            // If there was a Multer error, return a 400 status code with an error message
            return res.status(400).json({ error: err.message });
        } else if (err) {
            // If there was an error that is not a Multer error, return a 500 status code with an error message
            return res.status(500).json({ error: 'An unknown error occurred while uploading.' });
        }
        // If there was no error, call the next function to pass control to the next middleware
        next();
    });
};
