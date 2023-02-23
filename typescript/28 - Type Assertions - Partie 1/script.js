// As (1ère méthode)
var someValue = "This is a string";
var strlength = someValue.length;
console.log(someValue); // This is a string
console.log(strlength); // 16
// Angle-Bracket (2ème méthode)
var someValue2 = "This is a string";
var strlength2 = someValue2.length;
console.log(someValue2); // This is a string
console.log(strlength2); // 16
var firstName = document.getElementById("firstName");
console.log(firstName);
console.log(typeof firstName); // object
var firstName1 = document.getElementById("toto");
console.log(firstName1); // null // l'élément "toto" n'existe pas dans le fichier html
// As (1ère méthode)
var firstName2 = document.getElementById("firstName");
console.log(firstName2);
console.log(typeof firstName2); // object
console.log(typeof firstName2.value); // string
// Angle-Bracket (2ème méthode)
var firstName3 = document.getElementById("firstName");
console.log(firstName3);
console.log(typeof firstName3); // object
console.log(typeof firstName3.value); // string
var firstName4 = document.getElementById("firstName");
// As (1ère méthode)
var inputValue = firstName4.value;
console.log(typeof inputValue); // string
// Angle-Bracket (2ème méthode)
var inputValue2 = firstName4.value;
console.log(typeof inputValue2); // string
var age = document.getElementById("age");
console.log(age);
console.log(typeof age); // object
console.log(typeof age.value); // string
