/*
Le Generic Utility Type "NonNullable" nécessite un seul paramètre "Type" qui doit être
un "Union Type" et permet de construire un nouveau type en excluant les types
"NULL" et "UNDEFINED".

En gros, c'est un type qui interdit les types « NULL » et « UNDEFINED ».
*/
class Car {
  color?: "Green" | "Black" | "White" | "Red";

  paint(color: NonNullable<Car["color"]>) {
    console.log(color);
  }
}

const ford = new Car();
ford.paint("Green"); // OK
// ford.paint(undefined); // Error // la propriété "color" de la classe Car est NonNullable
