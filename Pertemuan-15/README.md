# Pertemuan-12

## Install express generator
- sudo npm install express-generator -g
- Pada terminal, menuju direktory yang dimaksud,, lalu ketik express namaproject --view=ejs
- ikuti langkah yang ditampilkan pada terminal
- install nodemon, npm install --save-dev nodemon
- tambahkan "devstart": "nodemon ./bin/www" pada file package.json setelah baris 6
- jalankan server: DEBUG=company-website:* npm run devstart

- install mongoose, npm install mongoose --save