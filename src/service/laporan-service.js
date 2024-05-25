import { prismaClient } from "../application/database.js"

const getMapLaporan = async (request) => {

    const koordinatLaporan = await prismaClient.laporan.findMany({
        select: {
            id: true,
            latitude: true,
            longitude: true,
        }
    })

    return koordinatLaporan;
}

const getLaporan = async (request) => {
    const idLaporan = parseInt(request.params.id);
    const koordinatLaporan = await prismaClient.laporan.findUnique({
        where: {
            id: idLaporan
        },
        select: {
            id: true,
            latitude: true,
            longitude: true,
            judul: true,
            user_nik: true,
            deskripsi: true,
            foto: true,
            proses_laporan: true 
        }
    })

    return koordinatLaporan;
}

export default {
    getMapLaporan,
    getLaporan
}