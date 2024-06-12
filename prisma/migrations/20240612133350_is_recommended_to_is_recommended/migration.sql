/*
  Warnings:

  - You are about to drop the column `isRecommended` on the `post_edukasi` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "post_edukasi" DROP COLUMN "isRecommended",
ADD COLUMN     "is_recommended" BOOLEAN NOT NULL DEFAULT false;
