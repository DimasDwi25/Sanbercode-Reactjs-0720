
//soal nomor 1

var jawaban = "";
var i = 1;
jawaban += console.log("LOOPING PERTAMA");

while (i <= 10) {
    jawaban = console.log(i * 2 + " -I Love Coding");
    i++;
    if (i > 10) {
        console.log("LOOPING KEDUA")
        while (i >= 1) {
            jawaban = console.log(i * 2 + " -I Will Become A Frontend Developer");
            i--;
        }
        i = 11;
    }
}

//soal nomor 2

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 2 == 1) {
        console.log(i + " I Love Coding");

    } else if (i % 2 == 0) {
        console.log(i + " Berkualitas");

    } else if (i % 2 == 1) {
        console.log(i + " Santai");

    }
}

//soal nomor 3

var bintang = " ";

for (i = 1; i <= 7; i++) { //inner loop 
    for (j = 1; j <= i; j++) {

        bintang += "#";
    }

    bintang += "\n";
}

console.log(bintang);


//soal nomor 4

var kalimat = "Saya,sangat,senang,belajar,javascript";
var convert = kalimat.split(",");

console.log(convert);



//soal nomor 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

for (i = 0; i < daftarBuah.length; i++) {

    console.log(daftarBuah[i]);

}
