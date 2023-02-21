// 5 - Créer une variable "colors" qui est un Array de
// strings. Ensuite, effectuer un push de la valeur "red" +
// console.log de la variable "colors"
let colors: string[] = [];
colors.push("red");
console.log(colors);

// 6 - Créer une variable "infos" qui ne peut accepter qu'un
// Array de strings ou numbers ou booleans. Ensuite, faire un
// push du string "Dupont" + true + 40
let infos: (string | number | boolean)[] = [];
infos.push("Dupont", true, 40);
console.log(infos);
