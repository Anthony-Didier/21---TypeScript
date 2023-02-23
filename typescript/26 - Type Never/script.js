/*
Le type "never" est relativement nouveau dans TypeScript. Il représente
le type de valeurs qui ne se produisent jamais.

Le type « never » est assignable à chaque type. Mais aucun type n'est
assignable à un type « never », même le type « any » !

En effet, contrairement au type "void" qui s'applique dans les cas d'une
fonction qui retourne "undefined", le type "never", lui, indique qu'une
fonction ne retourne jamais rien. Même pas "undefined". Le type "never"
peut donc s'avérer utile si on souhaite capturer une erreur via le throw
ou dans le cas de boucles infinies..
*/
// let count1 = 5;
// let count2: never;
// const verifyCases: never = count2;
// type AcceptedValues = string | number | boolean;
// function format(value: AcceptedValues) {
//   if (typeof value === "string") {
//     return value.length;
//   } else if (typeof value === "number") {
//     return value.toString();
//   } else {
//     const verifyCases2: never = value; // TypeScript Error
//   }
// }
// format(true);
function throwError(errMsg) {
    throw new Error(errMsg); // Le code s'arrête ici
}
// const result = throwError("Oups, nous avons un problème !");
// console.log(result);
function getTotal(arg) {
    if (arg < 5) {
        return throwError("Attention, le total est inférieur à 5 !!!");
    }
    else if (arg === 5) {
        console.log(arg); // pas de return, type never
    }
    else {
        return arg + 10; // TypeScript getTotal => number
    }
}
var sayHello = function (textMsg) {
    var i = 0;
    while (i < 5) {
        console.log(textMsg);
        i++;
    }
};
sayHello("Hello World");
