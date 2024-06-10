import {prismaClient} from "../application/database.js";

export const authMiddleware = async (req, res, next) => {
    const cookiesToken = req.cookies.token;

    const authHeader = req.headers['authorization'];

    var bearerToken = null; 
    if (authHeader) {
        bearerToken = authHeader.split(' ')[1];
    }

    if (!cookiesToken && !bearerToken) {
        res.status(401).json({
            errors: "Unauthorized"
        }).end();
    } else {

        const token = cookiesToken ? cookiesToken : bearerToken

        const user = await prismaClient.user.findFirst({
            where: {
                token: token
            }
        });
        if (!user) {
            res.status(401).json({
                errors: "Unauthorized"
            }).end();
        } else {
            req.user = user;
            next();
        }
    }
}