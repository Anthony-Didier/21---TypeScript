/*
ADMIN = 0
MODERATOR = 1
SUPPORT = 2
USER_READ_ONLY = 3
*/
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATOR"] = 1] = "MODERATOR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY"; // 3
})(Level || (Level = {}));
var users = {
    pseudo: "Batman",
    level: Level.SUPPORT
};
if (users.level === Level.SUPPORT) {
    console.log("Bienvenue ".concat(users.pseudo, "\nVous travaillez au service Support.\n").concat(Level.SUPPORT));
}
// Dans cet exemple, on change la valeur de "Red" qui était initialement à 0
// puisqu'il s'agit du premier élément de l'enum Color
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// Après avoir mis la valeur de "Red" à 1, la valeur des autres éléments
// s'incrémenteront à la valeur de l'élément qui les précède si on n'a pas changé ces autres valeurs
// Donc "Green" sera égal à 2 et "Blue" sera égal à 3
var c = Color.Green;
console.log(c); // 2
// Dans cet exemple, on change la valeur de chacun des éléments de l'enum
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 5] = "Green";
    Color2[Color2["Blue"] = 6] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
console.log(c2); // 5
// Dans cet exemple, on change la valeur de chacun des éléments de l'enum
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 0] = "Red";
    Color3[Color3["Green"] = 1] = "Green";
    Color3[Color3["Blue"] = 2] = "Blue";
})(Color3 || (Color3 = {}));
var colorName = Color3[1];
console.log(colorName); // "Green"
colorName = Color3[2];
console.log(colorName); // "Blue"
