//Contoh Program If Else
console.log(" ~Contoh Program If Else")

let nama = "Nauval";

if (nama === "Nauval") 
{  
  console.log("Nama adalah Nauval");
} else

{
  console.log("Nama bukan Nauval");
}


// Contoh program nested if untuk menentukan peringkat siswa

console.log("\n ~Contoh Program Nested If")

let nilai_ujian = 80;

if (nilai_ujian >= 90) {
    peringkat = 'A';
} else if (nilai_ujian >= 80) {
    peringkat = 'B';
} else if (nilai_ujian >= 75) {
    peringkat = 'C';
} else if (nilai_ujian >= 40) {
    peringkat = 'D';
} else{
    peringkat = 'E';
}

console.log("Nilai Ujian: " +nilai_ujian);
console.log("Peringkat: " + peringkat);

// Contoh program switch case untuk menentukan hari dalam seminggu

console.log("\n ~Contoh Program Switch")
let hari = 3;

switch (hari) {
  case 1:
    console.log("Hari ini adalah hari Minggu");
    break;
  case 2:
    console.log("Hari ini adalah hari Senin");
    break;
  case 3:
    console.log("Hari ini adalah hari Selasa");
    break;
  case 4:
    console.log("Hari ini adalah hari Rabu");
    break;
  case 5:
    console.log("Hari ini adalah hari Kamis");
    break;
  case 6:
    console.log("Hari ini adalah hari Jumat");
    break;
  case 7:
    console.log("Hari ini adalah hari Sabtu");
    break;
  default:
    console.log("Sistem Error");
}

//Contoh Program Menggunakan For statment
console.log("\n ~Contoh Program Menggunakan For statment")

let tahunlahir = 2013;
let tahunsekarang = 2023;

for (let tahun = tahunlahir; tahun <= tahunsekarang; tahun++) {
  
  console.log(`Pada tahun ${tahun} umur saya ${tahun - tahunlahir} tahun`);
}


//Contoh Program While , do while
console.log("\n~Contoh Program While ")

var angka = 5;

while (angka >= 1) {
  console.log(angka);
  angka--;
}

console.log("\n~Contoh Program do while")
var Angka = 1;

do {
  console.log(Angka);
  Angka++;
} while (Angka <= 5);


// Contoh Function
console.log("\n~Contoh Function")

function tambah(a = 0, b = 0) {
    hasil = a + b;
    console.log("Hasil dari\t" + a + " + " + b + " adalah " + hasil);
}
function kurang(a = 0, b = 0) {
    hasil = a - b;
    console.log("Hasil dari\t" + a + " - " + b + " adalah " + hasil);
}
function kali(a = 0, b = 0) {
    hasil = a * b;
    console.log("Hasil dari\t" + a + " x " + b + " adalah " + hasil);
}
function bagi(a = 0, b = 0) {
    hasil = a / b;
    console.log("Hasil dari\t" + a + " / " + b + " adalah " + hasil);
}

tambah(9, 3);
kurang(5, 3);
kali(7, 3);
bagi(9, 3);