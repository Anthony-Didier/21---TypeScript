// Objet
let car = {
  color: "red",
  date: 2020,
  speed: 500
};

// Type Object
let bus: {
  color: string;
  date: number;
  speed: number;
};

// Autre manière
/*
let car: {
  color: string;
  date: number;
  speed: number;
} = {
  color: "red",
  date: 2020,
  speed: 500
};
*/

console.log(car);
console.log(car.color);

// On ne peut remplacer une donnée de type objet par une donnée d'un autre type (type string dans cet exemple)
//car = "hello";

car.color = "orange";
car.speed = 20;
console.log(car);

// Une fois une variable de type objet est instanciée
// on ne peut pas lui ajouter de propriété supplémentaire directement...
//car.options = ["GPS", "ABS"];
// ...ou en déclarant une nouvelle fois l'objet
/*
car = {
  color: "blue",
  date: 2020,
  speed: 500,
  options: ["GPS"]
};
*/

// On ne peut également pas supprimer une propriété présente lors de l'instanciation de l'objet
/*
car = {
  color: "blue",
  date: 2020
};
*/
