/*
  Warnings:

  - Added the required column `comment` to the `komentar_sengketa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "komentar_sengketa" ADD COLUMN     "comment" TEXT NOT NULL;
