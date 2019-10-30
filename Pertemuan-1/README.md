#Pertemuan-1

## CARA  MENDAFTAR GITHUB
1. Buka www.github.com pada browser, lalu klik Sign Up.
2. Masukkan data sesuai form yang tersedia. lalu klik Select: next a plan
3. Pilih individual, karena kita akan membuat akun individu. kemudian pilih Choose Free.
4. Selamat kamu telah berhasil membuat akun di Github. Periksa email anda dan lakukan verifikasi akun Github kamu.


## SETUP SSH GITHUB
SSH memungkinkan kita untuk melakukan push ke repository github tanpa login. Berbeda dengan cara yang biasa (melalui HTTPS), kita harus memasukkan username dan password setiap kali melakukan push. Tapi dengan SSH kita tidak akan melakukan itu lagi.
berikut ini langkah-langkah melakukan Setup SSH Github.

1. Masuk ke terminal.
2. Pastikan di komputer kamu terdapat sebuah directory bernama SSH.
3. Ketikan perintah berikut di terminal
> cd ~/.ssh
4. Jika directorynya ada, maka kamu akan masuk ke directory SSH.
5. Jika directory SSH nya tidak ada, maka anda bisa membuatnya sendiri dengan perintah berikut :
> mkdir ~/.ssh
6. Jika sudah, pindah ke directory ssh tadi dengan perintah cd, seperti pada langkah ke tiga. Sekarang langkah selanjutnya adalah membuat SSH key nya. Masih di folder ssh tadi, ketikan perintah di bawah ini, jangan lupa masukkan email sesuai dengan email yang kamu gunakan.
> ssh-keygen  -t rsa -C “fajrul.aslim@gmail.com” -b 4096
7. Setelah itu kamu akan di minta untuk mengisih id SSH and passphrasenya. Kamu bisa mengosongkan passphrasenya. 
8. Sekarang di dalam folder SSH tadi akan ada 2 file baru dengan nama sesuai dengan id yang kamu masukkan tadi.
9. Untuk melihat isi folder sshnya, ketikkan perintah 
> ls.
10. File dengan ekstendi .pub adalah public keynya dan file tanpa ekstensi adalah private keynya. Yang akan kita kita gunakan adalah public keynya. Sekarang kita tinggal mengambil isi dari public key tadi.
11. Di terminal ketikkan perintah berikut :
> cat aslim.pub
12. Terakhir, kamu tinggal copy isi dari public key tadi, dan pasang di akun Github kamu.
13. Login ke Github, lalu masuk ke Settings>SSH and GPG Keys, buat kunci baru dengan mengelik New SSH Key. Lalu masukkan key yang sudah dibuat, dan klik tombol Add SSH Key.
14. kembali ke terminal. Ketik perintah berikut untuk menguji konektivitas SSH ke Github
> ssh -T git@github.com
15. Jika berhasil akan muncul pesan 
> “Hi fajrulaslim! You've successfully authenticated, but GitHub does not provide shell access.”
16. Jika pesannya 
> “permission denied”, 
artinya SSH keynya belum berhasil di tambahkan. Kita harus menambahnya terlebih dahulu, di terminal ketikkan perintah berikut :
> ssh-add ~/.ssh/aslim
17. lalu coba kembali konektivitas SSH ke Github. jika sudah berhasil kamu dapat mengeceknya ke Github kamu dan mencoba melakukan Clone Repository.

## MEMBUAT REPOSITORY DI GITHUB
1. Login ke Github kamu.
2. Pada halaman Dasboard, klik tombol New (berwarna hijau), maka kamu akan dibawa ke halaman Create a New Repository
pada kolom Repository Name, ketika nama repository yang kamu inginkan. misalnya: FW_aslim.
3. Pilih Public, lalu centang pilihan Initialize this repository with a README, dan klik tombol Create Repository.
 pembuatan Repository berhasil.
 
 ## CARA PUSH KE REMOTE REPOSITORY MELALUI SSH
 1. Remote dapat kita tambahkan dengan perintah seperti ini:
 > git remote add github git@github.com:fajrulaslim/FW_aslim.git
 2. Setelah itu, silahkan ketik perintah 
 > git remote -v 
 untuk melihat remote apa saja yang sudah ditambahkan.
 3. Bagus, sekarang kita sudah menambahkan remote di dalam repository lokal.
 Selanjutnya kita bisa melakukan push atau mengirim revisi ke repository remote (Github) dengan perintah berikut
 Perintah yang kita gunakan untuk mengirim revisi ke repository remote adalah
 > git push github master
 4. keterangan: github adalah nama remote, dan master adalah nama cabang tujuan.
