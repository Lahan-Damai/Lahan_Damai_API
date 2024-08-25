/*
  Warnings:

  - You are about to drop the column `isInserted` on the `file_context` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "file_context" DROP COLUMN "isInserted",
ADD COLUMN     "is_inserted" BOOLEAN NOT NULL DEFAULT false;
