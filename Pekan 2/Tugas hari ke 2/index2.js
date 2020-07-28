var readBooksPromise = require('./promise.js')
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
    }
]

// Lanjutkan code untuk menjalankan function readBooksPromise 
function readBooks() {
    readBooksPromise(10000, books[0]).then(function (sisaWaktu) {
        console.log(sisaWaktu)
        if (sisaWaktu > 0)
            readBooksPromise(sisaWaktu, books[1]).then(function (sisaWaktu) {
                console.log(sisaWaktu)
                if (sisaWaktu > 0) {
                    readBooksPromise(sisaWaktu, books[2])
                }
            })
    }).catch(function (sisaWaktu) {
        console.log(sisaWaktu)
    })
}

readBooks();
console.log(readBooks());

