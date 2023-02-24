/*
Le Generic Utility Type "Extract" est l'opposé de « Exclude ». Il permet de construire un
nouveau type en extrayant des "Unions membres" qui peuvent être affectées à « Union ».

En gros, on va extraire ce qu'on souhaite utiliser dans notre nouveau type.
*/
type Colors = "Red" | "Blue" | "Orange" | "Green";

type myColors = "Red" | "Purple" | "Green";

type AcceptedColors = Extract<Colors, myColors>;

function clgColors(arg: AcceptedColors) {
  console.log(arg);
}

clgColors("Red"); // OK
// clgColors("Blue") // Error // "Blue" ne fait pas partie du type "AcceptedColors"
