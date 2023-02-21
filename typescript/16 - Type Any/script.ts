/*
Via « any », le TypeScript n’impose aucun type particulier!
On peut y stocker tous les types
A utiliser avec modération! Vous n’avez aucun contrôle des types et le compilateur
TypeScript ne va pas vérifier votre code!
Peut être utile dans certains cas. Exemple: On ne sait pas quel type de data à récupérer
d’une API, d’un formulaire, on souhaite modifier le type etc.. (+ vérification, typeof)
*/
let anyData: any = "Salut";
console.log(typeof anyData); // string
anyData = 20;
console.log(typeof anyData); // number
anyData = true;
console.log(typeof anyData); // boolean
anyData = ["Hello"];
console.log(typeof anyData); // object
anyData = {
  colors: ["Green", "Red", "Blue"]
};
console.log(typeof anyData); // object

let anyDataArray: any[] = [];
anyDataArray = ["Hello", 25, true, ["Red", "Blue"], { name: "Dupont" }];

anyDataArray.push("Salut");
console.log(anyDataArray);
console.log(typeof anyDataArray); // object

let userInfos: {
  name: any;
  pseudo: any;
} = {
  name: "Hakerman",
  pseudo: 1232343
};

console.log("userInfos 1 :", userInfos);
userInfos.pseudo = "1232343hjgvhgvu";
console.log("userInfos 2 :", userInfos);
