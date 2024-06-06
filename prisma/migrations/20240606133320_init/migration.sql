/*
  Warnings:

  - You are about to drop the column `parent_id` on the `replies` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_thread_id_fkey";

-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_user_nik_fkey";

-- DropForeignKey
ALTER TABLE "threads" DROP CONSTRAINT "threads_user_nik_fkey";

-- AlterTable
ALTER TABLE "laporans" ADD COLUMN     "tanggal_lapor" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "replies" DROP COLUMN "parent_id",
ALTER COLUMN "tanggal_upload" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "threads" ALTER COLUMN "tanggal_upload" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_user_nik_fkey" FOREIGN KEY ("user_nik") REFERENCES "users"("nik") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_user_nik_fkey" FOREIGN KEY ("user_nik") REFERENCES "users"("nik") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE;
