# Pertemuan-11

## Materi: MongoDB
MongoDB adalah salah satu jenis database NoSQL yang berbasis dokumen dengan fomat JSON.

## Cara Menggunakan MongoDB
- Buat folder database, misal: article_project_db
- Buat folder data/db di dalam forlder database
- Pada terminal, masuk ke folder article_project_db, ketik mongod --dbpath data/db
- Jika gagal ganti port,, port default itu 27017: mongod --dbpath data/db --port 27017
- Buka terminal baru, ketik mongo article_project_db untuk masuk ke database.


- mongod --auth --dbpath article_project_db/data/db

