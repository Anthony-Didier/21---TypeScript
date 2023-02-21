function gift(num) {
    return num + 3;
}
console.log(gift(10)); // 13
function displayClg(arg) {
    console.log(arg);
}
var age;
age = gift; // OK
console.log("age 1 :", age(20)); // 23
// Dans l'exemple suivant, il y aura une erreur car on ne peut mettre une valeur de type string à une fonction
//age = "Bonjour";
//console.log("age 2 :", age(20)); // age n'est pas une fonction
age = displayClg;
console.log("age 2 :", age(20)); // undefined
function displayClg2(arg) {
    return arg;
}
var age2;
age2 = gift; // OK
console.log("age 3 :", age2(20)); // 23
age2 = displayClg2;
console.log("age 4 :", age2(20)); // 20
