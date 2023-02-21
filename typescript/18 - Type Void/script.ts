/*
Comme les Enum et les tuple, « void » aussi n’existe pas en JavaScript
De ce fait:
- Une fonction qui retourne une valeur définit le type de la valeur retournée via (via
inférence ou Attribution.
- Une fonction qui ne retourne rien définit également un type « void » pour Undefined
*/
function gift(age: number) {
  return age + 3; // return value
}

console.log(typeof gift(30)); // number

function clgData(arg) {
  console.log(`Résultat : ${arg}`); // Pas de return
}

clgData(gift(30)); // 33

function clgData2() {
  console.log("Hello World"); // Pas de return
}

console.log(clgData2()); // Undefined car pas de return dans la fonction clgData2
