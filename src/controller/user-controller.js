import userService from "../service/user-service.js";

const register = async (req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const login = async (req, res, next) => {
    try {
        const result = await userService.login(req.body);
        res.cookie('token', result.token, {httpOnly:true});
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const get = async (req, res, next) => {
    try {
        const email = req.user.email;
        const result = await userService.get(email);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const logout = async (req, res, next) => {
    try {
        const email = req.user.email;
        const result = await userService.logout(email);
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

export default {
    register,
    login,
    get,
    logout
}