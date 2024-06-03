/*
  Warnings:

  - You are about to drop the column `laporan_id` on the `foto_laporan` table. All the data in the column will be lost.
  - The primary key for the `laporans` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `laporans` table. All the data in the column will be lost.
  - Added the required column `no_sertifikat` to the `foto_laporan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "foto_laporan" DROP CONSTRAINT "foto_laporan_laporan_id_fkey";

-- DropIndex
DROP INDEX "laporans_no_sertifikat_key";

-- AlterTable
ALTER TABLE "foto_laporan" DROP COLUMN "laporan_id",
ADD COLUMN     "no_sertifikat" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "laporans" DROP CONSTRAINT "laporans_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "laporans_pkey" PRIMARY KEY ("no_sertifikat");

-- AddForeignKey
ALTER TABLE "foto_laporan" ADD CONSTRAINT "foto_laporan_no_sertifikat_fkey" FOREIGN KEY ("no_sertifikat") REFERENCES "laporans"("no_sertifikat") ON DELETE RESTRICT ON UPDATE CASCADE;
