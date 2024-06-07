/*
  Warnings:

  - Added the required column `sumber` to the `post_edukasi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ulasan_ahli" DROP CONSTRAINT "ulasan_ahli_ahli_id_fkey";

-- DropForeignKey
ALTER TABLE "ulasan_ahli" DROP CONSTRAINT "ulasan_ahli_user_nik_fkey";

-- DropForeignKey
ALTER TABLE "user_favorite_ahli" DROP CONSTRAINT "user_favorite_ahli_email_user_fkey";

-- DropForeignKey
ALTER TABLE "user_favorite_ahli" DROP CONSTRAINT "user_favorite_ahli_id_ahli_fkey";

-- AlterTable
ALTER TABLE "post_edukasi" ADD COLUMN     "sumber" TEXT NOT NULL,
ALTER COLUMN "tanggal_upload" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "ulasan_ahli" ADD CONSTRAINT "ulasan_ahli_ahli_id_fkey" FOREIGN KEY ("ahli_id") REFERENCES "ahli"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ulasan_ahli" ADD CONSTRAINT "ulasan_ahli_user_nik_fkey" FOREIGN KEY ("user_nik") REFERENCES "users"("nik") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_ahli" ADD CONSTRAINT "user_favorite_ahli_email_user_fkey" FOREIGN KEY ("email_user") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_ahli" ADD CONSTRAINT "user_favorite_ahli_id_ahli_fkey" FOREIGN KEY ("id_ahli") REFERENCES "ahli"("id") ON DELETE CASCADE ON UPDATE CASCADE;
