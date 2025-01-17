import { prismaClient } from "../application/database.js"
import { ResponseError } from "../error/response-error.js"
import { loginUserValidation, registerUserValidation, getUserValidation, updateUserValidation } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { bucket } from "../application/storage.js";

// import { testNotification } from "./notification-service.js";

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

    if (countUser >= 1) {
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
    const fcm_token = loginRequest.fcm_token ?? null;
    // await testNotification(fcm_token);
    
    return prismaClient.user.update({
        data: {
            token: token,
            fcm_token: fcm_token
        },
        where: {
            email: user.email
        },
        select: {
            token: true,
            fcm_token: true,
            nama: true,
            role: true,
            email: true,
            nik: true
        }
    });
}

const get = async (request) => {
    const nik = validate(getUserValidation, request);
    const user = await prismaClient.user.findUnique({
        where: {
            nik: nik
        },
        select: {
            email: true,
            nama: true,
            alamat: true,
            nik: true,
            tanggal_lahir: true,
            role: true,
            foto: true
        }
    })

    if (!user){
        throw new ResponseError(404, "User tidak ditemukan");
    }

    return user;
}

const logout = async (email) => {
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

const getAllUsers = async () => {
    return prismaClient.user.findMany();
}


const updateUser = async (request, thisUser) => {
    let fotoUrls = [];

    if (request.files) {
        if (request.files.length > 1) {
            return "only one file allowed";
        }
        if (request.files.length === 1) {
            var oldFiletype = "";
            if (thisUser.foto && thisUser.foto.length > 30) {
                oldFiletype = thisUser.foto.split('.').pop();
            }

            const filetype = request.files[0].originalname.split('.').pop();

            if (oldFiletype !== filetype && oldFiletype !== "") {
                const blob = bucket.file(`${request.user.nik}-profile.${oldFiletype}`);
                await blob.delete();
            }

            const blob = bucket.file(`${request.user.nik}-profile.${filetype}`);
            const blobStream = blob.createWriteStream();
            
            await new Promise((resolve, reject) => {
                blobStream.on('error', (err) => {
                    reject(err);
                });

                blobStream.on('finish', () => {
                    const fotoUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                    fotoUrls.push(fotoUrl);
                    resolve();
                });
                blobStream.end(request.files[0].buffer);

            }) 
        }
    }

    request.body.foto = fotoUrls[0];

    const user = validate(updateUserValidation, request.body);

    return prismaClient.user.update({
        where: {
            email: request.user.email
        },  
        data: {
            ...user
        },
        select: {
            email: true,
            role: true,
            nama: true,
            alamat: true,
            nik: true,
            tanggal_lahir: true,
            foto: true
        }
    });
}

const changeUserRole = async (request) => {
    const user = await prismaClient.user.findUnique({
        where: {
            email: request.email
        },
    });

    if (!user) {
        throw new ResponseError(404, "user tidak ditemukan");
    }

    if (user.role === "admin") {
        user.role = "user";
    }
    else if (user.role === "user") {
        user.role = "admin";
    }

    return prismaClient.user.update({
        where: {
            email: user.email
        },  
        data: {
            ...user
        },
        select: {
            email: true,
            role: true
        }
    });
}

export default {
    register,
    login,
    logout,
    get,
    getAllUsers,
    updateUser,
    changeUserRole
}