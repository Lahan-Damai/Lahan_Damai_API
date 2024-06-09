-- CreateTable
CREATE TABLE "foto_ahli" (
    "url" TEXT NOT NULL,
    "ahli_id" INTEGER NOT NULL,

    CONSTRAINT "foto_ahli_pkey" PRIMARY KEY ("url","ahli_id")
);

-- AddForeignKey
ALTER TABLE "foto_ahli" ADD CONSTRAINT "foto_ahli_ahli_id_fkey" FOREIGN KEY ("ahli_id") REFERENCES "ahli"("id") ON DELETE CASCADE ON UPDATE CASCADE;
