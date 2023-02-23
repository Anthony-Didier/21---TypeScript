// As (1ère méthode)
let someValue: unknown = "This is a string";

let strlength = (someValue as string).length;
console.log(someValue); // This is a string
console.log(strlength); // 16

// Angle-Bracket (2ème méthode)
let someValue2: unknown = "This is a string";

let strlength2 = (<string>someValue2).length;
console.log(someValue2); // This is a string
console.log(strlength2); // 16

const firstName = document.getElementById("firstName");
console.log(firstName);
console.log(typeof firstName); // object

const firstName1 = document.getElementById("toto");
console.log(firstName1); // null // l'élément "toto" n'existe pas dans le fichier html

// As (1ère méthode)
const firstName2 = document.getElementById("firstName") as HTMLInputElement;
console.log(firstName2);
console.log(typeof firstName2); // object
console.log(typeof firstName2.value); // string

// Angle-Bracket (2ème méthode)
const firstName3 = <HTMLInputElement>document.getElementById("firstName");
console.log(firstName3);
console.log(typeof firstName3); // object
console.log(typeof firstName3.value); // string

const firstName4 = document.getElementById("firstName");

// As (1ère méthode)
let inputValue = (firstName4 as HTMLInputElement).value;
console.log(typeof inputValue); // string

// Angle-Bracket (2ème méthode)
let inputValue2 = (<HTMLInputElement>firstName4).value;
console.log(typeof inputValue2); // string

const age = document.getElementById("age") as HTMLInputElement;
console.log(age);
console.log(typeof age); // object
console.log(typeof age.value); // string
