/*
  Warnings:

  - The primary key for the `ulasan_ahli` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ulasan_ahli` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ulasan_ahli" DROP CONSTRAINT "ulasan_ahli_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ulasan_ahli_pkey" PRIMARY KEY ("ahli_id", "user_nik");
