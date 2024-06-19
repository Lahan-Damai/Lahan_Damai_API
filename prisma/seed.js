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

  const user5 = await prisma.user.upsert({
    where: { email: "admin123@gmail.com" },
    update: {},
    create: {
      nik: "5678901234567890",
      email: "admin123@gmail.com",
      nama: "admin",
      alamat: "Jalan Kebon Ikan No.5",
      password: "admin123",
      role: "admin",
      tanggal_lahir: new Date("1998-05-05"),
    },
  });

  const user6 = await prisma.user.upsert({
    where: { email: "damai01@gmail.com" },
    update: {},
    create: {
      nik: "6789012345678901",
      email: "damai01@gmail.com",
      nama: "User Lima",
      alamat: "Jalan palakali No.6, beji, depok",
      password: "lahanku123",
      role: "user",
      tanggal_lahir: new Date("1992-06-06"),
      foto: "https://picsum.photos/200/300",
    },
  });

  const user7 = await prisma.user.upsert({
    where: { email: "damai02@gmail.com" },
    update: {},
    create: {
      nik: "7890123456789012",
      email: "damai02@gmail.com",
      nama: "User Enam",
      alamat: "Jalan Kebon Ikan No.7",
      password: "lahanku123",
      role: "user",
      tanggal_lahir: new Date("1993-07-07"),
      foto: "https://picsum.photos/200/300",
    },
  });

  const user8 = await prisma.user.upsert({
    where: { email: "damai03@gmail.com" },
    update: {},
    create: {
      nik: "8901234567890123",
      email: "damai03@gmail.com",
      nama: "User Tujuh",
      alamat: "Jalan Kebon Ikan No.8",
      password: "lahanku123",
      role: "user",
      tanggal_lahir: new Date("1994-08-08"),
      foto: "https://picsum.photos/200/300",
    },
  });

  const user9 = await prisma.user.upsert({
    where: { email: "damai04@gmail.com" },
    update: {},
    create: {
      nik: "9012345678901234",
      email: "damai04@gmail.com",
      nama: "User Delapan",
      alamat: "Jalan Kebon Ikan No.9",
      password: "lahanku123",
      role: "user",
      tanggal_lahir: new Date("1995-09-09"),
      foto: "https://picsum.photos/200/300",
    },
  });

  const user10 = await prisma.user.upsert({
    where: { email: "damai05@gmail.com" },
    update: {},
    create: {
      nik: "0123456789012345",
      email: "damai05@gmail.com",
      nama: "User Sembilan",
      alamat: "Jalan Kebon Ikan No.10",
      password: "lahanku123",
      role: "user",
      tanggal_lahir: new Date("1996-10-10"),
      foto: "https://picsum.photos/200/300",
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
      latitude: -6.20000,
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

  const laporan3 = await prisma.laporan.upsert({
    where: { no_sertifikat: "LAP003" },
    update: {},
    create: {
      no_sertifikat: "LAP003",
      user_nik: user3.nik,
      deskripsi: "Laporan ketiga",
      proses_laporan: "open",
      latitude: -63.200000,
      longitude: 106.816666,
    },
  });

  const laporan4 = await prisma.laporan.upsert({
    where: { no_sertifikat: "LAP004" },
    update: {},
    create: {
      no_sertifikat: "LAP004",
      user_nik: user4.nik,
      deskripsi: "Laporan keempat",
      proses_laporan: "open",
      latitude: -2.200000,
      longitude: 100.816666,
    },
  });

  const laporan5 = await prisma.laporan.upsert({
    where: { no_sertifikat: "LAP005" },
    update: {},
    create: {
      no_sertifikat: "LAP005",
      user_nik: user5.nik,
      deskripsi: "Laporan kelima",
      proses_laporan: "open",
      latitude: -6.200000,
      longitude: 103.816666,
    },
  });

  const laporan6 = await prisma.laporan.upsert({
    where: { no_sertifikat: "LAP006" },
    update: {},
    create: {
      no_sertifikat: "LAP006",
      user_nik: user6.nik,
      deskripsi: "Laporan keenam",
      proses_laporan: "open",
      latitude: -20.200000,
      longitude: 106.816666,
    },
  });

  const laporan7 = await prisma.laporan.upsert({
    where: { no_sertifikat: "LAP007" },
    update: {},
    create: {
      no_sertifikat: "LAP007",
      user_nik: user7.nik,
      deskripsi: "Laporan ketujuh",
      proses_laporan: "open",
      latitude: -23.200000,
      longitude: 106.816666,
    },
  });

  const laporan8 = await prisma.laporan.upsert({
    where: { no_sertifikat: "LAP008" },
    update: {},
    create: {
      no_sertifikat: "LAP008",
      user_nik: user8.nik,
      deskripsi: "Laporan kedelapan",
      proses_laporan: "open",
      latitude: -17.200000,
      longitude: 106.816666,
    },
  });

  const laporan9 = await prisma.laporan.upsert({
    where: { no_sertifikat: "LAP009" },
    update: {},
    create: {
      no_sertifikat: "LAP009",
      user_nik: user9.nik,
      deskripsi: "Laporan kesembilan",
      proses_laporan: "open",
      latitude: -12.200000,
      longitude: 106.816666,
    },
  });

  const laporan10 = await prisma.laporan.upsert({
    where: { no_sertifikat: "LAP010" },
    update: {},
    create: {
      no_sertifikat: "LAP010",
      user_nik: user10.nik,
      deskripsi: "Laporan kesepuluh",
      proses_laporan: "open",
      latitude: -16.200000,
      longitude: 106.816666,
    },
  });


  // Seed foto laporan

  await prisma.fotoLaporan.upsert({
    where: { 
      url_no_sertifikat: {
        no_sertifikat: "LAP001",
        url: "https://picsum.photos/200/300",
      }
    },
    update: {},
    create: {
      no_sertifikat: "LAP001",
      url: "https://picsum.photos/200/300",
    },
  });

  await prisma.fotoLaporan.upsert({
    where: { 
      url_no_sertifikat: {
        no_sertifikat: "LAP002",
        url: "https://picsum.photos/200/300",
      }
    },
    update: {},
    create: {
      no_sertifikat: "LAP002",
      url: "https://picsum.photos/200/300",
    },
  });

  await prisma.fotoLaporan.upsert({
    where: { 
      url_no_sertifikat: {
        no_sertifikat: "LAP003",
        url: "https://picsum.photos/200/300",
      }
    },
    update: {},
    create: {
      no_sertifikat: "LAP003",
      url: "https://picsum.photos/200/300",
    },
  });

  await prisma.fotoLaporan.upsert({
    where: { 
      url_no_sertifikat: {
        no_sertifikat: "LAP004",
        url: "https://picsum.photos/200/300",
      }
    },
    update: {},
    create: {
      no_sertifikat: "LAP004",
      url: "https://picsum.photos/200/300",
    },
  });

  await prisma.fotoLaporan.upsert({
    where: { 
      url_no_sertifikat: {
        no_sertifikat: "LAP005",
        url: "https://picsum.photos/200/300",
      }
    },
    update: {},
    create: {
      no_sertifikat: "LAP005",
      url: "https://picsum.photos/200/300",
    },
  });

  await prisma.fotoLaporan.upsert({
    where: { 
      url_no_sertifikat: {
        no_sertifikat: "LAP006",
        url: "https://picsum.photos/200/300",
      }
    },
    update: {},
    create: {
      no_sertifikat: "LAP006",
      url: "https://picsum.photos/200/300",
    },
  });

  await prisma.fotoLaporan.upsert({
    where: { 
      url_no_sertifikat: {
        no_sertifikat: "LAP007",
        url: "https://picsum.photos/200/300",
      }
    },
    update: {},
    create: {
      no_sertifikat: "LAP007",
      url: "https://picsum.photos/200/300",
    },
  });

  await prisma.fotoLaporan.upsert({
    where: {
      url_no_sertifikat: {
        no_sertifikat: "LAP008",
        url: "https://picsum.photos/200/300",
      } 
    }, 
    update: {},
    create: {
      no_sertifikat: "LAP008",
      url: "https://picsum.photos/200/300",
    },
  });

  await prisma.fotoLaporan.upsert({
    where: { 
      url_no_sertifikat: {
        no_sertifikat: "LAP009",
        url: "https://picsum.photos/200/300",
      }
    },
    update: {},
    create: {
      no_sertifikat: "LAP009",
      url: "https://picsum.photos/200/300",
    },
  });

  await prisma.fotoLaporan.upsert({
    where: { 
      url_no_sertifikat: {
        no_sertifikat: "LAP010",
        url: "https://picsum.photos/200/300",
      }
    },
    update: {},
    create: {
      no_sertifikat: "LAP010",
      url: "https://picsum.photos/200/300",
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

  const thread3 = await prisma.thread.upsert({
    where: { id: "thread3-id" },
    update: {},
    create: {
      id: "thread3-id",
      judul: "Thread Ketiga",
      user_nik: user3.nik,
      isi: "Ini adalah isi thread ketiga",
    },
  });

  const thread4 = await prisma.thread.upsert({
    where: { id: "thread4-id" },
    update: {},
    create: {
      id: "thread4-id",
      judul: "Thread Keempat",
      user_nik: user4.nik,
      isi: "Ini adalah isi thread keempat",
    },
  });

  const thread5 = await prisma.thread.upsert({
    where: { id: "thread5-id" },
    update: {},
    create: {
      id: "thread5-id",
      judul: "Thread Kelima",
      user_nik: user5.nik,
      isi: "Ini adalah isi thread kelima",
    },
  });

  const thread6 = await prisma.thread.upsert({
    where: { id: "thread6-id" },
    update: {},
    create: {
      id: "thread6-id",
      judul: "Thread Keenam",
      user_nik: user6.nik,
      isi: "Ini adalah isi thread keenam",
    },
  });

  const thread7 = await prisma.thread.upsert({
    where: { id: "thread7-id" },
    update: {},
    create: {
      id: "thread7-id",
      judul: "Thread Ketujuh",
      user_nik: user7.nik,
      isi: "Ini adalah isi thread ketujuh",
    },
  });

  const thread8 = await prisma.thread.upsert({
    where: { id: "thread8-id" },
    update: {},
    create: {
      id: "thread8-id",
      judul: "Thread kedelapan",
      user_nik: user8.nik,
      isi: "Ini adalah isi thread kedelapan",
    },
  });

  const thread9 = await prisma.thread.upsert({
    where: { id: "thread9-id" },
    update: {},
    create: {
      id: "thread9-id",
      judul: "Thread kesembilan",
      user_nik: user9.nik,
      isi: "Ini adalah isi thread kesembilan",
    },
  });

  const thread10 = await prisma.thread.upsert({
    where: { id: "thread10-id" },
    update: {},
    create: {
      id: "thread10-id",
      judul: "Thread kesepuluh",
      user_nik: user10.nik,
      isi: "Ini adalah isi thread kesepuluh",
    },
  });

  // Seed replies
  const reply1 = await prisma.reply.upsert({
    where: { id: "reply1-id" },
    update: {},
    create: {
      id: "reply1-id", 
      isi: "Ini adalah balasan pertama",
      user_nik: user1.nik,
      thread_id: thread1.id,
    },
  });

  const reply2 = await prisma.reply.upsert({
    where: { id: "reply2-id" },
    update: {},
    create: {
      id: "reply2-id", 
      isi: "Ini adalah balasan kedua",
      user_nik: user2.nik,
      thread_id: thread2.id,
    },
  });

  const reply3 = await prisma.reply.upsert({
    where: { id: "reply3-id" },
    update: {},
    create: {
      id: "reply3-id", 
      isi: "Ini adalah balasan ketiga",
      user_nik: user3.nik,
      thread_id: thread3.id,
    },
  });

  const reply4 = await prisma.reply.upsert({
    where: { id: "reply4-id" },
    update: {},
    create: {
      id: "reply4-id", 
      isi: "Ini adalah balasan keempat",
      user_nik: user4.nik,
      thread_id: thread4.id,
    },
  });

  const reply5 = await prisma.reply.upsert({
    where: { id: "reply5-id" },
    update: {},
    create: {
      id: "reply5-id", 
      isi: "Ini adalah balasan kelima",
      user_nik: user5.nik,
      thread_id: thread5.id,
    },
  });

  const reply6 = await prisma.reply.upsert({
    where: { id: "reply6-id" },
    update: {},
    create: {
      id: "reply6-id", 
      isi: "Ini adalah balasan keenam",
      user_nik: user6.nik,
      thread_id: thread6.id,
    },
  });

  const reply7 = await prisma.reply.upsert({
    where: { id: "reply7-id" },
    update: {},
    create: {
      id: "reply7-id", 
      isi: "Ini adalah balasan ketujuh",
      user_nik: user7.nik,
      thread_id: thread7.id,
    },
  });

  const reply8 = await prisma.reply.upsert({
    where: { id: "reply8-id" },
    update: {},
    create: {
      id: "reply8-id", 
      isi: "Ini adalah balasan kedelapan",
      user_nik: user8.nik,
      thread_id: thread8.id,
    },
  });

  const reply9 = await prisma.reply.upsert({
    where: { id: "reply9-id" },
    update: {},
    create: {
      id: "reply9-id", 
      isi: "Ini adalah balasan kesembilan",
      user_nik: user9.nik,
      thread_id: thread9.id,
    },
  });

  const reply10 = await prisma.reply.upsert({
    where: { id: "reply10-id" },
    update: {},
    create: {
      id: "reply10-id", 
      isi: "Ini adalah balasan kesepuluh",
      user_nik: user10.nik,
      thread_id: thread10.id,
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

  const postEdukasi3 = await prisma.postEdukasi.upsert({
    where: { id: "postEdukasi3-id" },
    update: {},
    create: {
      id: "postEdukasi3-id", 
      judul: "Post Edukasi Ketiga",
      deskripsi: "Deskripsi post edukasi ketiga",
      isi: "Isi dari post edukasi ketiga",
      publisher: "Publisher 3",
      sumber: "Sumber 3",
    },
  });

  const postEdukasi4 = await prisma.postEdukasi.upsert({
    where: { id: "postEdukasi4-id" },
    update: {},
    create: {
      id: "postEdukasi4-id", 
      judul: "Post Edukasi Keempat",
      deskripsi: "Deskripsi post edukasi keempat",
      isi: "Isi dari post edukasi keempat",
      publisher: "Publisher 4",
      sumber: "Sumber 4",
    },
  });

  const postEdukasi5 = await prisma.postEdukasi.upsert({
    where: { id: "postEdukasi5-id" },
    update: {},
    create: {
      id: "postEdukasi5-id", 
      judul: "Post Edukasi Kelima",
      deskripsi: "Deskripsi post edukasi kelima",
      isi: "Isi dari post edukasi kelima",
      publisher: "Publisher 5",
      sumber: "Sumber 5",
    },
  });

  const postEdukasi6 = await prisma.postEdukasi.upsert({
    where: { id: "postEdukasi6-id" },
    update: {},
    create: {
      id: "postEdukasi6-id", 
      judul: "Post Edukasi Keenam",
      deskripsi: "Deskripsi post edukasi keenam",
      isi: "Isi dari post edukasi keenam",
      publisher: "Publisher 6",
      sumber: "Sumber 6",
    },
  });

  const postEdukasi7 = await prisma.postEdukasi.upsert({
    where: { id: "postEdukasi7-id" },
    update: {},
    create: {
      id: "postEdukasi7-id", 
      judul: "Post Edukasi Ketujuh",
      deskripsi: "Deskripsi post edukasi ketujuh",
      isi: "Isi dari post edukasi ketujuh",
      publisher: "Publisher 7",
      sumber: "Sumber 7",
    },
  });

  const postEdukasi8 = await prisma.postEdukasi.upsert({
    where: { id: "postEdukasi8-id" },
    update: {},
    create: {
      id: "postEdukasi8-id", 
      judul: "Post Edukasi Kedelapan",
      deskripsi: "Deskripsi post edukasi kedelapan",
      isi: "Isi dari post edukasi kedelapan",
      publisher: "Publisher 8",
      sumber: "Sumber 8",
    },
  });

  const postEdukasi9 = await prisma.postEdukasi.upsert({
    where: { id: "postEdukasi9-id" },
    update: {},
    create: {
      id: "postEdukasi9-id", 
      judul: "Post Edukasi Kesembilan",
      deskripsi: "Deskripsi post edukasi kesembilan",
      isi: "Isi dari post edukasi kesembilan",
      publisher: "Publisher 9",
      sumber: "Sumber 9",
    },
  });

  const postEdukasi10 = await prisma.postEdukasi.upsert({
    where: { id: "postEdukasi10-id" },
    update: {},
    create: {
      id: "postEdukasi10-id", 
      judul: "Post Edukasi Kesepuluh",
      deskripsi: "Deskripsi post edukasi kesepuluh",
      isi: "Isi dari post edukasi kesepuluh",
      publisher: "Publisher 10",
      sumber: "Sumber 10",
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

  const ahli4 = await prisma.ahli.upsert({
    where: { id: "ahli4-id" },
    update: {},
    create: {
      id: "ahli4-id",
      nama: "Ahli Empat",
      bidang: "Bidang Empat",
      nomor_wa: "08123456792",
      deskripsi: "Deskripsi ahli empat",
      lama_kerja: 40,
    },
  });

  const ahli5 = await prisma.ahli.upsert({  
    where: { id: "ahli5-id" },
    update: {},
    create: {
      id: "ahli5-id",
      nama: "Ahli Lima",
      bidang: "Bidang Lima",
      nomor_wa: "08123456793",
      deskripsi: "Deskripsi ahli lima",
      lama_kerja: 50,
    }
  });

  const ahli6 = await prisma.ahli.upsert({
    where: { id: "ahli6-id" },
    update: {},
    create: {
      id: "ahli6-id",
      nama: "Ahli Enam",
      bidang: "Bidang Enam",
      nomor_wa: "08123456794",
      deskripsi: "Deskripsi ahli enam",
      lama_kerja: 60,
    },
  });

  const ahli7 = await prisma.ahli.upsert({
    where: { id: "ahli7-id" },
    update: {},
    create: {
      id: "ahli7-id",
      nama: "Ahli Tujuh",
      bidang: "Bidang Tujuh",
      nomor_wa: "08123456795",
      deskripsi: "Deskripsi ahli tujuh",
      lama_kerja: 70,
    },
  });

  const ahli8 = await prisma.ahli.upsert({
    where: { id: "ahli8-id" },
    update: {},
    create: {
      id: "ahli8-id",
      nama: "Ahli Delapan",
      bidang: "Bidang Delapan",
      nomor_wa: "08123456796",
      deskripsi: "Deskripsi ahli delapan",
      lama_kerja: 80,
    },
  });

  const ahli9 = await prisma.ahli.upsert({
    where: { id: "ahli9-id" },
    update: {},
    create: {
      id: "ahli9-id",
      nama: "Ahli Sepuluh",
      bidang: "Bidang Sepuluh",
      nomor_wa: "08123456797",
      deskripsi: "Deskripsi ahli sepuluh",
      lama_kerja: 90,
    },
  });

  const ahli10 = await prisma.ahli.upsert({
    where: { id: "ahli10-id" },
    update: {},
    create: {
      id: "ahli10-id",
      nama: "Ahli Sebelas",
      bidang: "Bidang Sebelas",
      nomor_wa: "08123456798",
      deskripsi: "Deskripsi ahli sebelas",
      lama_kerja: 100,
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


  const ulasanAhli3 = await prisma.ulasanAhli.upsert({
    where: { 
      ahli_id_user_nik: {
        ahli_id: ahli3.id,
        user_nik: user3.nik
      }
    },
    update: {},
    create: {
      ahli_id: ahli3.id,
      rating: 5,
      isi: "Ulasan untuk ahli tiga",
      user_nik: user3.nik,
    },
  });


  const ulasanAhli4 = await prisma.ulasanAhli.upsert({
    where: { 
      ahli_id_user_nik: {
        ahli_id: ahli4.id,
        user_nik: user4.nik
      }
    },
    update: {},
    create: {
      ahli_id: ahli4.id,
      rating: 4,
      isi: "Ulasan untuk ahli empat",
      user_nik: user4.nik,
    },
  });


  const ulasanAhli5 = await prisma.ulasanAhli.upsert({
    where: {
      ahli_id_user_nik: {
        ahli_id: ahli5.id,
        user_nik: user5.nik
      }
    },
    update: {},
    create: {
      ahli_id: ahli5.id,
      rating: 3,
      isi: "Ulasan untuk ahli lima",
      user_nik: user5.nik,
    },
  });


  const ulasanAhli6 = await prisma.ulasanAhli.upsert({
    where: {
      ahli_id_user_nik: {
        ahli_id: ahli6.id,
        user_nik: user6.nik
      }
    },
    update: {},
    create: {
      ahli_id: ahli6.id,
      rating: 2,
      isi: "Ulasan untuk ahli enam",
      user_nik: user6.nik,
    },
  });


  const ulasanAhli7 = await prisma.ulasanAhli.upsert({
    where: {
      ahli_id_user_nik: {
        ahli_id: ahli7.id,
        user_nik: user7.nik
      }
    },
    update: {},
    create: {
      ahli_id: ahli7.id,
      rating: 1,
      isi: "Ulasan untuk ahli tujuh",
      user_nik: user7.nik,
    },
  });


  const ulasanAhli8 = await prisma.ulasanAhli.upsert({
    where: {
      ahli_id_user_nik: {
        ahli_id: ahli8.id,
        user_nik: user8.nik
      }
    },
    update: {},
    create: {
      ahli_id: ahli8.id,
      rating: 5,
      isi: "Ulasan untuk ahli delapan",
      user_nik: user8.nik,
    },
  });


  const ulasanAhli9 = await prisma.ulasanAhli.upsert({
    where: {
      ahli_id_user_nik: {
        ahli_id: ahli9.id,
        user_nik: user9.nik
      }
    },
    update: {},
    create: {
      ahli_id: ahli9.id,
      rating: 4,
      isi: "Ulasan untuk ahli sembilan",
      user_nik: user9.nik,
    },
  });


  const ulasanAhli10 = await prisma.ulasanAhli.upsert({
    where: {
      ahli_id_user_nik: {
        ahli_id: ahli10.id,
        user_nik: user10.nik
      }
    },
    update: {},
    create: {
      ahli_id: ahli10.id,
      rating: 3,
      isi: "Ulasan untuk ahli sepuluh",
      user_nik: user10.nik,
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
