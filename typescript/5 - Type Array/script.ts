// Créer une array ne pouvant contenir que des données de type string
let colors: Array<string> = ["red", "blue", "green", "orange"];

// Créer une array ne pouvant contenir que des données de type number
let numbers: Array<number> = [1, 5, 7.5];
// Ajouter un nombre dans l'array
numbers.push(20);
console.log(numbers);

// Créer une array pouvant contenir tout type de données
let values: any[];
values = [
  "bonjour",
  true,
  500,
  {
    id: 2343234,
    member: true,
    hobbies: ["peinture, YouTube, Guitare"]
  }
];

// Créer une array sans indiquer les types de données acceptés
let strNumArray = ["red", 9, false];
// Ajouter des données dans l'array
strNumArray.push("Salut");
strNumArray.push(200, 29, true, "Hello");
console.log(strNumArray);
// Changer la donnée située en 3ème position dans l'array
strNumArray[2] = "Bonjour";
console.log(strNumArray);
