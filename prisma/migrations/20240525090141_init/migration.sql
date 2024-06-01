-- CreateTable
CREATE TABLE "users" (
    "nik" VARCHAR(16) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "alamat" TEXT NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "token" VARCHAR(100),
    "role" VARCHAR(20) NOT NULL DEFAULT 'user',

    CONSTRAINT "users_pkey" PRIMARY KEY ("nik")
);

-- CreateTable
CREATE TABLE "laporans" (
    "id" SERIAL NOT NULL,
    "judul" VARCHAR(150) NOT NULL,
    "user_nik" VARCHAR(16) NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "foto" BYTEA,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "proses_laporan" VARCHAR(10) NOT NULL,

    CONSTRAINT "laporans_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "ahli" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "bidang" VARCHAR(50) NOT NULL,
    "nomor_WA" VARCHAR(20) NOT NULL,

    CONSTRAINT "ahli_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "laporans" ADD CONSTRAINT "laporans_user_nik_fkey" FOREIGN KEY ("user_nik") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_user_nik_fkey" FOREIGN KEY ("user_nik") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_user_nik_fkey" FOREIGN KEY ("user_nik") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "threads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "replies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
