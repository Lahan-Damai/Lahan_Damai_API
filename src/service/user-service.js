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
                { email: user.email },
                { nik: user.nik },
              ],
        }
    });

    if (countUser === 1) {
        throw new ResponseError(400, "email atau NIK sudah ada");
    }

    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: user,
        select: {
            email: true,
            nama: true
        }
    });
}

const login = async (request) => {
    const loginRequest = validate(loginUserValidation, request);

    const user = await prismaClient.user.findUnique({
        where: {
            email: loginRequest.email
        },
        select: {
            email: true,
            password: true
        }
    });

    if (!user) {
        throw new ResponseError(401, "user doesn't exist");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new ResponseError(401, "email or password wrong");
    }

    const token = uuid().toString();
    
    return prismaClient.user.update({
        data: {
            token: token
        },
        where: {
            email: user.email
        },
        select: {
            token: true,
            nama: true
        }
    });
}

const get = async (request) => {
    // console.log(request)
    const email = validate(getUserValidation, request);
    const user = await prismaClient.user.findUnique({
        where: {
            email: email
        },
        select: {
            email: true,
            nama: true,
            alamat: true,
            nik: true,
            tanggal_lahir: true,
        }
    })

    if (!user){
        throw new ResponseError(404, "User tidak ditemukan");
    }

    return user;
}

const logout = async (email) => {
    console.log(email)
    email = validate(getUserValidation, email);

    const user = await prismaClient.user.findUnique({
        where: {
            email: email
        }
    })

    if (!user) {
        throw new ResponseError(404, "user tidak ditemukan");
    }

    return prismaClient.user.update({
        where: {
            email: email
        },
        data: {
            token: null
        },
        select: {
            email: true
        }
    })
}

export default {
    register,
    login,
    logout,
    get
}