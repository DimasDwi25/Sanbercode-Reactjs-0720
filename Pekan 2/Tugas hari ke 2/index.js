// di index.js
var readBooks = require('./callback.js')

var books = [
    {
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    },
    {
        name: 'komik',
        timeSpent: 1000
    }
]
 
// Tulis code untuk memanggil function readBooks di sini
var waktu = 10000;
readBooks(waktu, books[0], function (check) {
    readBooks(check, books[1], function (check) {
        readBooks(check, books[2], function (check) {
            readBooks(check,books[3],function(check) {       
            })
            return check;
        })
    })
});