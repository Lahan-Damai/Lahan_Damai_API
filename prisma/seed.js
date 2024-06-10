import { PrismaClient } from '@prisma/client';
import faker from 'faker';

const prisma = new PrismaClient();

const generateUsers = (count) => Array.from({ length: count }, (_, index) => ({
  nik: faker.datatype.uuid().slice(0, 16),
  email: `user${index + 1}@example.com`,
  nama: faker.name.findName(),
  alamat: faker.address.streetAddress(),
  password: faker.internet.password(),
  tanggal_lahir: faker.date.past(),
  role: 'user',
  token: faker.datatype.uuid().slice(0, 100),
}));

const generateAhli = (count) => Array.from({ length: count }, () => ({
  nama: faker.name.findName(),
  bidang: faker.name.jobType(),
  nomor_wa: faker.phone.phoneNumber('08##########'),
  deskripsi: faker.lorem.sentence(),
  lama_kerja: faker.datatype.float({ min: 1, max: 20 }),
  foto: faker.image.avatar(),
}));

const generateLaporan = (users, count) => Array.from({ length: count }, () => {
  const user = faker.random.arrayElement(users);
  return {
    no_sertifikat: faker.datatype.uuid(),
    user_nik: user.nik,
    deskripsi: faker.lorem.sentence(),
    proses_laporan: 'open',
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    tanggal_lapor: faker.date.recent(),
  };
});

const generateFotoLaporan = (laporans, count) => laporans.flatMap(laporan => Array.from({ length: count }, () => ({
  url: faker.image.imageUrl(),
  no_sertifikat: laporan.no_sertifikat,
})));

const generateThreads = (users, count) => Array.from({ length: count }, () => {
  const user = faker.random.arrayElement(users);
  return {
    judul: faker.lorem.sentence(),
    user_nik: user.nik,
    isi: faker.lorem.paragraph(),
    tanggal_upload: faker.date.recent(),
  };
});

const generateReplies = (users, threads, count) => threads.flatMap(thread => Array.from({ length: count }, () => {
  const user = faker.random.arrayElement(users);
  return {
    isi: faker.lorem.sentence(),
    user_nik: user.nik,
    thread_id: thread.id,
    tanggal_upload: faker.date.recent(),
  };
}));

const generatePostEdukasi = (count) => Array.from({ length: count }, () => ({
  judul: faker.lorem.sentence(),
  deskripsi: faker.lorem.sentence(),
  isi: faker.lorem.paragraph(),
  publisher: faker.company.companyName(),
  tanggal_upload: faker.date.recent(),
  sumber: faker.internet.url(),
}));

const generateFotoArtikel = (posts, count) => posts.flatMap(post => Array.from({ length: count }, () => ({
  url: faker.image.imageUrl(),
  id_artikel: post.id,
})));

const generateUlasanAhli = (users, ahlis, count) => ahlis.flatMap(ahli => Array.from({ length: count }, () => {
  const user = faker.random.arrayElement(users);
  return {
    ahli_id: ahli.id,
    rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
    isi: faker.lorem.sentence(),
    user_nik: user.nik,
  };
}));

const generateUserFavoriteAhli = (users, ahlis, count) => ahlis.flatMap(ahli => Array.from({ length: count }, () => {
  const user = faker.random.arrayElement(users);
  return {
    email_user: user.email,
    id_ahli: ahli.id,
  };
}));

async function main() {
  const users = generateUsers(10);
  const ahlis = generateAhli(5);
  const laporans = generateLaporan(users, 10);
  const fotoLaporans = generateFotoLaporan(laporans, 2);
  const threads = generateThreads(users, 10);
  const replies = generateReplies(users, threads, 5);
  const posts = generatePostEdukasi(5);
  const fotoArtikels = generateFotoArtikel(posts, 2);
  const ulasanAhlis = generateUlasanAhli(users, ahlis, 3);
  const userFavoriteAhlis = generateUserFavoriteAhli(users, ahlis, 3);

  await prisma.user.createMany({ data: users });
  await prisma.ahli.createMany({ data: ahlis });
  await prisma.laporan.createMany({ data: laporans });
  await prisma.fotoLaporan.createMany({ data: fotoLaporans });
  await prisma.thread.createMany({ data: threads });
  await prisma.reply.createMany({ data: replies });
  await prisma.postEdukasi.createMany({ data: posts });
  await prisma.fotoArtikel.createMany({ data: fotoArtikels });
  await prisma.ulasanAhli.createMany({ data: ulasanAhlis });
  await prisma.userFavoriteAhli.createMany({ data: userFavoriteAhlis });

  console.log('Seeding finished.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
