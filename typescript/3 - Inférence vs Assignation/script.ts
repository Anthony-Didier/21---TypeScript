// Type inférence

let firstName;
firstName = true;
firstName = "Red";
firstName = 10;

// String
let lastName = "Dupont";

// Number
let age = 20;

// Boolean
let isLogging = true;

lastName = "Dora";
age = 25;
isLogging = false;

/*
// Les types des variables lastName, age et isLogging ont été verrouillés ci-dessus, 
// il est donc impossible de leur mettre une valeur d'un autre type
lastName = 20;
age = true;
isLogging = "fvgfcgf";
*/

// Type assignation

let alien: string = "Roger";

/*
// Impossible de lui mettre une valeur d'un autre type car le type string de cette variable a été assigné ci-dessus
alien = true;
*/

let width: number;
width = 20;

/*
// Impossible de lui mettre une valeur d'un autre type car le type number de cette variable a été assigné ci-dessus
width = "hello";
*/

/*
const sum = (val1, val2) => {
    return val1 + val2
}

sum("toto", 15);
// va retourner "Nan" (= Not a number) car "toto" n'est pas de type number donc le calcul ne se fera pas
*/

const sum = (val1: number, val2: number) => {
    return val1 + val2
}

/*
// Autre possibilité :
const sum = (val1, val2) => {
    if (typeof val1 === 'number' && typeof val2 === 'number') {
        return val1 + val2
    } else {
        throw new Error("Impossible de calculer")
    }
}
*/

sum(20, 15);