//Soal nomor 1

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var objectDaftarPeserta = {
    nama: "Asep",
    jenisKelamin: "laki-laki",
    hobi: "baca buku",
    tahunLahir: 1992
}

console.log(objectDaftarPeserta.nama);

//soal nomor 2

//anda diberikan data - data buah seperti di bawah ini

var daftarBuah = [

    {
        nama: "strawberry",
        warna: "merah",
        adaBijinya: "tidak",
        harga: 9000
    },

    {
        nama: "jeruk",
        warna: "oranye",
        adaBijinya: "ada",
        harga: 8000
    },

    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: "ada",
        harga: 10000
    },

    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: "tidak",
        harga: 5000
    },
]

// uraikan data tersebut menjadi array of object dan munculkan data pertama

console.log(daftarBuah[0]);

//soal nomor 3
var dataFilm = [];
var tambahData = {
    nama: "Nanti kita cerita tentang hari ini",
    durasi: "121 menit",
    genre: "Drama",
    tahun: 2019
}
function daftarDataFilm(tambahData) {
    dataFilm.push(tambahData);
}
daftarDataFilm(tambahData);
console.log(dataFilm);


//soal nomor 4

//release 0
class Animal {
    // Code class di sini
    constructor(name, lage) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;

    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//release 1
// Code class Ape dan class Frog di sini
class Ape {
    constructor(name) {
        this.name = name;
    }
    yell() {
        return "Auooo";
    }
}
class Frog {
    constructor(name) {
        this.name = name;
    }
    jump() {
        return "hop hop";
    }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong);
console.log(sungokong.yell()) // "Auooo"

var kodok = new Frog("buduk")
console.log(kodok);
console.log(kodok.jump()) // "hop hop"


//soal nomor 5
class Clock {
    constructor({ template }) {

        var timer;

        function render() {

            var date = new Date();

            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        };

        this.stop = function () {
            clearInterval(timer);
        };

        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };

    }
}


var clock = new Clock({ template: 'h:m:s' });
console.log(clock);
clock.start(); 