/*
  Warnings:

  - The primary key for the `ahli` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `foto_artikel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `post_edukasi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `replies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `threads` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ulasan_ahli` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_favorite_ahli` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "foto_artikel" DROP CONSTRAINT "foto_artikel_id_artikel_fkey";

-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_thread_id_fkey";

-- DropForeignKey
ALTER TABLE "ulasan_ahli" DROP CONSTRAINT "ulasan_ahli_ahli_id_fkey";

-- DropForeignKey
ALTER TABLE "user_favorite_ahli" DROP CONSTRAINT "user_favorite_ahli_id_ahli_fkey";

-- AlterTable
ALTER TABLE "ahli" DROP CONSTRAINT "ahli_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ahli_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ahli_id_seq";

-- AlterTable
ALTER TABLE "foto_artikel" DROP CONSTRAINT "foto_artikel_pkey",
ALTER COLUMN "id_artikel" SET DATA TYPE TEXT,
ADD CONSTRAINT "foto_artikel_pkey" PRIMARY KEY ("url", "id_artikel");

-- AlterTable
ALTER TABLE "post_edukasi" DROP CONSTRAINT "post_edukasi_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "post_edukasi_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "post_edukasi_id_seq";

-- AlterTable
ALTER TABLE "replies" DROP CONSTRAINT "replies_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "thread_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "replies_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "replies_id_seq";

-- AlterTable
ALTER TABLE "threads" DROP CONSTRAINT "threads_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "threads_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "threads_id_seq";

-- AlterTable
ALTER TABLE "ulasan_ahli" DROP CONSTRAINT "ulasan_ahli_pkey",
ALTER COLUMN "ahli_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ulasan_ahli_pkey" PRIMARY KEY ("ahli_id", "user_nik");

-- AlterTable
ALTER TABLE "user_favorite_ahli" DROP CONSTRAINT "user_favorite_ahli_pkey",
ALTER COLUMN "id_ahli" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_favorite_ahli_pkey" PRIMARY KEY ("email_user", "id_ahli");

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foto_artikel" ADD CONSTRAINT "foto_artikel_id_artikel_fkey" FOREIGN KEY ("id_artikel") REFERENCES "post_edukasi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ulasan_ahli" ADD CONSTRAINT "ulasan_ahli_ahli_id_fkey" FOREIGN KEY ("ahli_id") REFERENCES "ahli"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_ahli" ADD CONSTRAINT "user_favorite_ahli_id_ahli_fkey" FOREIGN KEY ("id_ahli") REFERENCES "ahli"("id") ON DELETE CASCADE ON UPDATE CASCADE;
