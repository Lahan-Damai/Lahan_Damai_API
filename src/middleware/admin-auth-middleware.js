import {prismaClient} from "../application/database.js";

export const authAdminMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({
            errors: "Unauthorized"
        }).end();
    } else {
        const user = await prismaClient.user.findFirst({
            where: {
                token: token
            }
        });
        if (!user || user.role != "admin") {
            res.status(401).json({
                errors: "Unauthorized"
            }).end();
        } else {
            next();
        }
    }
}