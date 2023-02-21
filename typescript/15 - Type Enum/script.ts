/*
ADMIN = 0
MODERATOR = 1
SUPPORT = 2
USER_READ_ONLY = 3
*/

enum Level {
  ADMIN, // 0
  MODERATOR, // 1
  SUPPORT, // 2
  USER_READ_ONLY // 3
}

const users = {
  pseudo: "Batman",
  level: Level.SUPPORT
};

if (users.level === Level.SUPPORT) {
  console.log(`Bienvenue ${users.pseudo}
Vous travaillez au service Support.
${Level.SUPPORT}`);
}

// Dans cet exemple, on change la valeur de "Red" qui était initialement à 0
// puisqu'il s'agit du premier élément de l'enum Color
enum Color {
  Red = 1,
  Green,
  Blue
}

// Après avoir mis la valeur de "Red" à 1, la valeur des autres éléments
// s'incrémenteront à la valeur de l'élément qui les précède si on n'a pas changé ces autres valeurs
// Donc "Green" sera égal à 2 et "Blue" sera égal à 3
let c = Color.Green;
console.log(c); // 2

// Dans cet exemple, on change la valeur de chacun des éléments de l'enum
enum Color2 {
  Red = 1,
  Green = 5,
  Blue = 6
}

let c2 = Color2.Green;
console.log(c2); // 5

// Dans cet exemple, on change la valeur de chacun des éléments de l'enum
enum Color3 {
  Red,
  Green,
  Blue
}

let colorName: string = Color3[1];
console.log(colorName); // "Green"

colorName = Color3[2];
console.log(colorName); // "Blue"
