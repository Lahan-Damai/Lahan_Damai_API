/*
  Warnings:

  - The primary key for the `foto_laporan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `laporans` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `user_nik` to the `foto_laporan` table without a default value. This is not possible if the table is not empty.

*/
-- Truncate
TRUNCATE TABLE "foto_laporan";

-- DropForeignKey
ALTER TABLE "foto_laporan" DROP CONSTRAINT "foto_laporan_no_sertifikat_fkey";

-- AlterTable
ALTER TABLE "foto_laporan" DROP CONSTRAINT "foto_laporan_pkey",
ADD COLUMN     "user_nik" TEXT NOT NULL,
ADD CONSTRAINT "foto_laporan_pkey" PRIMARY KEY ("url", "no_sertifikat", "user_nik");

-- AlterTable
ALTER TABLE "laporans" DROP CONSTRAINT "laporans_pkey",
ADD CONSTRAINT "laporans_pkey" PRIMARY KEY ("no_sertifikat", "user_nik");

-- AlterTable
ALTER TABLE "replies" ADD COLUMN     "parent_id" TEXT;

-- AddForeignKey
ALTER TABLE "foto_laporan" ADD CONSTRAINT "foto_laporan_no_sertifikat_user_nik_fkey" FOREIGN KEY ("no_sertifikat", "user_nik") REFERENCES "laporans"("no_sertifikat", "user_nik") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "replies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
