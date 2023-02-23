// let
let PI1 = 3.14; // en passant la souris sur la variable : Type number
// const
const PI = 3.14; // en passant la souris sur la constante : 3.14 // on ne pourra pas changer la valeur ensuite
const API_KEY = "FDFSRE4323"; // en passant la souris sur la constante : FDFSRE4323
const count = 200; // en passant la souris sur la constante : 200
const booleanValue = false; // en passant la souris sur la constante : false

// Literal Type
let PI2: 3.14; // la variable est de "3.14" et sera impossible à changer ensuite

type GetResultFormat = "getStringValue" | "getSquare";

function total(arg1: number, arg2: number, totalVersion: GetResultFormat) {
  let result;
  if (totalVersion === "getStringValue") {
    result = arg1.toString() + arg2.toString(); // string
  } else if (totalVersion === "getSquare") {
    const val = arg1 + arg2;
    // Pour calculer un nombre au carré
    result = Math.pow(val, 2);
    // Autre méthode
    // result = val ** 2;
  } else {
    result = arg1 + arg2; // number
  }
  return result;
}
const totalOne = total(20, 10, "getStringValue");
console.log(totalOne); // 2010

const totalTwo = total(20, 10, "getSquare");
console.log(totalTwo); // 900

// const totalThree = total(20, 30, "getSq"); // TypeScript Error - JavaScript OK
// console.log(totalThree); // 50

// const totalFour = total(20, 30); // TypeScript Error - JavaScript OK
// console.log(totalFour); // 50
