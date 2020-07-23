

//Soal Nomor 1
//gabungkan variabel - variabel tersebut agar menghasilkan output
//saya Senang belajar JAVASCRIPT

var kataPertama = "saya ";
var kataKedua = "senang ";
var kataKetiga = "belajar ";
var kataKeempat = "javascript ";

console.log(kataPertama + kataKedua + kataKetiga + kataKeempat);

//soal nomor 2

//buatlah variabel - variabel seperti di bawah ini

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

//ubah lah variabel diatas ke dalam integer dan lakukan jumlahkan semua variabel dan tampilkan dalam output
var nilai = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat);
console.log(nilai);

//soal nomor 3
//buatlah variabel - variabel seperti di bawah ini

var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

//selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:

/* Kata Pertama: wah
Kata Kedua: javascript
Kata Ketiga: itu
Kata Keempat: keren
Kata Kelima: sekali */

//Soal nomor 4
//buatlah variabel seperti di bawah ini

var nilai = 80;

//isi variabel tersebut dengan angka dari 0 sampai 100. lalu buat lah pengkondisian dengan
//if -elseif dengan kondisi

/*nilai >= 80 indeksnya A
nilai >= 70 dan nilai < 80 indeksnya B
nilai >= 60 dan nilai < 70 indeksnya c
nilai >= 50 dan nilai < 60 indeksnya D
nilai < 50 indeksnya E */

if (nilai >= 80) {
    console.log("indeksnya A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("Indeksnya B")
} else if (nilai >=60 && nilai < 70) {
    console.log("Indeksnya C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("Indeksnya D")
} else if (nilai < 50 ) {
    console.log("Indeksnya E")   
}

//soal nomor 5
//buatlah variabel seperti di bawah ini

var tanggal = "12 " ;
var bulan = 6 ;
var tahun = " 2001" ;

/*ganti tanggal, bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah
switch
case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020(isi di sesuaikan dengan tanggal lahir masing - masing) */

switch (bulan) {
    case 1: 
        bulan = "Januari"           
        break;
    case 2:
        bulan = "February"
        break;
    case 3:
        bulan = "Maret"
        break;
    case 4:
        bulan = "April"
        break;
    case 5:
        bulan = "Mei"
        break;
    case 6:
        bulan = "Juni"
        break;
    case 7:
        bulan = "Juli"
        break;
    default:
        bulan = "Invalid"
        break;
};

console.log(tanggal+bulan+tahun);