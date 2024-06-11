import { prismaClient } from "../application/database.js"


const getHomeContent = async () => {
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

    const jumlah_laporan = Object.keys(laporanByMonth).map(yearMonth => {
        return {
            bulan: yearMonth,
            jumlah: laporanByMonth[yearMonth]
        };
    });

    const edukasiTemp = await prismaClient.postEdukasi.findMany({
        select: {
            id: true,
            judul: true,
            deskripsi: true,
            isi: true,
            publisher: true,     
            tanggal_upload: true,
            sumber: true,
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

    return { jumlah_laporan, edukasi };
}


export default {
    getHomeContent
}