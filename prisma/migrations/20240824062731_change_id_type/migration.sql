/*
  Warnings:

  - You are about to alter the column `id` on the `laporans` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(6)`.

*/
-- AlterTable
ALTER TABLE "laporans" ALTER COLUMN "id" SET DATA TYPE VARCHAR(6);
