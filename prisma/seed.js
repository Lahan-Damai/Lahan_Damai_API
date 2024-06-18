import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Seed users
  const user1 = await prisma.user.upsert({
    where: { email: "user1@example.com" },
    update: {},
    create: {
      nik: "1234567890123465",
      email: "user1@example.com",
      nama: "User Satu",
      alamat: "Jalan Kebon Kacang No.1",
      password: "password123",
      role: "user",
      tanggal_lahir: new Date("1990-01-01"),
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "user2@example.com" },
    update: {},
    create: {
      nik: "2345678901234567",
      email: "user2@example.com",
      nama: "User Dua",
      alamat: "Jalan Kebon Jeruk No.2",
      password: "password456",
      role: "admin",
      tanggal_lahir: new Date("1985-02-02"),
    },
  });

  const user3 = await prisma.user.upsert({
    where: { email: "user3@example.com" },
    update: {},
    create: {
      nik: "3456789012345678",
      email: "user3@example.com",
      nama: "User Tiga",
      alamat: "Jalan Kebon Ayam No.3",
      password: "password789",
      role: "user",
      tanggal_lahir: new Date("1995-03-03"),
    },
  });

  const user4 = await prisma.user.upsert({
    where: { email: "user4@example.com" },
    update: {},
    create: {
      nik: "4567890123456789",
      email: "user4@example.com",
      nama: "User Empat",
      alamat: "Jalan Kebon Sapi No.4",
      password: "password012",
      role: "admin",
      tanggal_lahir: new Date("1980-04-04"),
    },
  });

  // Seed laporan
  const laporan1 = await prisma.laporan.upsert({
    where: { no_sertifikat: "LAP001" },
    update: {},
    create: {
      no_sertifikat: "LAP001",
      user_nik: user1.nik,
      deskripsi: "Laporan pertama",
      proses_laporan: "open",
      latitude: -6.200000,
      longitude: 106.816666,
    },
  });

  const laporan2 = await prisma.laporan.upsert({
    where: { no_sertifikat: "LAP002" },
    update: {},
    create: {
      no_sertifikat: "LAP002",
      user_nik: user2.nik,
      deskripsi: "Laporan kedua",
      proses_laporan: "open",
      latitude: -6.200000,
      longitude: 106.816666,
    },
  });

  // Seed threads
  const thread1 = await prisma.thread.upsert({
    where: { id: "thread1-id" },
    update: {},
    create: {
      id: "thread1-id",
      judul: "Thread Pertama",
      user_nik: user1.nik,
      isi: "Ini adalah isi thread pertama",
    },
  });

  const thread2 = await prisma.thread.upsert({
    where: { id: "thread2-id" },
    update: {},
    create: {
      id: "thread2-id",
      judul: "Thread Kedua",
      user_nik: user2.nik,
      isi: "Ini adalah isi thread kedua",
    },
  });

  // Seed replies
  const reply1 = await prisma.reply.upsert({
    where: { id: "reply1-id" },
    update: {},
    create: {
      id: "reply1-id", 
      isi: "Ini adalah balasan pertama",
      user_nik: user2.nik,
      thread_id: thread1.id,
    },
  });

  const reply2 = await prisma.reply.upsert({
    where: { id: "reply2-id" },
    update: {},
    create: {
      id: "reply2-id", 
      isi: "Ini adalah balasan kedua",
      user_nik: user3.nik,
      thread_id: thread2.id,
    },
  });

  // Seed PostEdukasi
  const postEdukasi1 = await prisma.postEdukasi.upsert({
    where: { id: "postEdukasi1-id" },
    update: {},
    create: {
      id: "postEdukasi1-id", 
      judul: "Post Edukasi Pertama",
      deskripsi: "Deskripsi post edukasi pertama",
      isi: "Isi dari post edukasi pertama",
      publisher: "Publisher 1",
      sumber: "Sumber 1",
    },
  });

  const postEdukasi2 = await prisma.postEdukasi.upsert({
    where: { id: "postEdukasi2-id" },
    update: {},
    create: {
      id: "postEdukasi2-id", 
      judul: "Post Edukasi Kedua",
      deskripsi: "Deskripsi post edukasi kedua",
      isi: "Isi dari post edukasi kedua",
      publisher: "Publisher 2",
      sumber: "Sumber 2",
    },
  });

  // Seed Ahli
  const ahli1 = await prisma.ahli.upsert({
    where: { id: "ahli1-id" },
    update: {},
    create: {
      id: "ahli1-id",
      nama: "Ahli Satu",
      bidang: "Bidang Satu",
      nomor_wa: "08123456789",
      deskripsi: "Deskripsi ahli satu",
      lama_kerja: 10,
    },
  });

  const ahli2 = await prisma.ahli.upsert({
    where: { id: "ahli2-id" },
    update: {},
    create: {
      id: "ahli2-id",
      nama: "Ahli Dua",
      bidang: "Bidang Dua",
      nomor_wa: "08123456790",
      deskripsi: "Deskripsi ahli dua",
      lama_kerja: 20,
    },
  });

  const ahli3 = await prisma.ahli.upsert({
    where: { id: "ahli3-id" },
    update: {},
    create: {
      id: "ahli3-id",
      nama: "Ahli Tiga",
      bidang: "Bidang Tiga",
      nomor_wa: "08123456791",
      deskripsi: "Deskripsi ahli tiga",
      lama_kerja: 30,
    },
  });

  // Seed UlasanAhli
  const ulasanAhli1 = await prisma.ulasanAhli.upsert({
    where: { 
      ahli_id_user_nik: {
        ahli_id: ahli1.id,
        user_nik: user1.nik
      }
    },
    update: {},
    create: {
      ahli_id: ahli1.id,
      rating: 4.5,
      isi: "Ulasan untuk ahli satu",
      user_nik: user1.nik,
    },
  });

  const ulasanAhli2 = await prisma.ulasanAhli.upsert({
    where: { 
      ahli_id_user_nik: {
        ahli_id: ahli2.id,
        user_nik: user2.nik
      }
    },
    update: {},
    create: {
      ahli_id: ahli2.id,
      rating: 3.5,
      isi: "Ulasan untuk ahli dua",
      user_nik: user2.nik,
    },
  });

  // Seed UserFavoriteAhli
  const userFavoriteAhli1 = await prisma.userFavoriteAhli.upsert({
    where: {
      email_user_id_ahli: {
        email_user: user1.email,
        id_ahli: ahli1.id,
      }
    },
    update: {},
    create: {
      email_user: user1.email,
      id_ahli: ahli1.id,
    },
  });

  const userFavoriteAhli2 = await prisma.userFavoriteAhli.upsert({
    where: {
      email_user_id_ahli: {
        email_user: user2.email,
        id_ahli: ahli2.id,
      }
    },
    update: {},
    create: {
      email_user: user2.email,
      id_ahli: ahli2.id,
    },
  });

  console.log('Data seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
