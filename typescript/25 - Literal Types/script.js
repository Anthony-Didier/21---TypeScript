// let
var PI1 = 3.14; // en passant la souris sur la variable : Type number
// const
var PI = 3.14; // en passant la souris sur la constante : 3.14 // on ne pourra pas changer la valeur ensuite
var API_KEY = "FDFSRE4323"; // en passant la souris sur la constante : FDFSRE4323
var count = 200; // en passant la souris sur la constante : 200
var booleanValue = false; // en passant la souris sur la constante : false
// Literal Type
var PI2; // la variable est de "3.14" et sera impossible à changer ensuite
function total(arg1, arg2, totalVersion) {
    var result;
    if (totalVersion === "getStringValue") {
        result = arg1.toString() + arg2.toString(); // string
    }
    else if (totalVersion === "getSquare") {
        var val = arg1 + arg2;
        // Pour calculer un nombre au carré
        result = Math.pow(val, 2);
        // Autre méthode
        // result = val ** 2;
    }
    else {
        result = arg1 + arg2; // number
    }
    return result;
}
var totalOne = total(20, 10, "getStringValue");
console.log(totalOne); // 2010
var totalTwo = total(20, 10, "getSquare");
console.log(totalTwo); // 900
// const totalThree = total(20, 30, "getSq"); // TypeScript Error - JavaScript OK
// console.log(totalThree); // 50
// const totalFour = total(20, 30); // TypeScript Error - JavaScript OK
// console.log(totalFour); // 50
