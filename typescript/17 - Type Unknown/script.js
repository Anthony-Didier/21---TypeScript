/*
Via « Unknown », le TypeScript définit un type comme étant inconnu!
Comme le type « Any », Unknown accepte tous les types
Pour pouvoir utiliser le type Unknown, vous devez d’abord vérifier le type
*/
var inputData;
inputData = true;
console.log(typeof inputData); // boolean
var inputAge;
inputAge = inputData; // OK
console.log(typeof inputAge); // boolean
var inputData2;
inputData2 = 20;
console.log(typeof inputData2); // boolean
var inputAge2;
if (typeof inputData2 === "number") {
    // inputData2 est maintenant de type number
    inputAge2 = inputData2; // OK
    console.log(typeof inputAge2);
}
