// 11 - Créer une variable "infos" qui ne peut être qu'un tuple
// de seulement 2 valeurs : string et number dans cet ordre-là !
var infos;
infos = ["Hello", 25];
console.log(infos);
//infos[1] = "Salut";
// Question : Peut-on changer la valeur infos[1] = "salut" ?
// Réponse : Non car l'index 1 (= 2ème position dans le tuple) est de type number
// On ne peut donc remplacer sa valeur que par une valeur de type number
