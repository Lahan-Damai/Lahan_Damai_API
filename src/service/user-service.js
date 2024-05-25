import { prismaClient } from "../application/database.js"
import { ResponseError } from "../error/response-error.js"
import { loginUserValidation, registerUserValidation, getUserValidation } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            OR: [
                { username: user.username },
                { nik: user.nik },
              ],
        }
    });

    if (countUser === 1) {
        throw new ResponseError(400, "Username atau NIK sudah ada");
    }

    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: user,
        select: {
            username: true,
            nama: true
        }
    });
}

const login = async (request) => {
    const loginRequest = validate(loginUserValidation, request);

    const user = await prismaClient.user.findUnique({
        where: {
            username: loginRequest.username
        },
        select: {
            username: true,
            password: true
        }
    });

    if (!user) {
        throw new ResponseError(401, "Username or password wrong");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new ResponseError(401, "Username or password wrong");
    }

    const token = uuid().toString();
    
    return prismaClient.user.update({
        data: {
            token: token
        },
        where: {
            username: user.username
        },
        select: {
            token: true
        }
    });
}

const get = async (request) => {
    // console.log(request)
    const username = validate(getUserValidation, request);
    const user = await prismaClient.user.findUnique({
        where: {
            username: username
        },
        select: {
            username: true,
            nama: true,
            alamat: true,
            nik: true
        }
    })

    if (!user){
        throw new ResponseError(404, "User tidak ditemukan");
    }

    return user;
}

const logout = async (username) => {
    console.log(username)
    username = validate(getUserValidation, username);

    const user = await prismaClient.user.findUnique({
        where: {
            username: username
        }
    })

    if (!user) {
        throw new ResponseError(404, "user tidak ditemukan");
    }

    return prismaClient.user.update({
        where: {
            username: username
        },
        data: {
            token: null
        },
        select: {
            username: true
        }
    })
}

export default {
    register,
    login,
    logout,
    get
}