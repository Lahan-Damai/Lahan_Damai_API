import homeService from "../service/home-sevice.js";


const getHomeContent = async (req, res, next) => {
    try {
        const result = await homeService.getHomeContent(req.user);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


export default {
    getHomeContent
}