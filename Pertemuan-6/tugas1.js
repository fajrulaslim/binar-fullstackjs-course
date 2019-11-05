// Tugas 1

function myProfile(nama, umur, hobi){
    if(umur <= 56){
        console.log(`Nama saya ${nama}, saya masih aktif bekerja, umur saya ${umur} tahun, saya hobi ${hobi}.`);
    } else {
        console.log(`Nama saya ${nama}, saya sudah pensiun, umur saya ${umur} tahun, saya hobi ${hobi}.`);
    }
}
myProfile('Fajrul', 76, 'Membaca Komik');