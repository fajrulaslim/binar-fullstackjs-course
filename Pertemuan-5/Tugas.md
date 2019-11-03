# Tugas Pertemuan 5

## Pemrograman Compiler dengan Interpreter
**Program komputer** atau sering kali disingkat sebagai program adalah serangkaian instruksi yang ditulis untuk melakukan suatu fungsi spesifik pada komputer.

Biasanya kita menulis sebuah program komputer dengan menggunakan bahasa tingkat tinggi. Bahasa tingkat tinggi adalah bahasa yang bisa dimengerti oleh kita manusia. Ini berisi kata-kata dan ungkapan dari bahasa Inggris atau bahasa lainnya.

Tapi komputer tidak mengerti bahasa tingkat tinggi. Komputer hanya memahami program yang ditulis dalam angka 0 dan 1 dalam biner, yang disebut kode mesin. Sebuah program yang ditulis dalam bahasa tingkat tinggi disebut kode sumber. Kita perlu mengubah kode sumber menjadi kode mesin dan ini dilakukan oleh **compiler** dan **interpreter**.

### Compiler
**Compiler** (kompilator) adalah sebuah program komputer yang berguna untuk menerjemahkan program komputer yang ditulis dalam bahasa pemrograman tertentu menjadi program yang ditulis dalam bahasa pemrograman lain.

Terlepas dari pengertiannya yang luas, istilah compiler biasa digunakan untuk program komputer yang menerjemahkan program yang ditulis dalam bahasa pemrograman tingkat tinggi (semacam bahasa Pascal, C++, BASIC, FORTRAN, Visual Basic, Visual C#, Java, xBase, atau COBOL) menjadi bahasa mesin, biasanya dengan bahasa Assembly sebagai perantara.

Arsitektur compiler modern biasanya bukan lagi merupakan program tunggal namun merupakan rangkaian komunikasi antar program dengan tugas spesifik masing-masing. Program-program tersebut beserta tugasnya secara umum terdiri dari:

* _Compiler_ itu sendiri, yang menerima kode sumber dan menghasilkan bahasa tingkat rendah (_assembly_)
* _Assembler_, yang menerima keluaran _compiler_ dan menghasilkan berkas objek dalam bahasa mesin
* _Linker_, yang menerima berkas objek keluaran _assembler_ untuk kemudian digabungkan dengan pustaka-pustaka yang diperlukan dan menghasilkan program yang dapat dieksekusi (_executable_)

Compiler yang menggunakan arsitektur ini misalnya GCC, Clang dan FreeBASIC.

Beberapa compiler tidak menggunakan arsitektur di atas secara gamblang, dikarenakan komunikasi antar program jauh lebih lambat dibandingkan jika komunikasi dilakukan secara internal di dalam satu program. Sehingga compiler-compiler tersebut mengintegrasikan assembler dan linker di dalam compiler. Namun, biasanya arsitektur yang digunakan pun tidak kaku dan mengizinkan penggunaan assembler maupun linker eksternal (berguna jika assembler dan linker internal bermasalah). Compiler yang menggunakan arsitektur ini salah satunya adalah Free Pascal.

### Interpreter
Dalam ilmu komputer, **penerjemah** atau lebih dikenal dengan **interpreter** merupakan perangkat lunak yang berfungsi melakukan eksekusi sejumlah instruksi yang ditulis dalam suatu bahasa pemrograman tanpa terlebih dahulu menyusunnya menjadi program bahasa mesin. Interpreter umumnya menggunakan salah satu strategi berikut untuk menjalankan program:

1. Mengeksekusi kode sumber secara langsung, atau
2. Menerjemahkannya ke dalam serangkaian p-code kemudian mengeksekusinya, atau
3. Mengeksekusi kode yang telah dikompilasi sebelumnya oleh compiler yang merupakan bagian dari sistem penerjemahan.

Proses ini sangat berbeda dengan compiler, dimana pada compiler, hasilnya sudah langsung berupa satu kesatuan perintah dalam bentuk bahasa mesin, dimana proses penterjemahan dilaksanakan sebelum program tersebut dieksekusi.

Perl, Python, Ruby, dan MATLAB adalah beberapa contoh perangkat lunak penerjemah bertipe 2, sementara Java termasuk dalam kategori tipe 3, namun dalam beberapa kasus Java dapat digolongkan pula ke dalam kategori tipe 2.

**Perbedaan Compiler dan Interpreter**
![Gambar perbedaan compiler dan interpreter](https://miro.medium.com/max/850/1*9prupuV0tCou5ye3kT528w.jpeg)
Sumber: [https://medium.com/@jundialwan/kenal-javascript-variable-6ed4bdbce836](https://medium.com/@jundialwan/kenal-javascript-variable-6ed4bdbce836)

## Apa itu Variabel
Variabel adalah sebuah nama yang mewakili sebuah nilai. Variabel bisa diisi dengan berbagai macam nilai seperti _string_ (teks), _number_ (angka), objek, array, dan sebagainya.
Kita bisa ibaratkan, variabel itu seperti wadah untuk menyimpan sesuatu.
Jika membahas variabel akan ada tiga istilah yang akan kita jumpai, yaitu _declaring_ dan _assigning_, dan _initializing_. Anda mungkin sering mendengar istilah _‘Declaring variable’_ atau _‘Assigning variable’_.
_Initializing_ mungkin kurang familiar karena memang dilakukan secara implisit oleh JavaScript. Ketiga istilah tersebut disebutkan berbeda karena memang merujuk pada hal yang berbeda. Jika digambarkan keterhubungan antara ketiga istilah tersebut maka akan menjadi seperti berikut.

![Gambar Proses Variable](https://miro.medium.com/max/211/1*nwCqtsF2rcTayc4XrMVPHw.png)

Gambar diatas menjelaskan secara sederhana bagaimana tahapan yang terjadi saat kita melakukan deklarasi variabel pada JavaScript. Pada saat Anda melakukan deklarasi variabel, JavaScript secara otomatis juga melakukan inisiasi variabel tersebut, karena itu saya sebut sebelumnya bahwa initialization dilakukan secara implisit oleh JavaScript. Oleh karena itu pada pembahasan ini kita akan fokus pada declaration dan assignment saja.

*Declaring Variable*
Mendeklarasikan, declaring, variabel dapat dilakukan dengan mudah, yaitu dengan menggunakan keyword var. Seperti contoh berikut:
```javascript
  var variabelSaya;
```
Dengan kode diatas kita baru saja melakukan deklarasi variabel dengan nama variabelSaya. Variabel variabelSaya diatas sudah dideklarasikan namun belum memiliki nilai karena kita baru hanya mendeklarasikan variabelSaya, belum dilakukan assignment nilai pada variabelSaya. 

*Assigning Variable*
_Assigning variable_, memberikan nilai kepada variabel, dilakukan setelah _declaring variable_. _Assigning_ dapat dilakukan dengan menggunakan operator ‘=’. Seperti contoh berikut:
```javascript
  variabelSaya = 7;
```

*Reassigning Variable*
Reassiging variable dilakukan jika Anda ingin memberikan nilai baru pada suatu variable. Nilai variable tersebut akan dibuang dan digantikan dengan nilai yang baru di-assign. Contohnya seperti berikut.
```javascript
  variabelSaya = 7;
  console.log(variabelSaya);
  variabelSaya = 10;
  console.log(variableSaya)
```

*Declaring dan Assigning Dalam Satu Statement*
Anda juga dapat melakukan deklarasi dan memberi nilai pada suatu variable dalam satu baris statement seperti contoh berikut.
```javascript
  var variabelSaya = 7;
```

### Aturan Penulisan Variabel
1. Nama variabel tidak boleh dimulai dengan angka
2. Nama variabel tidak boleh mengandung operator matematika, operator logika, atau operator bitwise
3. Nama variabel tidak boleh mengandung tanda baca
4. Nama variabel tidak boleh mengandung spasi
5. Nama variabel tidak boleh dari reserve keywords JavaScript
6. Nama variabel case-sensitive

### Penulisan Variabel
1. camelCase
```javascript
  var camelCase = 7;
  var namaSaya = 'Fajrul';
```
2. underscore_case
```javascript
  var my_name = 'Fajrul';
  var my_variable = 7;
```
3. PascalCase
```javascript
  var MyName = 'Fajrul';
  var MyVariable = 7;
```

Sumber [https://medium.com/@jundialwan/kenal-javascript-variable-6ed4bdbce836](https://medium.com/@jundialwan/kenal-javascript-variable-6ed4bdbce836)

## Apa itu Control Flow
Sering kita ingin program kita untuk memberikan respon yang berbeda bergantung terhadap masukan dari user atau nilai dari variabel tertentu.
Control Flow adalah sebuah cara untuk memberi tahu program instruksi apa yang harus dijalankan.
Dalam JavaScript terdapat beberapa cara untuk mengubah suatu alur program (controlling flow) jika suatu kondisi terjadi. Maka sebelum kita mempelajari mengenai pengambilan keputusan, kita akan pelajari dahulu mengenai kondisi yang ada pada JavaScript.

Sebenarnya komputer disusun oleh kumpulan 0 dan 1 atau disebut binary. Komputer hanya mengenal ya atau tidak, komputer tidak mengenal ditengah-tengah atau kondisi “digantung”. Maka dalam komputer dikenal istilah true atau false. Kedua istilah ini juga dikenal dalam JavaScript.

Sebelum kita merubah atau mengambil keputusan untuk suatu bagian program, biasanya syntax program tersebut akan mengambil kondisi true atau false dari suatu statement. Statement yang mengembalikan nilai true atau false sering disebut kondisi. Statement ini ada beberapa macam, kita akan bahas satu persatu.


### Statement If
if akan mengeksekusi suatu kode jika kondisi dimasukkan ke dalamnya true. Berikut contohnya:
```javascript
  var angka = 7;
  if (angka > 5) {
    alert("angka ini lebih besar dari 5");
  }
```

### Statement if .. else
Jika kita ingin mengeksekusi suatu kode bila secara default bila tidak ada kondisi yang sesuai dengan statement if sebelumnya, maka kita dapat menggunakan statement if else. Berikut contohnya
```javascript
  var angka = 4;
  if (angka > 5) {
    alert("angka ini lebih besar dari 5");
  } else {
    alert("angka ini lebih kecil atau sama dengan 5");
  }
```

### Statement if .. else if .. else
Kita bisa membuat program yang dapat mengevaluasi beberapa kondisi, untuk hal tersebut kita dapat memakai if .. else if .. else. Berikut contohnya.
```javascript
  var bulan = 4;
  if (bulan === 0) {
    alert("Ini bulan Januari");
  } else if (bulan === 1) {
    alert("Ini bulan Februari");
  } else if (bulan === 2) {
    alert("Ini bulan Maret");
  } else if (bulan === 3) {
    alert("Ini bulan April");
  } else {
    alert("Bulan belum diketahui sistem");
  }
```

### Statement switch
Mirip dengan statement if .. else if .. else, statement switch juga berguna untuk mengevaluasi beberapa kondisi. Berikut contohnya.
```javascript
  switch (expr) {
    case "Jeruk":
      console.log("Jeruk Rp10.000 per kg.");
      break;
    case "Apel":
      console.log("Apel Rp15.000 per kg.");
      break;
    case "Pisang":
      console.log("Pisang Rp8.000 per kg.");
      break;
    case "Mangga":
    case "Pepaya":
      console.log("Mangga dan pepaya Rp20.000 per kg.");
      break;
    default:
      console.log("Maaf, kami kehabisan " + expr + ".");
  }
```

sumber [https://tito.pandubrahmanto.com/web-development/tutorial-belajar-javascript-control-flow/](https://tito.pandubrahmanto.com/web-development/tutorial-belajar-javascript-control-flow/)

## Apa itu Operator
Operator adalah simbol yang digunakan untuk melakukan operasi pada suatu nilai dan variabel.

Operator dalam pemrograman terbagi dalam 6 jenis:
1. Operator aritmatika;
2. Operator Penugasan (Assignment);
3. Operator relasi atau perbandingan;
4. Operator Logika;
5. Operator Bitwise;
6. Operator Ternary;

### Opeartor Aritmatika pada Javascript
Operator aritmatika merupakan operator untuk melakukan operasi aritmatika seperti penjumlahan, pengurangan, pembagian, perkalian, dsb.

Operator aritmatika terdiri dari:

| Nama Operator  | Simbol |
| -------------- | ------ |
| Penjumlahan    | +      |
| Pengurangan    | -      |
| Perkalian      | *      |
| Pemangkatan    | **     |
| Pembagian      | /      |
| Sisa Bagi      | %      |

```javascript
  var a = 5;
  var b = 3;
  // menggunakan operator penjumlahan
  var c = a + b;
  console.log(c);
  // hasilnya 8
```

### Operator Penugasan (Assignment)
Operator penugasan adalah operator yang digunakan untuk memberikan tugas kepada variabel. Biasanya digunakan untuk mengisi variabel.

```javascript
  var a = 17;
```

Variabel a kita berikan tugas untuk menyimpan nilai 19.

Operator penugasan terdiri dari:

| Nama Operator                | Simbol |
| ---------------------------- | ------ |
| Pengisian Nilai              | =      |
| Pengisian dan Penambahan     | +=     |
| Pengisian dan Pengurangan    | -=     |
| Pengisian dan Perkalian      | *=     |
| Pengisian dan Pemangkatan    | **=    |
| Pengisian dan Pembagian      | /=     |
| Pengisian dan Sisa Bagi      | %=     |

```javascript
  var jumlahView = 12;

  // menggunakan operator penugasan penjumlahan
  // untuk menambah nilai
  jumlahView += 1;
```

```javascript
  var a = 2;
  a++;
```

### Operator relasi atau perbandingan
Operator relasi atau perbandingan adalah operator yang digunakan untuk membandingkan dua nilai.
Operator perbandingan akan menghasilkan sebuah nilai boolean true dan false.

Operator perbandingan terdiri dari:

| Nama Operator            | Simbol      |
| ------------------------ | ----------- |
| Lebih Besar              | >           |
| Lebih Kecil              | <           |
| Sama Dengan              | == atau === |
| Tidak Sama dengan        | != atau !== |
| Lebih Besar Sama dengan  | >=          |
| Lebih Kecil Sama dengan  | <=          |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Operator Perbandingan</title>
</head>

<body>

    <script>
        var aku = 20;
        var kamu = 19;

        // sama dengan
        var hasil = aku == kamu;
        document.write(`${aku} == ${kamu} = ${hasil}<br/>`);
        
        // lebih besar
        var hasil = aku > kamu;
        document.write(`${aku} > ${kamu} = ${hasil}<br/>`);
        
        // lebih besar samadengan
        var hasil = aku >= kamu;
        document.write(`${aku} >= ${kamu} = ${hasil}<br/>`);
        
        // lebih kecil
        var hasil = aku < kamu;
        document.write(`${aku} < ${kamu} = ${hasil}<br/>`);
        
        // lebih kecil samadengan
        var hasil = aku <= kamu;
        document.write(`${aku} <= ${kamu} = ${hasil}<br/>`);
        
        // tidak samadengan
        var hasil = aku != kamu;
        document.write(`${aku} != ${kamu} = ${hasil}<br/>`);
    </script>
</body>

</html>
```

### Operator Logika
Operator logika digunakan untuk melakukan operasi terhadap dua nilai boolean.

Operator ini terdiri dari:

| Nama Operator     | Simbol |
| ----------------- | ------ |
| Logika AND        | &&     |
| Logika OR         | ||     |
| Negasi/kebalikan  | !      |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Operator Logika</title>
</head>

<body>

    <script>
        var aku = 20;
        var kamu = 19;

        var benar = aku > kamu;
        var salah = aku < kamu;

        // operator && (and)
        var hasil = benar && salah;
        document.write(`${benar} && ${salah} = ${hasil}<br/>`);
        
        // operator || (or)
        var hasil = benar || salah;
        document.write(`${benar} || ${salah} = ${hasil}<br/>`);
        
        // operator ! (not)
        var hasil = !benar
        document.write(`!${benar} = ${hasil}<br/>`);

    </script>
</body>

</html>
```

### Operator Bitwise
Operator bitwise merupkan operator yang digunakan untuk operasi berdasarkan bit (biner).

Operator ini terdiri dari:

| Nama Operator          | Simbol |
| ---------------------- | ------ |
| AND                    | &      |
| OR                     | |      |
| XOR                    | ^      |
| Negasi/kebalikan       | ~      |
| Left Shift             | <<     |
| Right ShiftXOR         | >>     |
| Left Shift (unsigned)  | <<<    |
| Right Shift (unsigned) | >>>    |

### Operator Ternary
Operator ternary merupakan operator yang teridiri dari tiga bagian.
Operator-operator sebelumnya hanya dua bagian saja, yaitu: bagian kiri dan kanan. Ini disebut operator binary.
Sementara operator trinary ada bagian kiri, tengah, dan kanan.

> bagian kiri <operator> bagian tengah <operator> bagian kanan

Opertor ternary pada Javascript, biasanya digunakan untuk membuat sebuah percabangan if/else.
Simbol opertor ternary terdiri dari tanda tanya dan titik dua (?:).
Bentuknya seperti ini:

> <kodisi> ? "benar" : "salah"

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Operator Ternary</title>
</head>

<body>

    <script>
        var pertanyaan = confirm("Apakah kamu berumur diatas 18 tahun?")

        var hasil = pertanyaan ? "Selamat datang" : "Kamu tidak boleh di sini";
        document.write(hasil);
    </script>
</body>

</html>
```

Sumber: [https://www.petanikode.com/javascript-operator/](https://www.petanikode.com/javascript-operator/)

