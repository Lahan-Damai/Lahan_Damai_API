-- CreateTable
CREATE TABLE "users" (
    "nik" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("nik")
);

-- CreateTable
CREATE TABLE "laporans" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "userNIK" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "foto" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "prosesLaporan" TEXT NOT NULL,

    CONSTRAINT "laporans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "threads" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "userNIK" TEXT NOT NULL,
    "isi" TEXT NOT NULL,
    "tanggalUpload" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "threads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "replies" (
    "id" SERIAL NOT NULL,
    "isi" TEXT NOT NULL,
    "userNIK" TEXT NOT NULL,
    "threadId" INTEGER NOT NULL,
    "parentId" INTEGER,
    "tanggalUpload" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "replies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_edukasi" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "isi" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "tanggalUpload" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "post_edukasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ahli" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "bidang" TEXT NOT NULL,
    "nomorWA" TEXT NOT NULL,

    CONSTRAINT "ahli_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "laporans" ADD CONSTRAINT "laporans_userNIK_fkey" FOREIGN KEY ("userNIK") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_userNIK_fkey" FOREIGN KEY ("userNIK") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_userNIK_fkey" FOREIGN KEY ("userNIK") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "threads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "replies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
