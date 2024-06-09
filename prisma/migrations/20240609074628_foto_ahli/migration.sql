/*
  Warnings:

  - You are about to drop the `foto_ahli` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "foto_ahli" DROP CONSTRAINT "foto_ahli_ahli_id_fkey";

-- AlterTable
ALTER TABLE "ahli" ADD COLUMN     "foto" TEXT;

-- DropTable
DROP TABLE "foto_ahli";
