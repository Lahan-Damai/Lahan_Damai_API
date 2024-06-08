-- CreateTable
CREATE TABLE "foto_artikel" (
    "url" TEXT NOT NULL,
    "id_artikel" INTEGER NOT NULL,

    CONSTRAINT "foto_artikel_pkey" PRIMARY KEY ("url","id_artikel")
);

-- AddForeignKey
ALTER TABLE "foto_artikel" ADD CONSTRAINT "foto_artikel_id_artikel_fkey" FOREIGN KEY ("id_artikel") REFERENCES "post_edukasi"("id") ON DELETE CASCADE ON UPDATE CASCADE;
