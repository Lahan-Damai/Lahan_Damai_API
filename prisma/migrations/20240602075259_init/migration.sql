-- CreateTable
CREATE TABLE "users" (
    "nik" VARCHAR(16) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "alamat" TEXT NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "token" VARCHAR(100),
    "role" VARCHAR(20) NOT NULL DEFAULT 'user',
    "tanggal_lahir" TIMESTAMP(3),
    "foto" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("nik")
);

-- CreateTable
CREATE TABLE "laporans" (
    "id" SERIAL NOT NULL,
    "no_sertifikat" VARCHAR(150) NOT NULL,
    "user_nik" VARCHAR(16) NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "proses_laporan" VARCHAR(10) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "laporans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foto_laporan" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "laporan_id" INTEGER NOT NULL,

    CONSTRAINT "foto_laporan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "threads" (
    "id" SERIAL NOT NULL,
    "judul" VARCHAR(150) NOT NULL,
    "user_nik" VARCHAR(16) NOT NULL,
    "isi" TEXT NOT NULL,
    "tanggal_upload" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "threads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "replies" (
    "id" SERIAL NOT NULL,
    "isi" VARCHAR(255) NOT NULL,
    "user_nik" VARCHAR(16) NOT NULL,
    "thread_id" INTEGER NOT NULL,
    "parent_id" INTEGER,
    "tanggal_upload" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "replies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_edukasi" (
    "id" SERIAL NOT NULL,
    "judul" VARCHAR(150) NOT NULL,
    "deskripsi" VARCHAR(255) NOT NULL,
    "isi" TEXT NOT NULL,
    "publisher" VARCHAR(50) NOT NULL,
    "tanggal_upload" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "post_edukasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ulasan_ahli" (
    "id" SERIAL NOT NULL,
    "ahli_id" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "isi" VARCHAR(255) NOT NULL,
    "nama_user" VARCHAR(100) NOT NULL,

    CONSTRAINT "ulasan_ahli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ahli" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "bidang" VARCHAR(50) NOT NULL,
    "nomor_WA" VARCHAR(20) NOT NULL,
    "deskripsi" VARCHAR(255) NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "lama_kerja" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ahli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_favorite_ahli" (
    "email_user" VARCHAR(64) NOT NULL,
    "id_ahli" INTEGER NOT NULL,

    CONSTRAINT "user_favorite_ahli_pkey" PRIMARY KEY ("email_user","id_ahli")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "laporans_no_sertifikat_key" ON "laporans"("no_sertifikat");

-- AddForeignKey
ALTER TABLE "laporans" ADD CONSTRAINT "laporans_user_nik_fkey" FOREIGN KEY ("user_nik") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foto_laporan" ADD CONSTRAINT "foto_laporan_laporan_id_fkey" FOREIGN KEY ("laporan_id") REFERENCES "laporans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_user_nik_fkey" FOREIGN KEY ("user_nik") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_user_nik_fkey" FOREIGN KEY ("user_nik") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "threads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "replies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ulasan_ahli" ADD CONSTRAINT "ulasan_ahli_ahli_id_fkey" FOREIGN KEY ("ahli_id") REFERENCES "ahli"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_ahli" ADD CONSTRAINT "user_favorite_ahli_email_user_fkey" FOREIGN KEY ("email_user") REFERENCES "users"("email") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_ahli" ADD CONSTRAINT "user_favorite_ahli_id_ahli_fkey" FOREIGN KEY ("id_ahli") REFERENCES "ahli"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
