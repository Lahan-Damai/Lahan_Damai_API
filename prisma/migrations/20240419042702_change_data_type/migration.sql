/*
  Warnings:

  - You are about to alter the column `nama` on the `ahli` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `bidang` on the `ahli` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `nomorWA` on the `ahli` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `judul` on the `laporans` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - You are about to alter the column `userNIK` on the `laporans` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(16)`.
  - You are about to alter the column `prosesLaporan` on the `laporans` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to alter the column `judul` on the `post_edukasi` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - You are about to alter the column `deskripsi` on the `post_edukasi` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `publisher` on the `post_edukasi` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `isi` on the `replies` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `userNIK` on the `replies` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(16)`.
  - You are about to alter the column `judul` on the `threads` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - You are about to alter the column `userNIK` on the `threads` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(16)`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `nik` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(16)`.
  - You are about to alter the column `nama` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- DropForeignKey
ALTER TABLE "laporans" DROP CONSTRAINT "laporans_userNIK_fkey";

-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_userNIK_fkey";

-- DropForeignKey
ALTER TABLE "threads" DROP CONSTRAINT "threads_userNIK_fkey";

-- AlterTable
ALTER TABLE "ahli" ALTER COLUMN "nama" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "bidang" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "nomorWA" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "laporans" ALTER COLUMN "judul" SET DATA TYPE VARCHAR(150),
ALTER COLUMN "userNIK" SET DATA TYPE VARCHAR(16),
ALTER COLUMN "prosesLaporan" SET DATA TYPE VARCHAR(10);

-- AlterTable
ALTER TABLE "post_edukasi" ALTER COLUMN "judul" SET DATA TYPE VARCHAR(150),
ALTER COLUMN "deskripsi" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "publisher" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "replies" ALTER COLUMN "isi" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "userNIK" SET DATA TYPE VARCHAR(16);

-- AlterTable
ALTER TABLE "threads" ALTER COLUMN "judul" SET DATA TYPE VARCHAR(150),
ALTER COLUMN "userNIK" SET DATA TYPE VARCHAR(16);

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ADD COLUMN     "token" VARCHAR(100),
ALTER COLUMN "nik" SET DATA TYPE VARCHAR(16),
ALTER COLUMN "nama" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(100),
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("nik");

-- AddForeignKey
ALTER TABLE "laporans" ADD CONSTRAINT "laporans_userNIK_fkey" FOREIGN KEY ("userNIK") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_userNIK_fkey" FOREIGN KEY ("userNIK") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_userNIK_fkey" FOREIGN KEY ("userNIK") REFERENCES "users"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;
