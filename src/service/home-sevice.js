import { prismaClient } from "../application/database.js"


const getHomeContent = async (user) => {
    const laporan = await prismaClient.laporan.findMany({
        select: {
            tanggal_lapor: true,
            no_sertifikat: true,
        }
    });

    const laporanByMonth = {};

    for (const data of laporan) {
        const month = data.tanggal_lapor.toISOString().slice(5, 7);
        const year = data.tanggal_lapor.toISOString().slice(0, 4);
        const currentYear = new Date().getFullYear();
        if (year == currentYear) {
            if (!laporanByMonth[month]) {
                laporanByMonth[month] = 0;
            }
            laporanByMonth[month]++;
        }
    }

    const jumlah_laporan = {};
    for (const month in laporanByMonth) {
        const monthNumber = parseInt(month);
        jumlah_laporan[monthNumber-1] = laporanByMonth[month];
    }

    for (let monthNumber = 1; monthNumber <= 12; monthNumber++) {
        if (!jumlah_laporan[monthNumber-1]) {
            jumlah_laporan[monthNumber-1] = 0;
        }
    }

    const edukasiTemp = await prismaClient.postEdukasi.findMany({
        select: {
            id: true,
            judul: true,
            deskripsi: true,
            isi: true,
            publisher: true,     
            tanggal_upload: true,
            sumber: true,
            is_recommended: true,    
            fotos: {
                select: {
                    url: true
                }
            }
        },
        take: 7,
        orderBy: {
            tanggal_upload: 'desc'
        }
    });

    const edukasi = edukasiTemp.map(edukasi => ({
        ...edukasi,
        fotos: edukasi.fotos.map(foto => foto.url)
    }));

    const photo_profile = user.foto;

    return { photo_profile, jumlah_laporan, edukasi };
}


export default {
    getHomeContent
}