-- CreateTable
CREATE TABLE "vote_sengketa" (
    "no_sertifikat" TEXT NOT NULL,
    "user_nik" TEXT NOT NULL,
    "user_voter_nik" TEXT NOT NULL,

    CONSTRAINT "vote_sengketa_pkey" PRIMARY KEY ("no_sertifikat","user_nik","user_voter_nik")
);

-- CreateTable
CREATE TABLE "komentar_sengketa" (
    "no_sertifikat" TEXT NOT NULL,
    "user_nik" TEXT NOT NULL,
    "user_commenter_nik" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "komentar_sengketa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vote_sengketa" ADD CONSTRAINT "vote_sengketa_user_voter_nik_fkey" FOREIGN KEY ("user_voter_nik") REFERENCES "users"("nik") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vote_sengketa" ADD CONSTRAINT "vote_sengketa_no_sertifikat_user_nik_fkey" FOREIGN KEY ("no_sertifikat", "user_nik") REFERENCES "laporans"("no_sertifikat", "user_nik") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "komentar_sengketa" ADD CONSTRAINT "komentar_sengketa_user_commenter_nik_fkey" FOREIGN KEY ("user_commenter_nik") REFERENCES "users"("nik") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "komentar_sengketa" ADD CONSTRAINT "komentar_sengketa_no_sertifikat_user_nik_fkey" FOREIGN KEY ("no_sertifikat", "user_nik") REFERENCES "laporans"("no_sertifikat", "user_nik") ON DELETE CASCADE ON UPDATE CASCADE;
