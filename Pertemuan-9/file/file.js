// ------------
// MEMBUAT FILE

// const fs = require('fs');
// console.log("Sebelum fungsi writeFile");

// // non-blocking
// fs.writeFile('newFile.txt', 'Teks Belajar NodeJS', (err) => {
//     if(err) throw err;
//     console.log("File berhasil dibuat!");
// })

// // blocking
// fs.writeFileSync('newFile2.txt', 'Teks Belajar NodeJS', (err) => {
//     if(err) throw err;
//     console.log("File berhasil dibuat!");
// })
// console.log("Setelah fungsi writeFile");


// ------------
// MEMBACA FILE

// const fs = require('fs');

// fs.readFile('newFile.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// -----------------
// MEMBUAT DIRECTORY

const fs = require('fs');

fs.mkdir('new folder', (err) => {
    if(err) throw err;
    console.log("Directory berhasil dibuat!");
})