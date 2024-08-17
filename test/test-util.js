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
            nik: "74855621128",
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

export const removeLaporan = async () => {
    await prismaClient.laporan.deleteMany({
        where: {
            user_nik: "74855621128"
        }
    })
}

export const createLaporan = async () => {
    await prismaClient.laporan.create({
        data: {
            no_sertifikat: "test-no_sertifikat",
            user_nik: "74855621128",
            deskripsi: "test deskripsi",
            latitude: 69.6969,
            longitude: 42.0,
            proses_laporan: "diproses",
            tanggal_lapor: "2020-01-01T00:00:00.000Z",
        }
    })
};

export const createTestAhli = async () => {
    await prismaClient.ahli.create({
        data: {
            id: "1",
            nama: "testahli",
            bidang: "testbidang",
            nomor_wa: "082112655847",
            deskripsi: "test deskripsi",
            lama_kerja: 5,
            foto: "url string"
        }
    })
}

export const removeTestAhli = async () => {
    await prismaClient.ahli.delete({
        where: {
            id: "1"
        }
    })
}

export const createUlasanAhli = async () => {
    await prismaClient.ulasanAhli.create({
        data: {
            ahli_id: "1",
            user_nik: "74855621128",
            isi: "test deskripsi",
            rating: 5
        }
    })
}

export const removeUlasanAhli = async () => {
    await prismaClient.ulasanAhli.deleteMany({
        where: {
            ahli_id: "1"
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

export const createThreadForum = async () => {
    await prismaClient.thread.create({
        data: {
            id: "1",
            judul: "test judul",
            isi: "test isi",
            user_nik: "74855621128"
        }
    })
}


export const createReplyForum = async () => {
    await prismaClient.reply.create({
        data: {
            id: "1",
            isi: "test isi",
            user_nik: "74855621128",
            thread_id: "1"
        }
    })
}
