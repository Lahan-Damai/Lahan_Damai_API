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
        res.cookie('token', result.token, {httpOnly:true, sameSite: 'none', secure: true});
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

const getAllUsers = async (req, res, next) => {
    try {
        const result = await userService.getAllUsers();
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const result = await userService.updateUser(req);
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const changeUserRole = async (req, res, next) => {
    try {
        const result = await userService.changeUserRole(req.body);
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const getOtherUsers = async (req, res, next) => {
    try {
        const result = await userService.get(req.body.email);
        result.alamat = "";
        result.nik = "";
        result.tanggal_lahir = "";

        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


export default {
    register,
    login,
    get,
    logout,
    getAllUsers,
    updateUser,
    changeUserRole,
    getOtherUsers
}