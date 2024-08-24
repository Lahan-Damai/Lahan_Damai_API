/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `laporans` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `laporans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "laporans" ADD COLUMN     "id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "laporans_id_key" ON "laporans"("id");
