
//Soal nomor 1

console.log(`----Soal Nomor 1----`);
//es5
/*const newFunction = function literal(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            console.log(firstName + " " + lastName)
            return
        }
    }
}
//Driver Code 
newFunction("William", "Imoh").fullName() 
*/
//es6
const firstName = "William";
const lastName = "Imoh";
const fullName = {
    firstName,
    lastName,
}
console.log(fullName);

//soal nomor 2

console.log(`----Soal nomor 2----`)

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const [object] = [newObject]
console.log(object)

//soal nomor 3

console.log(`----Soal nomor 3----`)
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]
//Driver Code
console.log(combined)