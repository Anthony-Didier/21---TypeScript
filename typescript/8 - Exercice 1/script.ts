// 1 - Créer une variable "names" qui n'accepte qu'un type String
let names: string;

// 2 - Créer une variable "speed" qui n'accepte que les numbers et l'initialiser avec la valeur 25
let speed: number = 25;

// 3 - Créer une variable "isLoading" qui n'accepte que les types booleans
let isLoading: boolean;

// 4 - Créer une variable "age" qui n'accepte que les types number ou string
let age: number | string;
age = 25;
age = "25";

// la variable age n'accepte que les types number et string
// si on essaye de lui mettre une valeur de type boolean, il y aura une erreur
//age = true;
