import {prismaClient} from "../src/application/database.js";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "damai01"
        }
    })
}

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            nik: "12345678",
            username: "damai01",
            nama: "damai",     
            alamat: "beji, depok",   
            password: await bcrypt.hash("lahanku123", 10),
            token: "testtoken"
        }
    })
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "damai01"
        }
    });
}
