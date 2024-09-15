-- CreateTable
CREATE TABLE "foto_dokumen_pendukung" (
    "url" TEXT NOT NULL,
    "no_sertifikat" TEXT NOT NULL,
    "user_nik" TEXT NOT NULL,

    CONSTRAINT "foto_dokumen_pendukung_pkey" PRIMARY KEY ("url","no_sertifikat","user_nik")
);

-- AddForeignKey
ALTER TABLE "foto_dokumen_pendukung" ADD CONSTRAINT "foto_dokumen_pendukung_no_sertifikat_user_nik_fkey" FOREIGN KEY ("no_sertifikat", "user_nik") REFERENCES "laporans"("no_sertifikat", "user_nik") ON DELETE CASCADE ON UPDATE CASCADE;
