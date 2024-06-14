import {prismaClient} from "../src/application/database.js";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            email: "damai0123@gmail.com"
        }
    })
}

export const createTestUser = async (role = "user") => {
    await prismaClient.user.create({
        data: {
            nik: "1234567890",
            email: "damai0123@gmail.com",
            nama: "damai",     
            alamat: "beji, depok",   
            password: await bcrypt.hash("lahanku123", 10),
            tanggal_lahir: new Date(),
            token: "testtoken",
            role: role
        }
    })
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            email: "damai0123@gmail.com"
        }
    });
}
