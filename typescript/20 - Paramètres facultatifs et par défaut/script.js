function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
//let result1 = buildName("Bob");
//console.log(result1); // Bob undefined // car il n'y a qu'1 argument au lieu de 2
//let result2 = buildName("Bob", "Adams", "Salut");
//console.log(result2); // Bob Adams // mais "Salut" n'est pas pris en compte car il y a 3 arguments au lieu de 2
//let result3 = buildName("Bob", 200);
//console.log(result3); // Erreur car dans la fonction il est indiqué que les 2 arguments doivent être de type string
var result4 = buildName("Bob", "Adams");
console.log(result4); // Bob Adams // OK
// On refait la même fonction mais on indique que le 2ème argument est facultatif
// Ainsi il n'y aura pas d'erreur si on ne met qu'1 argument lorsque l'on appelle la fonction
function buildName2(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var result5 = buildName2("Bob");
console.log(result5); // Bob // OK
//let result6 = buildName2("Bob", "Adams", "Salut");
//console.log(result6); // Bob Adams // mais "Salut" n'est pas pris en compte car il y a 3 arguments au lieu de 1 ou 2
var result7 = buildName2("Bob", "Adams");
console.log(result7); // Bob Adams // OK
// On refait la même fonction mais on indique que le 2ème argument est facultatif
// Mais si on ne met pas de 2ème argument, celui-ci sera égal à Smith dans cet exemple
// Ainsi il n'y aura pas d'erreur si on ne met qu'1 argument lorsque l'on appelle la fonction
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result8 = buildName3("Bob");
console.log(result8); // Bob Smith // OK
var result9 = buildName3("Bob", undefined);
console.log(result9); // Bob Smith // OK
//let result10 = buildName3("Bob", "Adams", "Salut");
//console.log(result10); // Bob Adams // mais "Salut" n'est pas pris en compte car il y a 3 arguments au lieu de 2
var result11 = buildName3("Bob", "Adams");
console.log(result11); // Bob Adams // OK
// On refait la même fonction mais cette fois, c'est le 1er argument qui est facultatif
// Ainsi il aura une erreur si on ne met qu'1 argument lorsque l'on appelle la fonction
// Il faut alors mettre 2 arguments
// ou alors mettre undefined en 1er argument
// Dans ce dernier cas, le 1er argument sera égal à Will comme indiqué dans la fonction
function buildName4(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
var result12 = buildName4("Bob", "Adams");
console.log(result12); // Bob Adams // OK
// let result13 = buildName4("Bob", "Adams", "Salut");
// console.log(result13); // Bob Adams // mais "Salut" n'est pas pris en compte car il y a 3 arguments au lieu de 2
// let result14 = buildName4("Bob");
// console.log(result14); // Bob undefined // TypeScript Error - JavaScript OK
var result15 = buildName4(undefined, "Bob");
console.log(result15); // Will Bob // OK
