export const authAdminMiddleware = async (req, res, next) => {
    if (!req.user || req.user.role != "admin") {
        res.status(401).json({
            errors: "Unauthorized"
        }).end();
    } else {
        next();
    }
}