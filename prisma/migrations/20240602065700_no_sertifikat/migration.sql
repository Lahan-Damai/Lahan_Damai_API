/*
  Warnings:

  - A unique constraint covering the columns `[no_sertifikat]` on the table `laporans` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "laporans_no_sertifikat_key" ON "laporans"("no_sertifikat");
