//Soal nomor 1

const luasLingkaran = (phi,jari_jari) =>{
    let hasil = phi*jari_jari*jari_jari
    return hasil;
}
const hitungLuasLingkaran = luasLingkaran(3.15,5,5);
console.log(hitungLuasLingkaran);

const kelilingLingkaran = (phi,diameter) =>{
    let hitung = phi*diameter;
    return hitung;
}
const hitungKelilingLingkaran = kelilingLingkaran(3.15,10);
console.log(hitungKelilingLingkaran);


//soal nomor 2

let kalimat = ""
function tambahKata() {
    let kata="Saya adalah seorang frontend developer";
    let kalimat = console.log(`${kata}`);    
}
tambahKata();


//soal nomor 3

class book {
    constructor(name,totalPage,price) {
        this.name = name;
        this.totalPage = totalPage;
        this.price = price;
    }
} class komik extends book {
    constructor(name,totalPage,price,isColorful) {
        super(name,totalPage,price);
        this.isColorful = isColorful;
    }
}

myBook = new book("TIK",500,8000);
console.log(myBook);
myKomik = new komik ("Naruto",800,1000,true);
console.log(myKomik);