/*
  Warnings:

  - The primary key for the `foto_laporan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `foto_laporan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "foto_laporan" DROP CONSTRAINT "foto_laporan_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "foto_laporan_pkey" PRIMARY KEY ("url", "no_sertifikat");
