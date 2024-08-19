CREATE TABLE IF NOT EXISTS "users" (
  "nik" text,
  "email" text,
  "nama" text,
  "alamat" text,
  "password" text,
  "token" text NULL,
  "role" text,
  "tanggal_lahir" double precision,
  "foto" text NULL,
  "fcm_token" text NULL
);

INSERT INTO "users" ("nik","email","nama","alamat","password","token","role","tanggal_lahir","foto","fcm_token")
VALUES
('123456789101112','user_lahandamai@gmail.com','pengguna','alamat pengguna','$2b$10$MS9eqST6mcILxQlTOs9cQ.ZjsqvNfnjf2QqeZcf2O5ZshF7flVY56',NULL,'admin',36892,NULL,NULL),
('987654321123456','iqbaliqbal@gmail.com','Muhammad Iqbal','Jakarta Selatan','$2b$10$wHn8XrftV1rPZLYlGfN3b.dY3GIzPVMOk9PYuBwZIslTMDyKd3jO6','6a6dbd6e-b8d3-473a-900b-701fcc611322','admin',38167,NULL,'fROnI_xxQ2WLhibBOxieA_:APA91bFzTI55p7jKYV6ZpPE79gqfP8vtwzOFDHmHCM9N5KibU51W5R9DgGc0UO5-jEEFhnVq2ishJ37m5DeeCVNxBiRka236sXO5iYdDVirfCD1Oki01HS67cjUqMjDdso4Y8MJdrqZo'),
('123123123123123','liqba123@gmail.com','iqbla','Jalan Kebon Kacang No.1','$2b$10$.Fk1fB9QvOGY0YJx0oK1euPCI6Xa9Vp7HsYNJXHg1FguE1Z9.DJIe',NULL,'user',37288.708333333336,NULL,NULL),
('1234567890123456','damai3@example.com','Daffa','1234 Elm Street, Springfield, USA','$2b$10$1VXJkZsyuSq1GYv92HnRqOE57rKQHs40Y3Zq1W.t1dZd2R8uqGbEa','88431180-60e5-40e7-b7dc-18130ba1e48c','admin',37987,'https://storage.googleapis.com/lahan-damai/1234567890123456-profile.jpg',NULL),
('1234567891012345','damalz@gmail.com','damalz','Kota Tangerang','$2b$10$kghgjDNbcVOTgXOrb6tFPuqpL5Hh4el4GbM0ynZAB/8.z2fOlebI.',NULL,'admin',45453,NULL,NULL),
('12345678912345','damai01@gmail.com','Daffa Akmal','beji, depok, kukusan','$2b$10$.XkxiYH/d8tIRlxuB0nd2.gJmMry/xiIHkv5h80R6SKWijmTA6fSO','d428c109-81ba-4ab9-a3ab-4a337a221034','user',38073,'https://storage.googleapis.com/lahan-damai/u3.jpg',NULL),
('1347040485693551','Hidayat3223@gmail.com','Wahyu Hidayat','Jl Ereh 8, Jawa Barat, 40251','$2b$10$oSSJ53kWiy0SbjIWWOzFZuAQY4qY33DGJoRP..GpXEEMNPsDLJ6Oa','4699a885-8778-40b5-adfa-0be6a8661eac','user',28347.708333333332,'https://storage.googleapis.com/lahan-damai/u9.jpg','fWZyRwJcQLuSq6kdPIBlDV:APA91bG2XCEphWP4DpcwwsXH5S8KUplixs6gpmpVkinMSMNQ4UERYZzPbYS_bTxpuDgTzH0996LxwX8t1CC3-4ZV4aHf0NbLz1XklviWImnCiD4vf6zPuigrtQszGHCnKtuxsojYU4do'),
('1520428379136698','vina5155@gmail.com','Vina Agustian','No. 61D, Pondok Karya, Pondok Aren, Tangerang Selatan, Banten, 15225','$2b$10$Nzv3HMj5nz8lKxqbp.gEP.N6eOochPhkfDrmar85GWcaiDUmPlj8S','4e72b95f-a324-4d1d-8d86-6e759b455ef2','user',31971.708333333332,'https://storage.googleapis.com/lahan-damai/u7.jpg',NULL),
('2134012356365947','melatinur12@gmail.com','Nur Melati','Jl Gading Bukit Indah Blok G/17, Kelapa Gading, Jakarta Utara,14240','$2b$10$drFQn6Mws4fj4IEikUiiy.ggbOtLaKtPgblxDAP9PqYBJpP5vYtIa',NULL,'user',29566.708333333332,'https://storage.googleapis.com/lahan-damai/u1.jpg','https://storage.googleapis.com/lahan-damai/u1.jpg'),
('2206081267432167','sugengr@gmail.com','Sugeng Riyadi','Beji Depok No 33','$2b$10$BC1BxrC4w0XW/27fUsYrPeyEZrvxWlydqHN.VAzQSvpXOZIfPoz7q','ee50bcf1-22f5-42e5-b861-7f51ddf6f597','user',37414,'https://storage.googleapis.com/lahan-damai/u10.jpg','fs5tXePERFiYrMOnfc5pmK:APA91bHUDCWKvT16JHKENwhT_df-5Wp4iIP2Q5CupQowxY7KkfHelTJQdWYzoFx8WpCNFfMLoM8EwKxgiR1dhurfm6yI6Rkf5pk_YJ2U4pU4q2D2o7Mj2Zqry8tNsBx-S0noPFUg972Z'),
('2206082152','admin123@gmail.com','admin','beji, depok','$2b$10$anZlKImzOj6ABj/JNI3GhuxJddLBZvGeAnfYuU9dt8gcXiMjBqO/W','cb61dc55-0379-47e9-a641-7668cb6b7ec5','admin',45461.53543981481,NULL,'f7trwfNmTxipuhz81HZ4eZ:APA91bFr0T2-WG7JEPXP2f2QkCri6N-rl8Hf0G_fYSd6T31IVaD2-AtsIVOgRKAEPJ9JDbsxhPtyw61WcgPB3W8Uh62XVst0Juuodq9HiCrPsvRb2ymOzDPPQnX-dbn55zsfdFbG5uQc'),
('2682336756010036','tirto1992@gmail.com','Tirto Kamal','Jl Kota Bambu Utr 17 RT 016/03,Kota Bambu Selatan, Palmerah, Jakarta','$2b$10$oFX8j/IZFCLEflZM5tB/2Oq2p.kEV/5y3gPYWizB29mK4MYXoih42','bc229007-212e-4b7a-bb63-3f64b5a3ecba','user',32511.708333333332,'https://storage.googleapis.com/lahan-damai/u6.jpg','fNIEWjOYRb-wTvAEuc8Fa6:APA91bFfUWXYgJT3ArCQHNhge3Vv9EVYXH7PfcSWX0PjyHsCsq0QIZ2MyoyiTo9B8_BT_vvEfnq4sigtkX_tYqcR-i8-kPVgt4k3rKW0PItudovG-lxkZ7cQQBgiOAB6DCzJYic9vZDs'),
('2748174694444017','lestari_citra4@yahoo.com','Citra Lestari','JL. KH. Akhmad Dahlan RT. 03, No. 45, Samarinda','$2b$10$Iyi5iibIr./L37uB/yULv.TSmg4MBKqAj2MKZwRWFrdUVysuPtgOa','1833fadd-8c8c-4b8d-bc1c-d06fb78efa8b','user',34201.708333333336,'https://storage.googleapis.com/lahan-damai/u3.jpg','cHl9pVQSSl-An1h6yV5hdw:APA91bEeic2FNv46utoy1bvpUkrSoviWA9DSKUFpvktGHp8Bn34dUENRsfAmnCmxzIBFTqiUxkgQDrzrrANKX_rxn9We5nKLhLuirIhyM-nbUO4X1rUz65skHrbmD1pDisA8W8yek7Bo'),
('3477367830963719','adi_putra9@gmail.com','Adi Putra','JL. MH. Thamrin No. 27 B-3, Semarang, 50139','$2b$10$kbCek5Z9B0EO8.WCX.ivLeIneWB001iuaBJyWvc5JftRq.dPHbSda',NULL,'user',31160.708333333332,'https://storage.googleapis.com/lahan-damai/u4.jpg','https://storage.googleapis.com/lahan-damai/u4.jpg'),
('3822639327105188','said-walls51@gmail.com','Said Kusuma','Jl Padang Luwih, 208A, Dalung, Denpasar','$2b$10$XLhg5TWaH5leqI/YT.j93uYnlCsH83d0207oU7NdzxN4sfdZFz9.e',NULL,'user',29934.708333333332,'https://storage.googleapis.com/lahan-damai/u3.jpg','https://storage.googleapis.com/lahan-damai/u3.jpg'),
('4801178256314795','mansur9488@gmail.com','Mansur Amir','Jl Bukit Kecil 70, Sumatera Selatan, Palembang','$2b$10$zWiealEM6jaU7GLV5Xk7rOvzA8nKP7WbkZU.RN6b48B2OIFtzIC5i','224a626e-4b5b-444a-b759-f420c8987674','user',33097.708333333336,'https://storage.googleapis.com/lahan-damai/u10.jpg',NULL),
('4850637354959818','kang_ilham92@gmail.com','Muhammad Ilham','Veteran No. 51, Yogyakarta 55164','$2b$10$0QXB7pwFPfW5HyK64Qd2qubvHFnyrreS6MLBVohFE5LLUoPnuU9M2',NULL,'user',29016.708333333332,'https://storage.googleapis.com/lahan-damai/u7.jpg','https://storage.googleapis.com/lahan-damai/u7.jpg'),
('6471052101234567','liqba@gmail.com','Liqbaz','Tangerang Selatan','$2b$10$Yr7OmiZyCe3q6FuxuPGAn.cDFnfXdGjKPZqysD2rmx5dfc3MhDbgy','b9227d49-ef65-4eca-bc84-da3fac3fe0b2','user',38165,NULL,'fROnI_xxQ2WLhibBOxieA_:APA91bFzTI55p7jKYV6ZpPE79gqfP8vtwzOFDHmHCM9N5KibU51W5R9DgGc0UO5-jEEFhnVq2ishJ37m5DeeCVNxBiRka236sXO5iYdDVirfCD1Oki01HS67cjUqMjDdso4Y8MJdrqZo');

CREATE TABLE IF NOT EXISTS "threads" (
  "id" text,
  "judul" text,
  "user_nik" text,
  "isi" text,
  "tanggal_upload" double precision
);

INSERT INTO "threads" ("id","judul","user_nik","isi","tanggal_upload")
VALUES
('3bbb0ad6-02aa-4b52-af37-46ccaf9d146e','Pengalaman dengan Proses Pengadilan dalam Sengketa Tanah','2748174694444017','Apakah rekan-rekan disini pernah mengalami masalah sengketa tanah yang melibatkan proses pengadilan? Bagaimana proses dan prosedurnya ya?',45469.72641633102),
('4b80fe73-1e9b-4dfb-bff2-ef09e37eebf4','Bagaimana mengatasi sengketa batas tanah dengan tetangga?','2682336756010036','Saya memiliki masalah dengan tetangga. Apa ada saran untuk menyelesaikannya?',45469.719575601855),
('e0129762-7e3d-4051-a9ae-95d32cc81590','Teknologi dan Inovasi dalam Penyelesaian Sengketa Tanah','2206081267432167','Menurut kalian, apa saja inovasi atau terobosan yah diperlukan dalam mempermudah penyelesaian permasalahan tanah?',45469.721745787036);

CREATE TABLE IF NOT EXISTS "ulasan_ahli" (
  "ahli_id" text NULL,
  "rating" double precision NULL,
  "isi" text NULL,
  "user_nik" text NULL
);

INSERT INTO "ulasan_ahli" ("ahli_id","rating","isi","user_nik")
VALUES
('d3b07384-d9a7-4e2e-907a-5a091d3b4c3f',5,'Terima kasih Pak atas bantuan dan sesinya...','6471052101234567'),
('e8dc408c-c4f2-4b8d-9f04-75a6d0b64f8b',5,'Pak budi ini orangnya baik, sabar. Permasalahan saya akhirnya selesai setelah 2 tahun berkat pak budi.. 👍👍','1234567890123456'),
('e8dc408c-c4f2-4b8d-9f04-75a6d0b64f8b',5,'Terima kasih pak atas sesinya...','6471052101234567'),
('f1d2d2f9-3e5f-4ad5-82da-65e0f809a620',3,'Terima kasih pak chandra','1234567890123456'),
('3da54155-7c5d-4f42-8893-924a1b3d7498',5,'terima kasih bu...','1234567890123456'),
('98b8f098-4a2a-4e6e-846b-5a09e982d8d7',5,'Pak dedi terbaik...','1234567890123456'),
('d3b07384-d9a7-4e2e-907a-5a091d3b4c3f',5,'Pak Andi terbaik ..','2206081267432167'),
('d3b07384-d9a7-4e2e-907a-5a091d3b4c3f',5,'Terima kasih pak Andi, sangat membantu ...','1234567890123456');

CREATE TABLE IF NOT EXISTS "replies" (
  "id" text,
  "isi" text,
  "user_nik" text,
  "thread_id" text,
  "tanggal_upload" double precision
);

INSERT INTO "replies" ("id","isi","user_nik","thread_id","tanggal_upload")
VALUES
('06b140de-44ab-4daa-8203-baa48282d31f','Saya rasa portal online untuk mediasi sengketa tanah bisa jadi solusi. Dengan platform ini, mediasi bisa dilakukan secara virtual tanpa perlu tatap muka, menghemat waktu dan biaya.','1520428379136698','e0129762-7e3d-4051-a9ae-95d32cc81590',45469.74339550926),
('17f74b7c-3247-4739-bdce-8f7ebde774c9','Saya dulu hampir setahun lebih berurusan dengan pengadilan soal tanah. Siapkan mental dan dana yang cukup mba, karena biayanya tidak sedikit. Pastikan juga semua bukti dan dokumen lengkap agar tidak ada hambatan.','4801178256314795','3bbb0ad6-02aa-4b52-af37-46ccaf9d146e',45469.73841230324),
('2d718713-023c-4997-9572-7aac77984469','Menurut saya, sebelum dilanjutan ke tahap hukum, coba ajak tetangga anda untuk berdiskusi terlebih dahulu ...

Siapa tahu anda dapat menemukan solusi yang saling menguntungkan😁😁','2206081267432167','4b80fe73-1e9b-4dfb-bff2-ef09e37eebf4',45469.72373269676),
('41c3108f-728c-4a3c-8602-1d642901e742','Saya pernah. Prosesnya sangat melelahkan dan susah ..','2206081267432167','3bbb0ad6-02aa-4b52-af37-46ccaf9d146e',45470.71731076389),
('8311a806-3ba8-4f5e-8604-c925218ba53a','Kalau saya dulu minta bantuan ketua RT. Biasanya mereka bisa bantu mediasi. Jadi nggak perlu ribut-ribut','1347040485693551','4b80fe73-1e9b-4dfb-bff2-ef09e37eebf4',45469.733948912035),
('d2e7d8da-96f6-422a-b07d-a8d4ba382959','Saya setuju, diskusi terlebih dahulu juga merupakan opsi yang lebih baik','6471052101234567','4b80fe73-1e9b-4dfb-bff2-ef09e37eebf4',45470.21067393519);

CREATE TABLE IF NOT EXISTS "laporans" (
  "no_sertifikat" text,
  "user_nik" text,
  "deskripsi" text,
  "proses_laporan" text,
  "latitude" double precision,
  "longitude" double precision,
  "tanggal_lapor" double precision
);

INSERT INTO "laporans" ("no_sertifikat","user_nik","deskripsi","proses_laporan","latitude","longitude","tanggal_lapor")
VALUES
('10.15.22.05.1.00002','1234567890123456','Tanah atas nama pak Bryan, mengalami masalah sengketa tanah','Diproses',-6.32830144334478,106.805278156709,45346.26641203704),
('10.15.22.05.1.00003','1234567890123456','Tanah atas nama Sabar, mengalami permaslaahan sengketa','Diproses',-6.37061201905963,106.846464526716,45393.26697916666),
('10.15.22.05.1.00004','1234567890123456','Tanah atas nama Coki, mengalami masalah sengketa tanah','Diproses',-6.96615027094193,107.661255776484,45416.267916666664),
('10.15.22.05.1.00006','1234567890123456','tanah atas nama tretan, mengalami maslah sengketa','Diproses',-6.33680381709347,106.714304857939,45467.26932802083),
('10.15.22.05.1.00007','1234567890123456','Tanah atas nama Wahyu, mengalami masalah sengketa','Diproses',-6.35372676655417,106.851302194847,45467.2732690162),
('10.15.22.05.1.00008','1234567890123456','Tanah ats nama brody, mengalami masalah sengketa','Diproses',-6.35538494650547,106.881968819005,45467.2760012037),
('10.15.22.05.1.00009','1234567890123456','Tanah atas nama muhammad, mengalami masalah sengketa','Diproses',-6.36488762091892,106.816603001644,45470.27670138889),
('10.15.22.05.1.00010','1234567890123456','Tanah atas nama Stef, mengalami masalah sengketa','Diproses',-6.4172238591214,106.816632718878,45377.27721064815),
('10.15.22.05.1.00011','2748174694444017','Sengketa tanah atas nama budi','Selesai',-6.28203301962338,106.792726964952,45344.27914351852),
('10.15.22.05.1.00014','1234567890123456','Tanah atas nama Alan, mengalami sengketa','Ditolak',-6.12345,106.54321,45413.5),
('10.15.22.05.1.00015','1234567890123456','Tanah atas nama Beni, mengalami sengketa','Diproses',-6.23456,106.65432,45292.5),
('10.15.22.05.1.00016','1234567890123456','Tanah atas nama Clara, mengalami sengketa','Diproses',-6.34567,106.76543,45323.5),
('10.15.22.05.1.00017','1234567890123456','Tanah atas nama Deni, mengalami sengketa','Ditolak',-6.45678,106.87654,45352.5),
('10.15.22.05.1.00018','1234567890123456','Tanah atas nama Eva, mengalami sengketa','Diproses',-6.56789,106.98765,45383.5),
('10.15.22.05.1.00019','1234567890123456','Tanah atas nama Fani, mengalami sengketa','Diproses',-6.6789,106.09876,45413.5),
('10.15.22.05.1.00020','1234567890123456','Tanah atas nama Gita, mengalami sengketa','Selesai',-6.78901,106.20987,45444.5),
('10.15.22.05.1.00021','1234567890123456','Tanah atas nama Hari, mengalami sengketa','Diproses',-6.89012,106.32098,45292.5),
('10.15.22.05.1.00022','1234567890123456','Tanah atas nama Ika, mengalami sengketa','Selesai',-6.90123,106.43209,45323.5),
('10.15.22.05.1.00023','1234567890123456','Tanah atas nama Joko, mengalami sengketa','Diproses',-6.01234,106.5432,45352.5),
('10.15.22.05.1.00024','1234567890123456','Tanah atas nama Kiki, mengalami sengketa','Diproses',-6.12345,106.65431,45383.5),
('10.15.22.05.1.00025','1234567890123456','Tanah atas nama Lala, mengalami sengketa','Diproses',-6.23456,106.76542,45413.5),
('10.15.22.05.1.00026','1234567890123456','Tanah atas nama Mona, mengalami sengketa','Diproses',-6.34567,106.87653,45444.5),
('10.15.22.05.1.00027','1234567890123456','Tanah atas nama Nino, mengalami sengketa','Diproses',-6.45678,106.98764,45105.44966435185),
('10.15.22.05.1.00028','1234567890123456','Tanah atas nama Oki, mengalami sengketa','Selesai',-6.56789,106.09875,44972.5),
('10.15.22.05.1.00029','1234567890123456','Tanah atas nama Peni, mengalami sengketa','Diproses',-6.6789,106.20986,44986.5),
('10.15.22.05.1.00030','1234567890123456','Tanah atas nama Qoni, mengalami sengketa','Selesai',-6.78901,106.32097,45139.5),
('10.15.22.05.1.00033','1234567890123456','Tanah atas nama pak pok pek, tolong ini sengketa','Diproses',-6.2349858,106.9945444,45468.38877471065),
('10.15.22.05.1.00043','6471052101234567','Tanah yang beratas nama Liqba Ahmad mengalami sengketa terletak di Depok.','Diterima',-6.3645592294895,106.813629034278,45470.22152811343);

CREATE TABLE IF NOT EXISTS "foto_laporan" (
  "url" text,
  "no_sertifikat" text,
  "user_nik" text
);

INSERT INTO "foto_laporan" ("url","no_sertifikat","user_nik")
VALUES
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00002-rumah_ayu_lestari-20220225-015-non_fotografer_kly.jpg','10.15.22.05.1.00002','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00002-rumah_ayu_lestari-20220225-015-non_fotografer_kly.jpg','10.15.22.05.1.00003','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00003-ec6bd6d1a51cbfc0cb7c73ab607b5140.jpg','10.15.22.05.1.00004','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00003-ec6bd6d1a51cbfc0cb7c73ab607b5140.jpg','10.15.22.05.1.00006','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00003-ec6bd6d1a51cbfc0cb7c73ab607b5140.jpg','10.15.22.05.1.00007','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00004-9636_2.jpg','10.15.22.05.1.00008','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00004-9636_2.jpg','10.15.22.05.1.00009','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00004-9636_2.jpg','10.15.22.05.1.00010','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00006-wp-1468551996448.jpg','10.15.22.05.1.00011','2748174694444017'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00006-wp-1468551996448.jpg','10.15.22.05.1.00014','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00006-wp-1468551996448.jpg','10.15.22.05.1.00015','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00007-sebuah-rumah-yang-dihuni-8-anggota-keluarga-ambruk.jpg','10.15.22.05.1.00016','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00007-sebuah-rumah-yang-dihuni-8-anggota-keluarga-ambruk.jpg','10.15.22.05.1.00017','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00007-sebuah-rumah-yang-dihuni-8-anggota-keluarga-ambruk.jpg','10.15.22.05.1.00018','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00008-2022081659784243.jpg','10.15.22.05.1.00019','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00008-2022081659784243.jpg','10.15.22.05.1.00020','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00008-2022081659784243.jpg','10.15.22.05.1.00021','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00009-rumah-guruh.jpg','10.15.22.05.1.00022','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00009-rumah-guruh.jpg','10.15.22.05.1.00023','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00010-56898-rumah-guruh-soekarnoputra.jpg','10.15.22.05.1.00024','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00010-56898-rumah-guruh-soekarnoputra.jpg','10.15.22.05.1.00025','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00011-9636_2.jpg','10.15.22.05.1.00026','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00011-9636_2.jpg','10.15.22.05.1.00027','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00011-ec6bd6d1a51cbfc0cb7c73ab607b5140.jpg','10.15.22.05.1.00028','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00011-ec6bd6d1a51cbfc0cb7c73ab607b5140.jpg','10.15.22.05.1.00029','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00011-rumah_ayu_lestari-20220225-015-non_fotografer_kly.jpg','10.15.22.05.1.00030','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00011-rumah_ayu_lestari-20220225-015-non_fotografer_kly.jpg','10.15.22.05.1.00033','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00011-wp-1468551996448.jpg','10.15.22.05.1.00043','6471052101234567'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00011-wp-1468551996448.jpg','10.15.22.05.1.00043','6471052101234567'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00033-4dfac0bd-e3b3-49ce-8c87-4890a558563b2631743007344192128.jpg','10.15.22.05.1.00002','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00033-rumah-guruh.jpg','10.15.22.05.1.00003','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00033-rumah_ayu_lestari-20220225-015-non_fotografer_kly.jpg','10.15.22.05.1.00004','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00033-sebuah-rumah-yang-dihuni-8-anggota-keluarga-ambruk.jpg','10.15.22.05.1.00006','1234567890123456'),
('https://storage.googleapis.com/lahan-damai/10.15.22.05.1.00043-1000029071.jpg','10.15.22.05.1.00007','1234567890123456');


CREATE TABLE IF NOT EXISTS "post_edukasi" (
  "id" text,
  "judul" text,
  "deskripsi" text,
  "isi" text,
  "publisher" text,
  "tanggal_upload" double precision,
  "sumber" text,
  "is_recommended" boolean
);

INSERT INTO "post_edukasi" ("id","judul","deskripsi","isi","publisher","tanggal_upload","sumber","is_recommended")
VALUES
('10e06e6e-df9f-4c13-8f45-31a7837fe32f','Sengketa Tanah Bisa Dicegah dengan PTSL, Begini Cara Buat Sertifikatnya!','Tanah dan bangunan adalah aset yang menguntungkan di masa depan karena harganya bisa naik setiap tahunnya. Namun untuk menjadikan tanah atau bangunan sebagai aset kamu perlu memiliki dokumen kepemilikan atau yang biasa disebut sertifikat tanah.','Tanah dan bangunan adalah aset yang menguntungkan di masa depan karena harganya bisa naik setiap tahunnya. Namun untuk menjadikan tanah atau bangunan sebagai aset kamu perlu memiliki dokumen kepemilikan atau yang biasa disebut sertifikat tanah.
Dengan sertifikat tanah kamu memiliki hak untuk menjual, membayar pajak, memanfaatkan tanah, hingga melindungi dari orang asing yang ingin mencuri tanah tersebut atau menghindari dari sengketa tanah.
Cara membuat sertifikat tanah juga cukup mudah. Berdasarkan Jurnal Hukum Universitas Komputer Indonesia, Res Nullius, berjudul Kebijakan Pemerintah dalam Penyelesaian Sengketa dan Konflik Pertahanan karya mahasiswa Sekolah Tinggi Hukum Garut, Mulia Kartiwi mengatakan pemerintah telah membuat kebijakan Percepatan Pendaftaran Tanah Sistematis Lengkap (PTSL) sebagai upaya untuk menghindari kasus sengketa tanah.
Biasanya sengketa tanah terjadi karena ada beberapa pihak yang merasa berhak atas kepemilikan tanah tertentu sehingga tidak mau dibagi atau mengalah. Alhasil sengketa tanah ini harus diselesaikan melalui ranah hukum yang menghabiskan biaya, waktu, dan tenaga.
Jika sejak awal, kepemilikan atas tanah jelas dan hanya kamu seorang yang memiliki sertifikat tanah tersebut, maka dapat menghindari sengketa tanah.
Pembuatan sertifikat tanah melalui skema PTSL ini juga telah dilindungi oleh hukum yakni dalam pasal 19 UUPA juntco Peraturan pemerintah Nomor 24/1997 tentang Pendaftaran Tanah, yang bertujuan untuk menjamin kepastian dan perlindungan hukum atas kepemilikan tanah masyarakat.
"Melalui PTSL penyelenggaraan pendaftaran tanah dipercepat serta dilakukan secara serentak oleh pemerintah dengan biaya ditanggung pemerintah," tulis Mulia Kartiwi seperti yang dikutip pada Jumat (3/5/2024).
Menurut situs PPID Kabupaten Tegal, program ini sudah dilaksanakan sejak tahun 2018 dan akan terus berlangsung hingga 2025. Setiap masyarakat Indonesia dapat mendaftarkan tanah di wilayah Indonesia sebagai miliknya dengan mengumpulkan data fisik dan data yuridis atas satu atau beberapa objek Pendaftaran Tanah pada saat pendaftaran.
Syarat Membuat Sertifikat Tanah dengan Skema PTSL
Mengutip dari ppid.tegalkab.go.id, berikut ini syarat dokumen yang harus disiapkan untuk membuat sertifikat tanah dengan skema PTSL.
1. Kartu keluarga dan kartu identitas berupa KTP (Kartu Tanda Penduduk).
2. Surat permohonan pengajuan peserta PTSL.
3. Pemasangan tanda batas tanah yang telah disepakati dengan pemilik tanah yang berbatasan.
4. Bukti surat tanah (Letter C, Akta Jual Beli, Akta hibah atau berita acara kesaksian)
5. Bukti setor dan BPHTB dan PPh (kecuali bagi masyarakat berpenghasilan rendah yang dibebaskan dari keduanya).
Biaya PTSL
Seperti yang disebutkan sebelumnya, sertifikat tanah dengan skema PTSL ini biayanya ditanggung pemerintah untuk proses penyuluhan, pengumpulan data yuridis, pengumpulan data fisik, pemeriksaan tanah, penerbitan SK Hak, pengesahan data yuridis dan fisik, penerbitan sertifikat, dan supervisi dan laporan.
Namun, skema di luar itu akan tetap dikenakan biaya. Misalnya untuk penyediaan surat tanah (bagi yang belum ada), pembuatan dan pemasangan tanda batas atau patok, Bea Perolehan Hak Atas Tanah dan Bangunan (BPHTB) jika terkena, dan lain-lain (meterai, fotokopi, letter C, dan sebagainya).
Dalam Surat Keputusan Bersama (SKB) 3 Menteri, meliputi Menteri ATR/BPN, Menteri Dalam Negeri, dan Menteri Desa Pembangunan Daerah Tertinggal dan Transmigrasi (PDTT), disebutkan batasan biaya yang boleh dipungut oleh pemerintah desa/kelurahan. Rincian biaya yang boleh dipungut yaitu:
1. Kategori I (Papua, Papua Barat, Maluku, Maluku Utara, Nusa Tenggara Timur): Rp 450.000
2. Kategori II (Kepulauan Riau, Bangka Belitung, Sulawesi Tengah, Sulawesi Utara, Sulawesi Tenggara, Nusa Tenggara Barat): Rp 350.000
3. Kategori III (Gorontalo, Sulawesi Barat, Sulawesi Selatan, Kalimantan Tengah, Kalimantan Barat, Aceh, Sumatera Utara, Sumatera Barat, Kalimantan Timur): Rp 250.000
4. Kategori IV (Riau, Jambi, Sumatera Selatan, Lampung, Bengkulu, Kalimantan Selatan): Rp 200.000
5. Kategori V (Jawa dan Bali): Rp 150.000
Selain rincian biaya di atas, kamu tidak berhak memberikan biaya lain apabila diminta karena termasuk dalam pungutan liat. Kamu berhak melaporkan kejadian tersebut ke pihak berwenang.
"(Lapor) ke kantor BPN setempat atau ke nomor pengaduan kita di ATR/BPN di 081110680000," kata Sekretaris Jenderal Kementerian ATR/BPN Suyus Windayana kepada detikProperti beberapa waktu lalu.
Tata Cara Pembuatan Sertifikat Tanah dengan Skema PTSL
Melansir dari Instagram resmi Kementerian ATR/BPN berikut tata cara membuat sertifikat tanah dengan skema PTSL.
1. Pastikan Wilayah Anda Termasuk sebagai Lokasi PTSL
Sebelum pergi ke Kantor Pertahanan atau menemui kepala desa, lebih baik memastikan wilayah kamu termasuk atau tidak lokasi pembuatan sertifikat tanah melalui skema PTSL.
2. Ikut Penyuluhan
Penyuluhan wajib diikuti oleh masyarakat yang ingin membuat sertifikat tanah. Saat penyuluhan, Panitia Ajudikasi PTSL, Satgas Fisik dan Satgas Yuridis hingga aparat desa/kelurahan/kecamatan/pemerintah daerah akan hadir memberikan beberapa arahan.
3. GEMAPATAS
Setelah penyuluhan, akan dilakukan Gerakan Bersama Pemasangan Tanda Batas (GEMAPATAS). Setelah itu, masyarakat harus membuat dan menyerahkan surat pernyataan pemasangan tanda batas dengan tetangga yang bersebelahan.
4. Pengumpulan Data Fisik dan Yuridis
Masyarakat harus mengikuti persetujuan prosedur pengumpulan data fisik dan data yuridis yang dilakukan petugas di lapangan.
5. Pengumuman
Hasil pengumpulan data fisik (pengukuran bidang tanah) dan data yuridis (pengumpulan berkas atas hak dan sebagainya) yang telah diperiksa selama 14 hari di kantor Panitia Ajudikasi PTSL dan kantor desa/kelurahan. Pengumumannya akan dilakukan setelahnya.
6. Penerbitan Sertifikat
Sertifikat tanah akan diterbitkan dan diserahkan kepada pemohon. Penyerahannya dilakukan pada saat tahun anggaran berjalan atau paling lambat pada triwulan pertama tahun berikutnya.','detik.com',45468.32776608796,'https://www.detik.com/properti/tips-dan-panduan/d-7322976/sengketa-tanah-bisa-dicegah-dengan-ptsl-begini-cara-buat-sertifikatnya',TRUE),
('1a370d08-7136-460c-bd36-6fa9728c3123','Mediator BPN dalam Penyelesaian Sengketa Tanah','Penyelesaian sengketa tanah dapat dilakukan melalui jalur mediasi selain dengan litigasi. ','Penyelesaian sengketa tanah dapat dilakukan melalui jalur mediasi selain dengan litigasi. Pasal 1 ayat 1 Peraturan Mahkamah Agung No.1 Tahun 2016 tentang Mediasi menyatakan bahwa mediasi adalah “cara penyelesaian sengketa melalui proses perundingan untuk memperoleh kesepakatan Para Pihak dengan dibantu oleh Mediator”. Mediasi ini dilakukan dengan menggunakan pendekatan win-win solution disertai proses dan cara yang lebih sederhana. Tujuannya memberikan akses keadilan yang lebih memuaskan bagi para pihak pencari keadilan dengan bantuan seorang mediator. Peran mediator bukan menjadi pemutus perkara dengan pendapatnya. Mediator hanya menjembatani aspirasi para pihak dalam upaya menemukan penyelesaian yang mereka sepakati.

Mediasi di BPN

Badan Pertanahan Nasional (BPN) juga memiliki kewenangan dalam menyelesaikan permasalahan terkait Tanah. Hal ini diatur Pasal 43 ayat 1 Peraturan Menteri Agraria dan Tata Ruang/Kepala Badan Pertanahan Nasional No.21 Tahun 2020 tentang Penanganan dan Penyelesaian Kasus Pertanahan yang menyatakan, “Penyelesaian Kasus dapat diselesaikan melalui Mediasi”.

Peran BPN dalam penyelesaian kasus pertanahan dengan cara bertindak sebagai mediator bermula dari pengaturan Angka 2 bag. II. Penggolongan, Petunjuk Teknis Nomor 05/Juknis/D.V/2007 tentang Mekanisme Pelaksanaan Mediasi dalam Keputusan Kepala Badan Pertanahan Nasional No: 34 Tahun 2007 tentang Petunjuk Teknis Penanganan dan Penyelesaian Masalah Pertanahan. Isinya menyatakan, “Mediator adalah orang/pejabat yang ditunjuk dari jajaran Badan Pertanahan Nasional Republik Indonesia yang disepakati oleh para pihak yang bersengketa untuk menyelesaikan permasalahannya”.

Ketentuan di atas diperkuat berdasarkan pendapat akademik Rosiana dan Junaidi Tarigan dalam Jurnal Rechten: Riset Hukum Dan Hak Asasi Manusia, Vol.4/No.2/2022. Artikel mereka berjudul “Analisis Yuridis Penyelesaian Sengketa Tanah Melalui Mediasi”. Intinya, BPN dapat bertindak sebagai mediator dalam penanganan dan penyelesaian kasus pertanahan di luar Pengadilan.

Mediasi dengan BPN bertindak sebagai mediator bisa meminimalkan biaya sekaligus memberikan kepastian hukum. Kepastian hukum dapat terjamin jika para pihak dalam mediasi sepakat menyelesaikan permasalahan dengan perdamaian. Perdamaian yang didapat dari hasil mediasi lalu dituangkan dalam bentuk akta/surat tertulis. Selanjutnya akta/surat tertulis itu didaftarkan ke Pengadilan Negeri—yang kompetensinya meliputi letak tanah yang menjadi objek sengketa—untuk memperoleh putusan perdamaian. Ketentuan ini berdasarkan Pasal 44 ayat 5 Peraturan Menteri Agraria dan Tata Ruang/Kepala Badan Pertanahan Nasional No.21 Tahun 2020 tentang Penanganan dan Penyelesaian Kasus Pertanahan.

Perlu diingat bahwa setiap kesepakatan perdamaian memiliki kekuatan mengikat untuk dipatuhi dan dilaksanakan. Hal itu jelas ditentukan dalam Pasal 1858 Ayat 1 Kitab Undang-Undang Hukum Perdata (KUHPerdata) yang berbunyi, “Perdamaian di antara pihak sama kekuatannya seperti putusan hakim yang penghabisan”.

Hal yang sama ditegaskan pula dalam Pasal 130 Ayat 2 Herzien Inlandsch Reglement (HIR) bahwa akta perdamaian itu juga berkekuatan eksekutorial (executoriale kracht). Oleh karena itu, upaya paksa oleh salah satu pihak—dengan permohonan eksekusi kepada Pengadilan Negeri—bisa dilakukan jika pihak lainnya tidak taat atas isi perjanjian perdamaian.

*)Dr.Endang Hadrian, S.H., M.H., adalah advokat, mediator, kurator, dan pengurus.','hukumonline.com',45468.225387280094,'https://www.hukumonline.com/berita/a/mediator-bpn-dalam-penyelesaian-sengketa-tanah-lt657c1f0587764?page=2',FALSE),
('267a1961-0161-4a1a-9acb-66d51089bd6b','Wajib Tahu, Ini Bedanya Akta Notaris Tanah dan PPAT','Dalam dunia bisnis properti, baik sewa-menyewa ataupun jual-beli, ada sejumlah dokumen penting yang perlu Anda pahami.','Dalam dunia bisnis properti, baik sewa-menyewa ataupun jual-beli, ada sejumlah dokumen penting yang perlu Anda pahami. Salah satunya akta notaris, yang sangat berguna dalam hal legalitas tanah, bangunan, dan jenis-jenis properti lainnya. Perlu diketahui, akta notaris tidak sama dengan surat notaris. Lantas, apa pengertian dan fungsi akta notaris? Dan, apa perbedaannya dengan PPAT? Mari simak ulasan lengkapnya.

Apa Itu Akta Notaris?

Akta merupakan selembar tulisan yang dijadikan bukti tertulis tentang terjadinya suatu peristiwa yang ditandatangani oleh pihak-pihak terkait. Bukti tertulis satu ini dibuat di hadapan pegawai berwenang, contohnya seperti jaksa, hakim, atau notaris. Sementara itu, notaris adalah sebuah profesi bagi seseorang yang telah mendapatkan pendidikan hukum dan lisensi dari pemerintah. Karena adanya lisensi tersebut, seorang notaris bisa melakukan hal-hal hukum, khususnya menjadi saksi penandatanganan pada dokumen. Berdasarkan pengertian di atas, bisa disimpulkan bahwa akta notaris adalah dokumen resmi yang dikeluarkan oleh notaris. Dokumen tersebut dikeluarkan merujuk pada Kitab Undang-undang Hukum (KUH) Perdata pasal 1870 dan HIR pasal 165. Akta notaris merupakan bukti otentik atas terjadinya suatu peristiwa, kekuatannya bersifat mutlak dan mengikat. Selain itu, akta notaris bisa dijadikan bukti dalam persidangan. Kedudukan dokumen yang satu ini tentu saja sangat krusial.

Lantas, apa saja fungsi akta notaris yang perlu diketahui? Nah, berikut jawabannya.

Fungsi Akta Notaris

Alat Pembuktian

Akta notaris menjalankan fungsi sebagai alat pembuktian di kemudian hari, apabila ada dua pihak atau lebih melakukan perjanjian tertentu. Dokumen satu ini merupakan bukti otentik bagi kedua pihak, ahli waris, dan orang yang mendapatkan hak sesuai yang dimuat dalam akta.

Fungsi Formal

Suatu perbuatan hukum harus dituangkan dalam bentuk akta notaris, yakni sebagai syarat formil yang sifatnya mengikat. Dalam fungsi ini akta notaris dibuat untuk melengkapi suatu perbuatan hukum, yang tertuang dalam 1767 KUH perdata tentang perjanjian utang-piutang.

Jenis-jenis Akta Notaris

Adapun pengertian akta notaris menurut pasal 1 ayat 7 UU 2/2014, ialah akta otentik yang dibuat oleh atau di hadapan notaris.

Akta Notaris yang Dibuat oleh Notaris

Akta satu ini disebut juga dengan akta relaas atau acten, yang berisi uraian notaris yang dilihat, disaksikan, dan dibuat sendiri oleh notaris. Akta relaas dibuat oleh notaris atas permintaan para pihak, agar tindakan atau perbuatan mereka tercatat secara legal di dalam akta. Kebenaran peristiwa yang tercatat dalam akta notaris tidak dapat diganggu gugat.

Akta Notaris yang Dibuat di Hadapan Notaris

Sementara itu, akta notaris yang dibuat di hadapan notaris disebut juga akta partij acten atau akta para pihak. Akta partij acten berisi keterangan yang dikehendaki oleh para pihak yang membuatnya atau menyuruh membuat akta tersebut. Sama seperti jenis akta notaris pertama, akta notaris satu ini tidak dapat diganggu gugat kebenarannya, kecuali ada tuduhan atau dugaan pemalsuan.

Syarat-syarat Akta Notaris Mempunyai Kekuatan Otentik

Nah, agar suatu akta notaris mempunyai kekuatan otentik, setidaknya harus memenuhi tiga syarat. Ketiga syarat tersebut tertuang dalam pasal 1868 KUH perdata, yaitu:

Akta harus dibuat oleh atau di hadapan pejabat umum;

Akta harus dibuat dalam bentuk yang ditentukan oleh UU;

Pejabat umum harus mempunyai wewenang untuk membuat akta notaris tersebut.

Akta Notaris Tanah

Dalam proses legalitas pertanahan ataupun properti lainnya, selain notaris mungkin Anda sering mendengar istilah PPAT? Ya, baik notaris ataupun Pejabat Pembuat Akta Tanah (PPAT), keduanya berwenang mengeluarkan akta otentik tetapi dengan jenis berbeda. PPAT berwenang mengeluarkan akta untuk perbuatan hukum yang secara khusus berkaitan dengan tanah. Sedangkan, notaris berwenang membuat akta untuk perbuatan hukum yang lebih umum. Nah, berikut detail perbedaan wewenang keduanya.

Tugas dan Wewenang Notaris

Membuat akta jual beli (AJB) dan sertifikat tanah

Membuat akta perjanjian atau ketetapan

Membuat surat-surat di bawah tangan dengan mendaftarkannya dalam suatu buku khusus

Mengesahkan tanda tangan dan kepastian tanggal surat di bawah tangan

Melakukan kecocokan antara fotokopi dengan surat di bawah tangan asli

Tugas dan Wewenang PPAT

Memang, pembuatan AJB dilakukan oleh notaris, tetapi penandatanganan atau pengesahannya dilakukan di hadapan PPAT. Ini sebagaimana yang tertuang dalam Peraturan Pemerintah (PP) Nomor 37 Tahun 1998 pasal 2 ayat 1. PP tahun 1998 tersebut mengatur tentang Peraturan Jabatan Pejabat Pembuat Akta Tanah (PPAT). Tugas pokok PPAT yaitu melaksanakan sebagian kegiatan pendaftaran tanah, dengan membuat akta sebagai bukti telah dilakukannya perbuatan hukum tertentu. Perbuatan hukum tersebut berkaitan dengan hak atas tanah atau hak milik atas satuan rumah susun. Adapun perbuatan hukum yang dimaksud, yaitu jual-beli, tukar-menukar, hibah, inbreng, pembagian hak bersama, hak guna bangunan, hak tanggungan, dan lain sebagainya.

Perbedaan Kode Etik Notaris dan PPAT

Secara tugas pokok, notaris memiliki tugas membuat akta otentik mengenai semua perbuatan, perjanjian dan ketetapan yang diharuskan peraturan perundang-undangan, serta menjamin kepastian tanggal pembuatan akta. Notaris juga berhak memberi salinan atau kutipan akta notaris. Sedangkan PPAT, bertugas melaksanakan kegiatan pendaftaran tanah dan membuat akta sebagai bukti telah dilakukannya perbuatan hukum. Perlu diketahui, notaris dan PPAT memiliki dasar hukum yang berbeda. Dasar hukum notaris tertera pada Hak Asasi Manusia No. 62/2016 tentang Peraturan Menteri Hukum dan HAM serta No. 25/2014. Sedangkan PPAT, tercantum pada PP 24/2016 tentang syarat pengangkatan, larangan bagi PPAT dan lingkup kewenangan PPAT dalam menjalankan profesi.

Nah, itulah seluk-beluk akta notaris tanah dan perbedaannya dengan akta PPAT. Semoga informasi mengenai akta notaris tanah ini bermanfaat, ya. Sekarang, Anda sudah siap beli lahan yang diincar? Atau, masih mau mencarinya di halaman tanah dijual Rumah123? Terdapat berbagai listing tanah dijual yang bisa dijadikan opsi, seperti:

Tanah dijual di Jakarta Selatan

Tanah dijual di Depok

Tanah dijual di Bekasi

Tanah dijual di Bandung','Rumah123',45468.20529520833,'https://www.rumah123.com/panduan-properti/tips-properti-87462-akta-notaris-tanah-id.html',FALSE),
('31729ee2-011e-4a2b-bae2-4b9d9a4ad964','Langkah-langkah Balik Nama Sertifikat Tanah Warisan','Banyak kasus sengketa tanah warisan di Indonesia. Untuk menghindari hal tersebut, balik nama sertifikat tanah warisan perlu dilakukan.','Banyak kasus sengketa tanah warisan di Indonesia. Untuk menghindari hal tersebut, balik nama sertifikat tanah warisan perlu dilakukan.\nDengan melakukan balik nama sertifikat tanah warisan, status tanah yang diwariskan akan berkekuatan hukum, sehingga tidak rawan gugatan dan sengketa lagi.\nNamun, ada beberapa langkah yang harus dilakukan untuk balik nama sertifikat tanah warisan\nBerikut cara balik nama sertifikat tanah warisan\nSebagai informasi, pada Peraturan Pemerintah Nomor 24 tahun 1997 pasal 42 menyebutkan, untuk pendaftaran peralihan hak karena pewarisan, pemohon wajib memberikan sejumlah dokumen kepada kantor pertanahan. Dokumen tersebut meliputi sertifikat hak yang bersangkutan, surat kematian orang yang namanya dicatat sebagai pemegang haknya, dan surat tanda bukti sebagai ahli waris.\nApabila penerima warisan dari satu orang, maka pendaftaran peralihan hak tersebut dilakukan kepada orang tersebut berdasarkan surat tanda bukti sebagai ahli waris.\nAkan tetapi, jika penerima warisan lebih dari satu orang maka dilakukan berdasarkan surat tanda bukti ahli waris dan akta pembagian waris tersebut.\nUntuk mengurus balik nama sertifikat tanah warisan, ada hal-hal yang harus dilakukan terlebih dahulu, yaitu:\n- Membuat surat kematian dan surat tanda bukti ahli waris agar dapat didaftarkan pada kantor pertanahan\n- Membayar pajak/bea perolehan hak atas tanah dan bangunan karena pewarisan atau BPHTB Waris dan Pajak Bumi Bangunan (PBB) tahun berjalan\nJika ingin melakukan balik nama tanah warisan, kamu bisa mengurusnya ke kantor Badan Pertanahan Nasional (BPN) setempat. Adapun syaratnya sebagai berikut.\n- Formulir permohonan yang sudah diisi dan ditandatangani pemohon atau kuasanya di atas materai cukup\n- Surat kuasa apabila dikuasakan\n- Fotokopi identitas pemohon/para ahli waris (KTP, KK) dan kuasa apabila dikuasakan, yang telah dicocokkan dengan aslinya oleh petugas loket\n- Sertifikat Asli\n- Surat Keterangan Waris sesuai peraturan perundang-undangan\n- Akta Wasiat Notariel\n- Fotokopi SPPT dan PBB tahun berjalan yang telah dicocokkan dengan aslinya oleh petugas loket, penyerahan bukti SSB (BPHTB) dan bukti bayar uang pemasukan (pada saat pendaftaran hak)\n- Penyerahan bukti SSB (BPHTB), bukti SSP/PPH untuk perolehan tanah lebih dari Rp 60 juta bukti bayar uang pemasukan (pada saat pendaftaran hak)\nJika persyaratan sudah lengkap, kamu bisa mengurusnya ke kantor BPN. Setelahnya, kamu bisa membuat Akta Pembagian Harta Bersama (APHB) di hadapan Pejabat Pembuat Akta Tanah (PPAT).','detik.com',45468.33011636574,'https://www.detik.com/properti/tips-dan-panduan/d-6823709/langkah-langkah-balik-nama-sertifikat-tanah-warisan',FALSE),
('369a0a44-d5fd-47a7-9edc-a64efdc7b6c3','Bisakah Membuat Sertifikat Tanah yang Dalam Sengketa?','Sengketa tanah adalah perselisihan hak kepemilikan tanah antara dua individu atau lebih. Biasanya yang diperebutkan adalah kepemilikan sertifikat tanahnya. Sebab, dalam sertifikat tanah tidak dapat tercantum dua atau lebih nama pemilik yang berbeda.','Jakarta - Sengketa tanah adalah perselisihan hak kepemilikan tanah antara dua individu atau lebih. Biasanya yang diperebutkan adalah kepemilikan sertifikat tanahnya. Sebab, dalam sertifikat tanah tidak dapat tercantum dua atau lebih nama pemilik yang berbeda. Lalu, bagaimana prosedur pembuatan sertifikat tanah yang bersengketa? Menurut pengacara dan pengamat hukum properti Muhammad Rizal Siregar, sertifikat tanah tidak dapat diterbitkan atau dibuat jika sengketa tanah sudah diajukan ke lembaga hukum seperti Pengadilan Negeri.

"Sudah pasti tidak bisa menerbitkan sertifikat tanah karena kalau sudah sengketa pasti sudah masuk ke pengadilan dan sedang diuji," katanya saat dihubungi oleh detikProperti pada Jumat (3/5/2024).

Sebelum ada keputusan resmi dari pengadilan, kedua belah pihak yang bersengketa tidak dapat membuat sertifikat tanah. Badan Pertahanan Nasional (BPN) juga tidak akan menyanggupi untuk memproses sertifikat tanah yang bersengketa tersebut.

Berbeda jika kedua belah pihak belum mengajukan sengketa tersebut ke pengadilan atau lembaga hukum lainnya. Salah satu pihak bisa membuat sertifikat tanah atas namanya. Sebab, dalam sistem BPN, tanah tersebut statusnya masih bebas kepemilikan sehingga siapa pun dapat mengklaim asal dapat memenuhi persyaratannya.

Risikonya apabila sertifikat tanah telah terbit, lalu salah satu pihak menyadari hal tersebut dan mengajukan gugatan ke Pengadilan Negeri, maka BPN memiliki wewenang untuk membatalkan keabsahannya.

"Kalau tidak ter-detect adanya sengketa, bisa. Tapi setelah itukan prosesnya berjalan (gugatan) lalu ada yang mengklaim dan sertifikatnya terbit. Begitu sertifikatnya terbit, itu sertifikat bisa dibatalin dengan orang yang mengajukan hak apabila buktinya kuat," ungkap Rizal.

Secara tidak langsung, ketika salah satu pihak sudah mengajukan gugatan, maka tanah tersebut termasuk dalam kasus sengketa tanah. BPN berhak mendapat keputusan pengadilan terbaru sebelum menerbitkan sertifikat tanah baru kepada pemilik yang sah.

Dalam kasus sengketa tanah tidak selamanya pihak yang menggugat akan menang, melainkan pihak tergugat juga bisa membuktikan hak sebagai pemilik tanah yang sah di pengadilan.

"Untuk proses pengajuan hak pasti ada persyaratan yang harus dipenuhi, KTP, batas tanah, dan sertifikat. Jika posisinya ada sengketa hukum, harus diterbitkan keputusan pengadilan. Nah itu yang menjadi prosedurnya. Jika proses keputusan pengadilan sudah memutuskan hak tersebut milik salah satu pihak, maka BPN baru memproses administrasi pertanahannya dan menerbitkan (sertifikat tanah)," pungkas Rizal.','detik.com',45468.20976986111,'https://www.detik.com/properti/tips-dan-panduan/d-7323972/bisakah-membuat-sertifikat-tanah-yang-dalam-sengketa',TRUE),
('61aa2730-411e-49bc-97ac-50a26a0b3eb6','Sengketa Tanah Bisa Diselesaikan Lewat 4 Lembaga Hukum Ini','Proses penyelesaian sengketa tanah melalui jalur hukum bisa diajukan ke Pengadilan Tata Usaha, Pengadilan Negeri, hingga mediasi Badan Pertahanan Nasional (BPN). ','
Jakarta - Sengketa tanah adalah konflik yang cukup rumit, pada kondisi tertentu bahkan penyelesaiannya harus melalui jalur hukum.

Proses penyelesaian sengketa tanah melalui jalur hukum bisa diajukan ke Pengadilan Tata Usaha, Pengadilan Negeri, hingga mediasi Badan Pertahanan Nasional (BPN). Lembaga hukum yang melayani penyelesaian sengketa tanah bisa dipilih menyesuaikan dengan jenis kasusnya.

Berdasarkan Jurnal Hukum Universitas Komputer Indonesia, Res Nullius, berjudul Kebijakan Pemerintah dalam Penyelesaian Sengketa dan Konflik Pertahanan karya mahasiswa Sekolah Tinggi Hukum Garut, Mulia Kartiwi, berikut beberapa rujukan dan fungsi lembaga hukum dalam menyelesaikan sengketa tanah.

Pengadilan Negeri Berdasarkan UU 51 Perpu 1960 tentang Larangan Pemakaian Tanah Tanpa Izin Yang Berhak Atau Kuasanya mengatakan bahwa gugatan perdata ke pengadilan negeri bisa dilakukan jika ada konflik antar anggota masyarakat. Selain itu, kamu juga bisa meminta perlindungan kepada bupati/walikotamadya. Kasus kedua adalah jika kamu dipaksa atau diancam untuk menyerahkan sertifikat tanah atau menjualnya kemudian uangnya diserahkan kepada pihak lain yang tidak berhak. Dalam kasus ini kamu bisa menuntut orang tersebut ke Pengadilan Negeri sesuai pasal 1404 KUH Perdata. Dalam UU 20/1961 tentang Pencabutan Hak atas Tanah dikatakan pengambil alihan tanah yang sebenarnya digunakan untuk kepentingan umum, tetapi mengalami sengketa tanah maka bisa diselesaikan melalui Pengadilan Negeri. Biasanya kasus ini dibawa ke jalur hukum setelah musyawarah tidak berhasil. Kasus keempat adalah apabila pemegang hak atas tanah kehilangan akses dan haknya karena penyerahan hak atas tanah maupun melalui pencabutan hak ke pihak lain tanpa persetujuan. Pemegang hak berhak mendapatkan imbalan atau ganti-kerugian, baik atas tanahnya, bangunan dan tanaman, dan semua kerugian termasuk tanah tersebut kembali.

Pengadilan Tata Usaha Negara Dari peraturan yang sama, disebutkan pula apabila konflik sengketa tanah disebabkan karena kelalaian atau kesalahan dari pihak penguasa, seperti BPN yang menerbitkan 2 sertifikat tanah di lokasi yang sama, maka gugatan dapat dilakukan ke pengadilan negeri Pengadilan Tata Usaha Negara. Biasanya prosesnya dimulai dari musyawarah untuk mencapai kesepakatan, baik mengenai penyerahan tanahnya kepada pihak yang mana atau perihal imbalan yang merupakan hak pemilik tanah untuk menerimanya.

Peradilan Umum, Peradilan Tata Usaha Negara, dan Peradilan Agama Berdasarkan undang-undang nomor 48 /2009 tentang Kekuasaan Kehakiman Kasus, jika ada sengketa tanah yang perlu diselesaikan melalui jalur litigasi melalui badan peradilan bisa melibatkan beberapa badan peradilan seperti Peradilan Umum, Peradilan Tata Usaha Negara serta Peradilan Agama. Badan peradilan umum mempunyai kewenangan memeriksa kasus kepemilikan hak atas tanah secara keperdataan. Kemudian Badan Peradilan Tata Usaha Negara mempunyai kewenangan memeriksa status sah atau tidaknya sebuah sertifikat tanah yang berupa sebuah Keputusan Tata Usaha Negara (KTUN). Lalu, Peradilan Agama memiliki kewenangan dalam mengadili sengketa kepemilikan tanah yang berdasarkan kepada hukum waris.

BPN Sengketa tanah yang diselesaikan oleh Badan Pertanahan Nasional (BPN) adalah implementasi dari fungsi pemerintah dalam konsep negara hukum modern (welvaarsstaat) atau negara kesejahteraan. Salah satu alternatif dalam penyelesaian sengketa pertanahan, berdasarkan kebijakan Peraturan Menteri ATR/BPN adalah mediasi. Menurut Dosen Fakultas Hukum Universitas Padjajaran, Nia Kurniati, proses mediasi yang digunakan oleh BPN untuk menyelesaikan sengketa tanah belum menyelesaikan sengketa secara final, karena hasil mediasi yang berisi kesepakatan bersama untuk mengakhiri sengketa hanya berkekuatan mengikat bagi para pihak secara moral. Maka dari itu, masih dimungkinkan kesepakatan bersama tersebut diingkari oleh para pihak. "Agar memperoleh kekuatan yang mengikat secara hukum maka para pihak harus mengajukan gugatan Pengadilan yang berwenang untuk memperoleh Akta Perdamaian seperti diatur dalam pasal 130 HIR," kata Nia seperti yang dikutip pada Jumat (3/5/2024).

(aqi/zlf)','detik.com',45468.20842423611,'https://www.detik.com/properti/tips-dan-panduan/d-7322878/sengketa-tanah-bisa-diselesaikan-lewat-4-lembaga-hukum-ini',TRUE),
('63a8b8ed-8fd8-4c2b-8fc5-f4e8fc123b1e','Bahaya Sengketa Pertanahan dan Kepastian Hukum atas Tanah','Sengketa pertanahan ditengarai dapat menimbulkan konflik di masyarakat.','Jakarta - Sengketa pertanahan ditengarai dapat menimbulkan konflik di masyarakat.

Sengketa pertanahan menjadi salah satu alasan sulitnya masyarakat memperoleh sertifikat tanah. Hal ini diakui Presiden Joko Widodo pada saat menyerahkan sertifikat tanah di Manggarai Barat, Nusa Tenggara Timur, Selasa (21/1). Menurut Jokowi, keluhan mengenai sengketa pertanahan sering ia temui karena masyarakat tidak memegang sertifikat tanah.

"Dari 2015, setiap saya ke daerah keluhannya selalu tentang sengketa pertanahan. Ini dikarenakan masyarakat tidak memegang yang namanya sertifikat tanah," kata Jokowi dalam siaran pers Kementerian Agraria dan Tata Ruang/Badan Pertanahan Nasional (ATR/BPN) yang diterima Hukumonline, Rabu (22/1).

Menurut Jokowi, sengketa pertanahan itu berbahaya karena dapat menimbulkan konflik di masyarakat. Atas potensi bahaya yang besar tersebut, ia pun memerintahkan kepada Menteri ATR/Kepala BPN untuk mempercepat pembuatan sertifikat tanah seluruh wilayah di Indonesia.

"Sebelum tahun 2017, Kantor Pertanahan di daerah menerbitkan 500.000 sampai 1.000.000 sertifikat tiap tahunnya sementara jumlah bidang tanah di wilayah Indonesia 126 juta bidang tanah dan baru bersertifikat sekitar 46 juta bidang tanah," tambahnya.

Jika konflik tanah terus berlangsung, lanjut Jokowi, masyarakat harus menunggu 160 tahun apabila ingin mendapat sertifikat tanah. "Untuk itu, saya minta kepada Menteri ATR/Kepala BPN agar menerbitkan 5 juta sertifikat tanah pada tahun 2017, sebanyak 7 juta pada tahun 2018 dan 9 juta pada tahun 2019. Harus begitu, yang penting masyarakat dilayani," katanya.

Terkait sengketa tanah, Wakil Menteri ATR/Wakil Kepala BPN, Surya Tjandra mengatakan bahwa penanganan sengketa pertanahan merupakan salah satu tugas utama dari Kementerian ATR/BPN. Ia berharap, seluruh jajaran kantor pertanahan di daerah untuk tanggap jika terjadi sengketa pertanahan.

"Sertifikat tanah itu harus abadi artinya berlaku seumur hidup untuk pemiliknya. Tugas kami adalah menjaga hal tersebut. Saya juga meminta agar seluruh jajaran Kantor Pertanahan di daerah giat melakukan komunikasi dengan aparat hukum terkait penanganan sengketa tanah," kata Surya.

Surya juga menambahkan selain membantu penanganan sengketa pertanahan, tugas dari Kementerian ATR/BPN adalah menyelesaikan pendaftaran tanah-tanah di Indonesia pada tahun 2025.

Penelusuran Hukumonline, dari data statistik perkara perdata dengan klasifikasi objek sengketa tanah tahun 2017 yang tertera di Badilum Mahkamah Agung, bahwa terbanyak adalah perkara objek sengketa tanah/perbuatan melawan hukum dengan total 5856 perkara yang masuk tahun tersebut. Sedangkan yang masuk terendah adalah perkara objek sengketa tanah/perbuatan melawan hukum/hak ulayat/persekutuan adat dengan total 6 perkara.

Sementara itu, Kementerian ATR/BPN juga telah bersinergi dengan Kejaksaan Agung dalam hal kepastian hukum atas tanah. Sinergi tersebut tertuang dari ditandatanganinya Nota Kesepahaman antar dua institusi itu. "Sinergi antara Kementerian dan Lembaga Negara ini adalah suatu keniscayaan, karena pada dasarnya tugas kita sama, untuk rakyat," kata Menteri ATR/Kepala BPN Sofyan A Djalil.

Ia menuturkan, selama ini Kementerian ATR/BPN melaksanakan beberapa program strategis nasional di antaranya adalah pengadaan tanah untuk kepentingan umum serta Pendaftaran Tanah Sistematis Lengkap (PTSL). Namun dalam pelaksanaannya, program ini terhambat karena berbedaan cara pandang akan suatu regulasi antara pelaksana dengan aparat penegak hukum.

"Supaya tidak terjadi kesalahpahaman di antara kedua pihak di masa yang akan datang, kita akan lakukan training bersama dengan teman-teman di kejaksaan," tambah Sofyan.

Perjanjian kerja sama ini juga disambut baik oleh Jaksa Agung Republik Indonesia ST Burhanudin. Ia turut menyambut baik rencana pelatihan bersama yang diungkapkan oleh Sofyan Djalil.','hukumonline.com',45468.2631100463,'https://www.hukumonline.com/berita/a/bahaya-sengketa-pertanahan-dan-kepastian-hukum-atas-tanah-lt5e2827b86cc42/?page=2',FALSE),
('6826cd7e-5f47-42e7-965f-aaa4f97006fd','Memahami Risiko dan Penyelesaian Sengketa Pertanahan pada Sektor Pertambangan','Permasalahan pertambangan dan pertanahan ini sangat erat. Tidak ada pertambangan yang tidak memiliki sengketa tanah, baik dengan pemilik tanah maupun dengan perusahaan lain selaku pemilik konsesi seperti perkebunan dan lain-lain.','Permasalahan pertambangan dan pertanahan ini sangat erat. Tidak ada pertambangan yang tidak memiliki sengketa tanah, baik dengan pemilik tanah maupun dengan perusahaan lain selaku pemilik konsesi seperti perkebunan dan lain-lain.

Sengketa pertanahan dalam dunia pertambangan merupakan risiko tinggi yang harus diantisipasi sebelum kegiatan usaha berjalan. Bahkan, terdapat ketentuan perizinan pra-operasi mengharuskan lahan pertambangan sudah memiliki kejelasan status alias clean and clear.

Melihat pentingnya persoalan tersebut, Hukumonline bersama Indonesia Mining Association (IMA) menyelenggarakan Webinar dengan topik “Hukum Pertanahan: Solusi Terhadap Permasalahan Tumpang Tindih Lahan Antara Hak Atas Tanah dengan Area Kerja Pertambangan” pada wilayah pertambangan, Rabu (12/10).

Dalam acara tersebut menghadirkan para pembicara dari berbagai pemangku kepentingan seperti Kementerian Koordinasi Maritim dan Investasi (Marves), Kementerian Energi dan Sumber Daya Mineral (ESDM), Kementerian Agraria dan Tata Ruang/Badan Pertanahan Nasional (ATR/BPN), Perhimpunan Ikatan Pejabat Pembuat Akta Tanah (IPPAT), serta Kantor Hukum Assegaf Hamzah and Partner (AHP Law Firm).

“Permasalahan pertambangan dan pertanahan ini sangat erat. Tidak ada pertambangan yang tidak memiliki sengketa tanah, baik dengan pemilik tanah maupun dengan perusahaan lain selaku pemilik konsesi seperti perkebunan dan lain-lain,” kata perwakilan IMA, Ezra Sibarani.

Menurutnya, hal itu perlu diberikan solusi karena sejak dulu pertambangan itu ada ini tidak terselesaikan. Secara final, kata Ezra, belum ada solusi penyelesaian terhadap masalah yang ada.

Dia menjelaskan terdapat persoalan pertanahan yang sering disampaikan anggota IMA seperti penggunaan SKT (surat keterangan tanah), pemberian hak di wilayah hutan serta sistem pengenaan biaya per ton pada batubara serta mineral yang keluar.

Permasalahan pertambangan dan pertanahan ini sangat erat. Tidak ada pertambangan yang tidak memiliki sengketa tanah, baik dengan pemilik tanah maupun dengan perusahaan lain selaku pemilik konsesi seperti perkebunan dan lain-lain.

Dia menjelaskan tidak kondusifnya akibat persoalan tanah pada industri pertambangan berimplikasi terhadap pengurangan pendapatan negara dan produksi tambang.

Sementara itu, Asisten Deputi Pertambangan pada Deputi Bidang Koordinasi Investasi dan Pertambangan Kemenko Marves, Tubagus Nugraha, menyampaikan terdapat kasus suatu perusahaan pertambangan mengalami kendala operasi akibat permasalahan penguasaan lahan.

Terdapat juga permasalahan lain permasalahan lahan akibat bersinggungan dengan penggunaan lainnya.

“Hal itu (permasalahan lahan) banyak berkembang dan jadi sesuatu pengusaha tambang untuk memikirkan dan tentunya merujuk pada mekanisme yang tepat mengatasi hal ini,” ungkap Tubagus.

Dia menjelaskan Indonesia memiliki potensi tinggi dalam kegiatan usaha pertambangan. Di tengah harga batubara yang mengarah naik, investasi hulu mengalami geliat positif. Selain itu, pemerintah juga berkomitmen melakukan hilirisasi para produk pertambangan.

Sehingga, dia menekankan pentingnya kepastian hukum pada kegiatan usaha pertambangan. “Ini (permasalahan lahan) harus sangat hati-hati dan tepat dibicarakan karena melibatkan ada banyak kepentingan di sini,” jelas Tubagus.','hukumonline.com',45468.248445729165,'https://www.hukumonline.com/berita/a/memahami-risiko-dan-penyelesaian-sengketa-pertanahan-pada-sektor-pertambangan-lt6347d9ee47958/?page=2',TRUE),
('6a34329b-fb95-4cb5-a6ea-f0330b97ee43','Ada Beragam Definisi dan Modus Mafia Tanah, Simak Penjelasannya!','Mafia Tanah adalah kelompok yang terstruktur dan terorganisir. Melibatkan banyak aktor dan pembagian kerja secara sistematis','Dalam setahun terakhir, istilah mafia tanah menjadi frasa yang populer menjadi perbincangan di masyarakat. Seiring munculnya banyak kasus sengketa tanah di Indonesia. Salah satunya, kasus sengketa tanah yang dialami artis Nirina Zubir menarik perhatian publik. Aset sekitar Rp17 miliar milik ibu Nirina, Cut Indria Marzuki raib telah berpindah tangan atau dirampas pihak lain diduga dilakukan mantan asisten rumah tangganya yang melibatkan banyak pihak.

Mengutip KBBI daring, definisi mafia adalah perkumpulan rahasia yang bergerak di bidang kejahatan (kriminal). Tanah adalah permukaan bumi yang diberi batas, permukaan bumi yang terbatas yang ditempati suatu bangsa yang diperintah suatu negara atau menjadi daerah negara. Kasus yang melibatkan mafia tanah banyak terjadi di berbagai tempat. Korbannya tidak hanya masyarakat biasa, bahkan pejabat dan mantan pejabat, bahkan lembaga negara.

Guru Besar Hukum Agraria FH Universitas Gadjah Mada, Prof Nurhasan Ismail, mengatakan mafia tanah merupakan kelompok yang terstruktur dan terorganisir. Terstruktur karena kelompok mafia tanah mempunyai struktur organisasi dengan melibatkan banyak aktor dan pembagian kerja yang sistematis dan tersusun setidaknya 3 bagian. Pertama, ada kelompok sponsor yang berfungsi sebagai penyandang dana, upaya mempengaruhi kebijakan, dan mempengaruhi instansi pemerintah di semua lapisan.

Kedua, ada kelompok garda garis depan yang berfungsi sebagai aktor yang berjuang secara legal (warga masyarakat biasa) dan ilegal (preman dan pengamanan swakarsa). Ketiga, ada kelompok profesi yang berwenang terdiri dari advokat, notaris-PPAT, pejabat pemerintah dari pusat, daerah, camat, kepala desa yang berfungsi sebagai pendukung baik legal maupun ilegal.

“Mereka (mafia tanah, red) tidak main-main, kalau kasus mafia tanah ditangani secara biasa, maka sulit untuk ditangani karena terstrukturnya kinerja mafia tanah,” kata Prof Nurhasan Ismail dalam sebuah webinar, Selasa (9/11/2021) lalu.

Mafia tanah sangat terorganisir karena menggunakan berbagai metode kerja. Antara lain keras-ilegal yakni tindakan perebutan tanah dan pendudukan tanah yang menjadi objek sasaran. Konflik dengan menggunakan kekerasan yang berpotensi mengancam nyawa. Ada juga metode kerja halus-ilmiah dan seolah legal. Misalnya, pencarian dokumen kepemilikan tanah; pemalsuan dokumen kepemilikan tanah dengan tampilan hasilnya mendekati. Bahkan, sama dengan aslinya; Proses pendekatan dalam rangka negosiasi dengan pemilik tanah; Pengajuan gugatan dengan logika berpikir yang sistematis dan logis.

Menurut Prof Nurhasan, berbagai metode kerja itu akan melalui 3 fase. Pertama, sengketa atau perkara sebagai tekanan kepada pemilik tanah sebenarnya. Kedua, fase ajakan damai untuk mempercepat mafia tanah mendapat keuntungan. Ketiga, fase menebar pengaruh pada pelaksana hukum dan penegak hukum dalam rangka mengamankan posisinya untuk ditetapkan sebagai pemilik dan semuanya tidak lepas dari permainan uang.

Dosen dan Peneliti Hukum Pidana FH Universitas Jenderal Soedirman, Kuat Puji Prayitno, menyebut mafia adalah perkumpulan rahasia yang bergerak di bidang kejahatan (kriminal) memiliki konotasi negatif sebagai kelompok kriminal. Kerja mafia tanah tergolong rumit, melibatkan konglomerat, pejabat, politisi, aparat penegak hukum, dan pihak lainnya.

Menurut Kuat, dampak yang ditimbulkan dari kejahatan mafia tanah memiliki daya rusak (mengeksploitasi) sumber daya non-fisik, merusak sustainable development, merusak kualitas kehidupan, merusak kepercayaan dan respek masyarakat. “Mafia tanah itu bahayanya sama seperti korupsi,” ujarnya.

Modus yang digunakan mafia tanah antara lain menggunakan surat hak-hak tanah yang dipalsukan, pemalsuan warkah, pemberian keterangan palsu, pemalsuan surat, jual beli fiktif, penipuan atau penggelapan, sewa menyewa, menggugat kepemilikan tanah dan menguasai tanah dengan cara ilegal. Kuat melihat instrumen hukum pidana bisa digunakan untuk menjerat mafia tanah misalnya delik pemalsuan, penggelapan dan penipuan serta penyertaan dan pembantuan seperti diatur Pasal 263, 266, 372, dan 378, 55 serta Pasal 56 KUHP.','hukumonline',45468.2026046875,'https://www.hukumonline.com/berita/a/ada-beragam-definisi-dan-modus-mafia-tanah--simak-penjelasannya-lt61dd73256df5f/?page=2',FALSE),
('71b26671-f3f7-479d-8a4e-10d227dd90cd','Mengurai Akar Permasalahan Sengketa dan Konflik Pertanahan','Penanganan sengketa dan konflik pertanahan memerlukan strategi, pilihan, dan keberanian untuk menyelesaikan konflik dari hulu ke hilir secara holistik.','Penanganan sengketa dan konflik pertanahan di Indonesia merupakan tantangan yang kompleks dan memerlukan pendekatan yang holistik serta berbasis strategi. Berbagai pihak, termasuk pemerintah, telah menyadari bahwa sengketa pertanahan dapat merugikan banyak pihak, termasuk masyarakat, dunia usaha, dan pemerintah sendiri. Selain mengganggu kehidupan sosial dan ekonomi masyarakat, sengketa ini juga dapat menimbulkan biaya tak terduga dalam proses penyelesaiannya.

Wakil Menteri ATR/Wakil Kepala BPN, Surya Tjandra, dalam acara yang bertema "Menelisik Biaya Konflik, Menumbuhkan Kepekaan Pentingnya Mitigasi dan Resolusi Konflik untuk Kepastian Pembangunan", menekankan perlunya upaya untuk mengalihkan biaya-biaya konflik menjadi biaya-biaya pencegahan. Hal ini melibatkan pembangunan kelembagaan yang mampu menangani konflik secara lebih efektif dan efisien di masa depan.

Menurut Surya, konflik pertanahan sering kali bersifat evolutif dan berkembang seiring dengan waktu, terutama terkait dengan ketidakteraturan dalam pembangunan dan tata kelola sumber daya. Penyelesaian konflik yang holistik harus mencakup tiga tahap utama: hulu (pembangunan yang tidak merata), medium (tata kelola yang tidak terkoordinasi), dan hilir (manifestasi dari konflik itu sendiri).

Direktur Jenderal Penataan Agraria, Andi Tenrisau, juga menambahkan bahwa penyelesaian konflik pertanahan harus dilakukan secara efektif dan efisien, dengan memanfaatkan alternative dispute resolution (ADR) seperti mediasi, arbitrase, dan ajudikasi sebelum mengambil langkah ke pengadilan. Hal ini diharapkan dapat mempercepat proses penyelesaian sengketa serta menghindari biaya-biaya yang lebih tinggi yang terkait dengan proses hukum yang panjang.

Pemerintah perlu berperan aktif dalam mengatur dan mengawasi penyelesaian konflik pertanahan untuk memastikan bahwa sumber daya agraria dapat dikelola secara efisien demi kemakmuran rakyat dan pemerataan manfaat bagi masyarakat luas. Peningkatan kapasitas SDM dalam penanganan konflik juga menjadi hal yang krusial agar proses penyelesaian konflik dapat berjalan dengan baik dan adil.

Dengan pendekatan yang terintegrasi dan kolaboratif antara berbagai pihak terkait, diharapkan penanganan sengketa dan konflik pertanahan di Indonesia dapat menjadi lebih efektif, mengurangi biaya, serta memberikan kepastian hukum yang lebih baik bagi semua pihak yang terlibat.','hukumonline.com',45468.25914502315,'https://www.hukumonline.com/berita/a/akar-permasalahan-sengketa-dan-konflik-pertanahan-lt62416c5539d57/?page=2',FALSE),
('9fcef81d-e76e-430f-9a07-8d2081b2230d','Ini Poin Penting dalam Peraturan Penyelesaian Kasus Pertanahan','Menteri Agraria dan Tata Ruang/ Kepala Badan Pertanahan Nasional Ferry Mursyidan Baldan telah meneken aturan terbaru di bidang pertanahan terkait dengan penyelesaian sengketa, konflik, dan perkara pertanahan pada 21 Maret 2016 yang lalu. ','Menteri Agraria dan Tata Ruang/ Kepala Badan Pertanahan Nasional Ferry Mursyidan Baldan telah meneken aturan terbaru di bidang pertanahan terkait dengan penyelesaian sengketa, konflik, dan perkara pertanahan pada 21 Maret 2016 yang lalu. Aturan itu diterbitkan lantaran aturan sebelumnya, yakni Peraturan Kepala BPN Nomor 3 Tahun 2011 tentang Pengelolaan Pengkajian dan Penanganan Kasus Pertanahan dinilai tidak berjalan efektif.

Lewat aturan yang terbaru ini, yakni Peraturan Menteri Agraria Dan Tata Ruang/ Kepala Badan Pertanahan Nasional (Permen Agraria) Nomor 11 Tahun 2016 tentang Penyelesaian Kasus Pertanahan, diharapkan penyelesaian kasus pertanahan dapat dijalankan secara lebih efektif. Dari catatan hukumonline, terdapat sejumlah hal penting dalam aturan ini yang mesti diperhatikan ketika seseorang mendapati kasus pertanahan di kemudian hari.

Pertama, kasus pertanahan sendiri membedakan yang namanya sengketa, konflik, dan perkara pertanahan. Sengketa tanah sendiri merupakan perselisihan antara orang perseorangan, badan hukum, atau lembaga yang tidak berdampak luas. Sementara konflik tanah adalah perselisihan pertanahan baik orang, kelompok, organisasi, badan hukum yang mempunyai kecenderungan atau sudah berdampak luas. Sedangkan, perkara tanah sendiri adalah perselisihan pertanahan yang penanganan perkara dan penyelesaiannya melalui lembaga peradilan.

Kedua, dalam aturan ini dibedakan penanganan penyelesaian sengketa dan konflik berdasarkan datangnya laporan. Pasal 4 Permen Agraria Nomor 11 Tahun 2016 membedakan jenis laporan berdasarkan dua jalan, yakni inisiatif dari kementerian dan pengaduan masyarakat. Dimana, terhadap dua mekanisme laporan itu dibedakan masing-masing proses administrasi dan pencatatan penanganan aduan yang masuk. Namun, mekanisme selanjutnya tidak terdapat perbedaan setelah temuan dan aduan di-register.

Terhadap temuan dan aduan tersebut dilakukan analisa secara mendalam untuk mengukur dan mengetahui apakah kasus pertanahan itu menjadi kewenangan kementerian. Pasal 11 ayat (3) Permen Agraria Nomor 11 Tahun 2016 menyebutkan sengketa atau konflik yang menjadi kewenangan kementerian, dalam hal ini Kementerian Agraria dan Tata Ruang.

Sengketa atau konflik itu antara lain, kesalahan prosedur dalam proses pengukuran, pemetaan, dan/atau perhitungan luas, kesalahan prosedur dalam proses pendaftaran dan/atau pengakuan hak atas tanah bekas milik adat, kesalahan prosedur dalam proses penetapan dan/atau pendaftaran hak tanah, kesalahan prosedur dalam proses penetapan tanah terlantar, tumpang tindih hak atau sertifikat hak atas tanah yang salah satu alas haknya jelas terdapat kesalahan.

Selanjutnya, kesalahan prosedur dalam proses pemeliharaan data pendaftaran tanah, kesalahan prosedur dalam proses penerbitan sertifikat pengganti, kesalahan dalam memberikan informasi data pertanahan, kesalahan prosedur dalam proses pemberian izin,

Penyalahgunaan pemanfaatan ruang, serta kesalahan lain dalam penerapan peraturan perundang-undangan.

Selain sengketa atau konflik tersebut, Kementerian Agraria dan Tata Ruang tidak berwenang menangani kasus pertanahan. Namun, Kementerian Agraria dan Tata Ruang dapat mengambil inisiatif untuk memfasilitasi penyelesaian sengketa atau konflik melalui jalur mediasi. Jalur mediasi dalam aturan ini ditempuh juga untuk jenis sengketa atau konflik, baik yang menjadi kewenangan kementerian atau yang bukan menjadi kewenangan kementerian.

Penyelesaian melalui jalur mediasi dapat ditempuh apabila para pihak sepakat melakukan perundingan dengan prinsip musyawarah untuk mufakat bagi kebaikan semua pihak. Jika salah satu pihak saja menolak, maka penyelesaiannya diselesaikan sesuai dengan ketentuan perundang-undangan. Teknisnya, mediasi dilakukan paling lama 30 hari dimana untuk mediatornya berasal dari kementerian, Kantor Wilayah BPN atau Kantor Pertanahan.

Dalam hal mediasi ditemukan kesepakatan, maka selanjutnya dibuat perjanjian perdamaian berdasarkan berita acara mediasi yang mengikat para pihak. Setelah itu, perjanjian perdamaian itu didaftarkan pada Kepaniteraan Pengadilan Negeri setempat untuk memperoleh kekuatan hukum mengikat. Yang perlu dicatat, mediasi dianggap batal apabila setelah diundang tiga kali secara patut, para pihak atau salah satu pihak yang berselisih tidak hadir. Sehingga, para pihak dipersilahkan menyelesaikan sengketa atau konflik dengan ketentuan peraturan perundang-undangan yang berlaku.

Ketiga, terkait dengan eksekusi. Keputusan penyelesaian sengketa atau konflik dilaksanakan oleh Kepala Kantor Pertanahan. Terhadap keputusan itu wajib dilaksanakan kecuali terdapat alasan yang sah untuk menunda pelaksanaannya. Pasal 33 ayat (2) Permen Agraria Nomor 11 Tahun 2016 menyebutkan ada tiga alasan yang sah untuk menunda pelaksanaan. Ketiganya, yakni sertifikat yang akan disita oleh kepolisian, kejaksaan, pengadilan atau lembaga penegak hukum lainnya, tanah yang menjadi objek pembatalan menjadi objek hak tanggungan, serta tanah telah dialihkan kepada pihak lain.

Keempat, terkait dengan penanganan perkara. Dalam konteks ini, penanganan perkara yang dilaksanakan dalam perkara di peradilan perdata atau tata usaha negara (TUN) dimana Kementerian Agraria dan Tata Ruang menjadi pihak. Kalau kementerian kalah dalam perkara, Kementerian dapat melakukan upaya hukum meliputi perlawanan (verzet), banding, kasasi, dan peninjauan kembali.

Selain itu, pihak yang berperkara dapat meminta keterangan ahli atau saksi ahli dari Kementerian melalui Kepala Kantor Pertanahan, Kepala Kantor Wilayah BPN, atau Menteri. Sementara, dalam hal perkara di pengadilan tidak melibatkan Kementerian sebagai pihak namun perkaranya menyangkut kepentingan Kementerian, maka Kementerian dapat melakukan intervensi.

Pelaksanaan putusan pengadilan yang telah mempunyai kekuatan hukum tetap wajib dilaksanakan kecuali terdapat alasan yang sah untuk ditunda, diantaranya objek putusan terdapat putusan lain yang bertentangan, terhadap objek putusan sedang dalam status diblokir atau sita oleh kepolisian, kejaksaan, pengadilan atau lembaga penegak hukum lainnya, serta alasan-alasan lain yang diatur dalam ketentuan peraturan perundang-undangan.

Pasal 50 Permen Agraria Nomor 11 Tahun 2016 mengatur bahwa terhadap putusan pengadilan yang telah mempunyai kekuatan hukum tetap dapat dimintakan permohonan pelaksanaan melalui Kantor Pertanahan setempat atau langsung diajukan ke Kementerian, khusus dalam hal permohonan pembatalan penetapan tanah terlantar.

Untuk diketahui, selain mencabut Peraturan Kepala BPN Nomor 3 Tahun 2011, aturan terbaru ini juga mencabut dan membuat','hukumonline.com',45468.22059670139,'https://www.hukumonline.com/berita/a/ini-poin-penting-dalam-peraturan-penyelesaian-kasus-pertanahan-lt570e587650717/',TRUE),
('a5b20f51-a284-4214-ae94-f8f1d9075054','Jangan Tertukar, Ini Perbedaan SHM dan HGB','Ada beberapa jenis status tanah yang sering ditemui di Indonesia. Yang paling umum adalah sertifikat hak milik dan hak guna bangunan. Ini perbedaan keduanya.','Ada beberapa jenis status tanah yang sering ditemui di Indonesia. Yang paling umum adalah sertifikat hak milik dan hak guna bangunan. Ini perbedaan keduanya.
Saat kita membeli rumah, salah satu poin penting yang harus diperhatikan adalah status tanah dan bangunan yang akan dibeli. Karena, hal ini penting untuk diperhatikan karena terkait dengan keabsahan hukum status dari tanah yang akan dibeli.
Bila tidak, bukan tidak mungkin suatu saat akan ada pihak yang mengklaim sebagai pemilik tanah dan berujung sengketa tanah.
Sehingga, baik sertifikat hak milik ataupun hak guna bangunan bisa mencegah terjadinya sengketa tanah.
Persoalannya, tak semua orang tahu apa perbedaan sertifikat hak milik dan hak guna bangunan. Berikut penjelasannnya.
1. SHM
SHM adalah sertifikat atas kepemilikan penuh hak suatu lahan dan/atau tanah yang dimiliki oleh pemegang sertifikat tersebut secara absolut. SHM bisa membuat pemilik tanah terbebas dari potensi masalah sengketa karena punya legalitas yang jelas. Hal itu karena pihak lain tidak bisa campur tangan atas kepemilikan tanah atau lahan tersebut.
Pada Undang-undang Pokok Agraria (UUPA) Nomor 5 Tahun 1960 Pasal 20 dijelaskan, hak milik atas tanah adalah hak turun-temurun, terkuat dan terpenuh yang dapat dipunyai orang atas tanah. Maka dari itu, SHM berarti bukti kepemilikan tertinggi atau terkuat atas suatu tanah yang berlaku untuk selamanya dan dapat diwariskan.
Adapun, SHM dikeluarkan oleh Badan Pertanahan Nasional (BPN) melalui Pejabat Pembuat Akta Tanah (PPAT). Hal tersebut sesuai dengan Peraturan Pemerintah No. 37 Tahun 1998 tentang Peraturan Jabatan Pejabat Pembuat Akta Tanah, bahwa PPAT diberi kewenangan untuk membuat akta otentik mengenai hak atas tanah.
Dilansir dari detikJatim, Senin (3/7/2023), di dalam SHM terdapat keterangan nama pemilik, luas tanah, lokasi properti, gambar bentuk tanah, nama objek atau tetangga pemilik tanah yang berbatasan langsung, tanggal penetapan sertifikat, nama dan tanda tangan pejabat yang bertugas, serta cap stempel sebagai bukti keabsahan sertifikat.
Sebagai informasi, SHM hanya dapat dimiliki oleh warga negara Indonesia. Oleh karena itu, warga negara asing tidak dapat memiliki tanah dengan SHM.
Apabila warga negara asing tersebut memperoleh tanah dengan SHM karena pewarisan tanpa wasiat atau percampuran harta perkawinan, maka wajib untuk melepaskan hak milik dalam jangka waktu satu tahun.
Keuntungan memiliki SHM
Terdapat beberapa keuntungan dengan memiliki SHM dibanding sertifikat tanah lainnya, seperti:
- SHM memberikan kewenangan bagi pemilik tanah untuk melakukan segala macam keperluan di atas tanah tersebut.
- SHM berlaku selama pemiliknya masih hidup.
- SHM dapat diturunkan kepada ahli waris selama memenuhi sejumlah syarat dan ketentuan perundang-undangan.
- Kedudukan dan keleluasaan SHM lebih tinggi dibandingkan Sertifikat Hak Guna Usaha (SHGU) ataupun Hak Guna Bangunan (HGB).
- SHM dapat diperjualbelikan, disewakan, diwariskan, digadaikan hingga dijadikan jaminan utang dana ke bank.
2. HGB
Berdasarkan Undang-undang nomor 5 tahun 1960 tentang Peraturan Dasar Pokok-pokok Agraria (UUPA), hak guna bangunan adalah hak untuk mendirikan dan mempunyai bangunan-bangunan atas tanah yang bukan miliknya sendiri dengan jangka waktu paling lama 30 tahun. Adapun, jangka panjang waktu tersebut dapat diperpanjang paling lama sampai 20 tahun.
Di sisi lain, berdasarkan Peraturan Pemerintah Nomor 18 tahun 2021 tentang Hak Pengelolaan, Hak Atas Tanah, Satuan Rumah Susun, dan Pendaftaran Tanah, HGB di atas tanah hak milik diberikan untuk jangka waktu paling lama 30 tahun dan dapat dioerbarui dengan akta pemberian HGB di atas hak milik. Setelah jangka waktu pemberian, perpanjangan, dan pembaruan selesai, tanah HGB kembali menjadi tanah yang dikuasai langsung oleh negara atau tanah hak pengelolaan.
Sebagai informasi, HGB ini dapat beralih dan dialihkan kepada orang lain. Perlu diketahui, yang dapat memiliki HGB yaitu warga negara Indonesia (WNI) serta badan hukum yang didirikan menurut hukum Indonesia dan berada di Indonesia.
3. HGU
Berdasarkan Undang-undang nomor 5 tahun 1960 (UUPA), Hak Guna Usaha (HGU) merupakan hak untuk mengusahakan tanah yang dikuasai langsung oleh negara dalam jangka waktu tertentu. Adapun usahanya untuk pertanian, perikanan, atau peternakan.
HGU ini diberikan atas tanah sedikitnya 5 hektar, dengan ketentuan bahwa jika luasnya 25 hektar atau lebih harus memakai investasi modal yang layak dan teknik perusahaan yang baik sesuai dengan perkembangan zaman.
Adapun HGU diberikan untuk paling lama 25 tahun dan untuk perusahaan yang memerlukan waktu yang lebih lama dapat diberikan hak guna-usaha untuk paling lama 35 tahun. Adapun HGU dapat diperpanjang hingga 25 tahun.
HGU hanya dapat dimiliki oleh Warga Negara Indonesia (WNI) dan badan hukum yang didirikan menurut hukum Indonesia dan berkedudukan di Indonesia. Apabila pemilik HGU tidak memenuhi syarat, maka HGU harus melepaskan atau mengalihkan hak kepada pihak yang memenuhi syarat dalam jangka waktu 1 tahun.
4. Hak Pakai
Menurut Undang-undang nomor 5 tahun 1960 (UUPA), hak pakai merupakan hak untuk menggunakan dan/atau memungut hasil dari tanah yang dikuasai langsung oleh negara atau tanah milik orang lain, yang memberi wewenang dan kewajiban yang ditentukan dalam keputusan pemberiannya oleh pejabat yang berwenang memberikannya atau dalam perjanjian dengan pemilik tanahnya, yang bukan perjanjian sewa-menyewa atau perjanjian pengolahan tanah, segala sesuatu asal tidak bertentangan dengan jiwa dan ketentuan Undang-undang ini.
Adapun Hak Pakai dapat diberikan selama jangka waktu tertentu atau selama tanahnya dipergunakan untuk keperluan tertentu. Pemberiannya dapat dilakukan cuma-cuma, pembayaran, atau pemberian jasa apapun.
Meski demikian, yang bisa mempunyai hak pakai yaitu WNI, orang asing yang berkedudukan di Indonesia, badan hukum yang didirikan menurut hukum Indonesia dan berkedudukan di Indonesia, serta badan hukum asing yang mempunyai perwakilan di Indonesia.
Selain SHM dan HGB, ada juga surat-surat tanah lain. Berikut daftarnya:
Girik
Girik biasanya merujuk pada tanah yang belum bersertifikat. Dilansir dari detikNews, Senin (3/7/2023), tanah Girik adalah tanah yang dikuasai oleh salah satu pihak yang memiliki Girik atau bukti pembayaran pajak atas tanah yang bersangkutan kepada Otoritas kolonial.
Ya, status tanah girik memang sudah ada sejak zaman kolonial. Namun demikian, status tanah girik bukan merupakan bukti kepemilikan tanah atau hak atas tanah, melainkan hanya bukti pembayaran pajak.
Karena belum diakui sah secara utuh sebagai bentuk kepemilikan, maka dapat ditingkatkan menjadi SHM. Hal itu supaya tanah yang dimiliki berstatus hak milik dan tersertifikasi sah secara hukum.
Petok D
Petok D atau Letter D merupakan salah satu syarat untuk pengkonversian tanah milik adat menjadi hak milik. Sebelum adanya UUPA, Petok D merupakan surat tanah untuk membuktikan kepemilikan tanah yang diakui kekuatan hukumnya.
Namun, setelah UUPA diterapkan, status Petok D hanyalah menjadi alat bukti pembayaran pajak tanah.
Letter C
Letter C atau dokumen C merupakan buku registrasi pertanahan atas kepemilikan tanah di suatu wilayah secara turun temurun. Biasanya, buku Register pertanahan Letter C disimpan oleh Kepala Desa atau Kepala Lurah setempat.
Sementara itu, warga memegang kutipan Letter C tanah, dan bukti-bukti lainnya. Meskipun dapat menjadi bukti yang sah atas kepemilikan tanah, namun Letter C tidak memiliki hukum yang cukup kuat. Maka dari itu, sebaiknya Letter C diubah menjadi SHM.','detik.com',45468.328130497684,'https://www.detik.com/properti/tips-dan-panduan/d-7073046/jangan-tertukar-ini-perbedaan-shm-dan-hgb',TRUE),
('c5785b51-f34b-4665-a83f-8783f34ca8b0','Regulasi Ini Disebut Menambah Beban Sengkarut Sengketa Tanah di Pengadilan','Sengkarut sengketa kasus tanah di pengadilan disebabkan banyak faktor. Salah satunya, persoalan regulasi, seperti UU No.11 Tahun 2020 tentang Cipta Kerja dan peraturan turunannya PP No.18 Tahun 2021, PP No.19 Tahun 2021, dan PP No.64 Tahun 2021.','Sengkarut sengketa kasus tanah di pengadilan disebabkan banyak faktor. Salah satunya, persoalan regulasi, seperti UU No.11 Tahun 2020 tentang Cipta Kerja dan peraturan turunannya PP No.18 Tahun 2021, PP No.19 Tahun 2021, dan PP No.64 Tahun 2021.

Pertanahan merupakan salah satu bidang yang rawan menimbulkan sengketa. Tak jarang sengketa tanah berujung saling menggugat ke pengadilan. Belum lagi, berbagai sengketa pertanahan ini melibatkan mafia tanah. Kementerian Agraria dan Tata Ruang/Badan Pertanahan Nasional (ATR/BPN) sendiri telah menerima lebih dari 240 laporan yang diduga ada keterlibatan mafia tanah.

Guru Besar FH UGM, Prof Maria S.W Sumardjono menilai silang sengkarut sengketa kasus pertanahan di pengadilan disebabkan banyak faktor. Misalnya, pemahaman hakim atas konsep dan prinsip UU No.5 Tahun 1960 tentang Peraturan Dasar Pokok-Pokok Agraria (UU PA), asas hukum tanah nasional, dan landasan hukum tertulis, dan tidak tertulis yang digunakan dalam menyusun alasan dan pertimbangan hukum membuat putusan.

Persoalan lain yang berkontribusi menambah beban para hakim di pengadilan yang menangani perkara pertanahan yakni adanya regulasi yang mengandung ketidakpastian hukum, salah satunya UU No.11 Tahun 2020 dan peraturan turunannya. Prof Maria menilai pengaturan bidang pertanahan dalam UU Cipta Kerja bertentangan dengan UU PA yang mengandung konflik norma/regulasi. Padahal, selama UU PA belum diubah atau dicabut, semua ketentuan pertanahan seharusnya selaras dengan UU PA.

“Peraturan Pemerintah (PP) turunan UU Cipta Kerja hanya mendasarkan pada UU Cipta Kerja dan tidak selaras dengan UU PA. Ini berpotensi menambah silang sengkarut perkara pertanahan di pengadilan,” kata Prof Maria dalam seminar yang digelar secara daring dan luring bertajuk “Peran KY dalam Mengawasi Silang Sengkarut Kasus Pertanahan di Pengadilan,” Kamis (7/10/2021). (Baca Juga: KY Butuh Bersinergi untuk Berantas Kasus Mafia Tanah di Pengadilan)

Prof Maria mencatat sedikitnya 5 aturan bidang pertanahan dalam UU Cipta Kerja dan peraturan turunannya yang mengandung ketidakpastian hukum sehingga berpotensi menambah silang sengkarut perkara di pengadilan.

Pertama, pemilikan tanah dan rumah tempat tinggal/hunian bagi WNA. Sebelum terbit UU Cipta Kerja, aturannya mengacu UU PA. Tapi setelah UU Cipta Kerja terbit untuk rumah tapak, hak atas tanah bagi WNA adalah hak pakai, selaras dengan UU PA. Tapi, untuk satuan rumah susun (sarusun)/flat/unit/apartemen tanah bersama statusnya HGB, bertentangan dengan UU PA yang berstatus hak pakai.

Kedua, pemberian HGU di atas HPL yang diatur UU Cipta Kerja dan PP No.18 Tahun 2021 tentang Hak Pengelolaan, Hak Atas Tanah, Satuan Rumah Susun, dan Pendaftaran Tanah, bertentangan dengan UUPA. Menurutnya, sesuai PP itu jika hak tanah berakhir, tidak diperpanjang atau diperbarui, hak atas tanahnya dihapus dan tanah menjadi tanah negara yang pengaturannya menjadi kewenangan Menteri ATR/BPN.

Sengkarut sengketa kasus tanah di pengadilan disebabkan banyak faktor. Salah satunya, persoalan regulasi, seperti UU No.11 Tahun 2020 tentang Cipta Kerja dan peraturan turunannya PP No.18 Tahun 2021, PP No.19 Tahun 2021, dan PP No.64 Tahun 2021.

Selain itu, berlakunya PP No.64 Tahun 2021 tentang Bank Tanah, ada potensi tanah negara bekas hak atas tanah itu ditetapkan menjadi aset Bank Tanah dengan dilekati hak pengelolaan (HPL). Tak ada ketentuan yang menegaskan tanah HGU yang semula diberikan di atas tanah negara akan tetap diberikan statusnya di atas tanah negara jika diperbarui.

“Ketentuan ini membuka potensi gugatan oleh pemegang hak karena merasa dirugikan sebab dia memiliki kewajiban ganda yakni kepada pemerintah dan kepada pemegang HPL.”

Ketiga, PP No.18 Tahun 2021 juga mengatur untuk masyarakat hukum adat (MHA) dapat ditetapkan HPL di atas tanah ulayatnya. Prof Maria menegaskan ketentuan tersebut bertentangan dengan Pasal 18B ayat (2) UUD NRI 1945 dan UU PA. MHA punya kewenangan melekat pada tanah ulayatnya, dan tidak memerlukan pelimpahan kewenangan dari siapa pun, termasuk dari negara.

Keempat, UU Cipta Kerja dan PP No.19 Tahun 2021 tentang Penyelenggaraan Pengadaan Tanah bagi Pembangunan untuk Kepentingan Umum menyebut pemegang hak atas tanah yang haknya sudah berakhir, tapi masih memanfaatkan tanahnya dengan bukti sertifikat hak atas tanah yang sudah berakhir. Hal ini dikategorikan sebagai pihak berhak yang beriktikad baik yang bisa diberikan ganti kerugian jika tanahnya diperlukan bagi pembangungan untuk kepentingan umum. Tapi tidak ditegaskan ganti kerugian harus diberikan atas bangunan, tanaman, dan benda yang ada di atas tanah negara bekas hak atas tanah yang sudah berakhir itu.

Menurutnya, tidak ada lagi hubungan hukum antara bekas pemegang hak dengan tanahnya ketika hak berakhir dan hapus. Sesuai asas pemisahan horizontal, Prof Maria mengingatkan hubungan hukum bekas pemegang hak atas tanah dengan tanaman, bangunan, dan benda-benda di atas tanah tersebut masih ada. Seandainya kepada bekas pemegang hak atas tanah tersebut diberikan ganti kerugian terhadap tanahnya, maka hal itu termasuk dalam perbuatan ”merugikan keuangan negara” karena memberikan ganti kerugian atas tanah negara.

Kelima, PP No.19 Tahun 2021 tentang Penyelenggaraan Pengadaan Tanah Bagi Pembangunan untuk Kepentingan Umum, belum mengatur tentang objek dan bentuk ganti kerugian terhadap tanah ulayat MHA. Padahal, MHA disebut sebagai salah satu pihak yang berhak menerima ganti kerugian. Jika kerugian yang dialami oleh MHA disamakan dengan kerugian oleh non-MHA, menurut Prof Maria itu jelas merugikan MHA.','hukumonline.com',45468.23539747685,'https://www.hukumonline.com/berita/a/regulasi-ini-disebut-menambah-beban-sengkarut-sengketa-tanah-di-pengadilan-lt61600ebb562c5/?page=1',TRUE),
('f42408f4-b4df-4136-9b5a-5393d0609578','Tips Hukum Menangani Perkara Sengketa Tanah','Modus operandi yang dilakukan mafia tanah beragam, sehingga pemilik sertifikat diminta untuk tidak sembarangan memberikan dokumen penting kepada orang lain.','Modus operandi yang dilakukan oleh mafia tanah sangat beragam dan sering kali melibatkan pihak-pihak yang memiliki kewenangan terkait pengurusan sertifikat tanah. Salah satu cara utama untuk menghindari jatuh ke dalam perangkap mafia tanah adalah dengan tidak memberikan dokumen penting kepada orang lain secara sembarangan, terutama terkait sertifikat tanah.

Menurut Wardaniman Larosa dari WLP Law Firm, ada beberapa modus operandi yang sering digunakan oleh mafia tanah:

Pemalsuan Sertifikat: Mafia tanah bisa berpura-pura menjadi pembeli dan meminjam sertifikat tanah dengan alasan pengecekan ke Badan Pertanahan Nasional (BPN). Setelah mendapatkan akses ke sertifikat tersebut, mereka bisa melakukan pemalsuan sertifikat dan menjual tanah tanpa sepengetahuan pemilik asli.

Modus Kepemilikan Girik: Terkadang, mafia tanah menggunakan girik untuk mengalahkan sertifikat tanah yang sah. Ini bisa terjadi meskipun sertifikat tanah dikeluarkan lebih awal dibandingkan dengan klaim kepemilikan girik. Kasus semacam ini memerlukan pemahaman yang mendalam tentang regulasi dan kemungkinan pendekatan hukum yang tepat.

Keterlibatan Broker dan Oknum Notaris: Mafia tanah juga sering melibatkan broker dan oknum notaris dalam kejahatannya. Broker mungkin menipu pemilik sertifikat yang lebih tua dengan memanfaatkan ketidaktahuan mereka tentang nilai pasar tanah. Oknum notaris kadang-kadang juga terlibat dalam proses transaksi yang tidak jujur, seperti memanipulasi jumlah uang yang seharusnya diterima oleh pemilik sertifikat.

Untuk melindungi diri dari praktik mafia tanah, penting untuk melakukan langkah-langkah preventif, antara lain:

Validasi Notaris: Pastikan untuk menggunakan jasa notaris yang memiliki reputasi baik dan telah terverifikasi.
Keamanan Dokumen: Jangan memberikan dokumen penting seperti KTP, NPWP, dan sertifikat tanah kepada orang yang tidak dikenal atau tidak dapat dipercaya.
Verifikasi Kepemilikan: Pastikan bahwa sertifikat tanah yang dimiliki adalah asli dan valid. Periksa secara berkala status kepemilikan tanah Anda.
Dengan memahami modus operandi yang umum dilakukan oleh mafia tanah dan mengambil langkah-langkah preventif yang sesuai, masyarakat bisa mengurangi risiko terlibat dalam sengketa tanah yang kompleks dan potensial merugikan.','hukumonline.com',45468.24314935185,'https://www.hukumonline.com/berita/a/tips-hukum-menangani-perkara-sengketa-tanah-lt60956797e2b58/',FALSE);


CREATE TABLE IF NOT EXISTS "foto_artikel" (
  "url" text,
  "id_artikel" text
);

INSERT INTO "foto_artikel" ("url","id_artikel")
VALUES
('https://images.unsplash.com/photo-1450101499163-c8848c66ca85','6a34329b-fb95-4cb5-a6ea-f0330b97ee43'),
('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','1a370d08-7136-460c-bd36-6fa9728c3123'),
('https://images.unsplash.com/photo-1542263900-bef62436c86d','71b26671-f3f7-479d-8a4e-10d227dd90cd'),
('https://images.unsplash.com/photo-1588582669551-8617e4a757bb','c5785b51-f34b-4665-a83f-8783f34ca8b0'),
('https://images.unsplash.com/photo-1591522811280-a8759970b03f','6826cd7e-5f47-42e7-965f-aaa4f97006fd'),
('https://storage.googleapis.com/lahan-damai/edukasi-1.jpeg','369a0a44-d5fd-47a7-9edc-a64efdc7b6c3'),
('https://storage.googleapis.com/lahan-damai/edukasi-2.jpg','267a1961-0161-4a1a-9acb-66d51089bd6b'),
('https://storage.googleapis.com/lahan-damai/edukasi-2.jpg','a5b20f51-a284-4214-ae94-f8f1d9075054'),
('https://storage.googleapis.com/lahan-damai/edukasi-3.jpg','9fcef81d-e76e-430f-9a07-8d2081b2230d'),
('https://storage.googleapis.com/lahan-damai/edukasi-3.jpg','f42408f4-b4df-4136-9b5a-5393d0609578'),
('https://storage.googleapis.com/lahan-damai/edukasi-4.jpg','63a8b8ed-8fd8-4c2b-8fc5-f4e8fc123b1e'),
('https://storage.googleapis.com/lahan-damai/edukasi-5.jpeg','31729ee2-011e-4a2b-bae2-4b9d9a4ad964'),
('https://storage.googleapis.com/lahan-damai/edukasi-5.jpeg','10e06e6e-df9f-4c13-8f45-31a7837fe32f'),
('https://storage.googleapis.com/lahan-damai/kantah-bpn-jakarta-selatan-digeledah-terkait-kasus-mafia-tanah-1_169.jpeg','61aa2730-411e-49bc-97ac-50a26a0b3eb6');
