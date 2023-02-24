/*
Le Generic Utility Type "NonNullable" nécessite un seul paramètre "Type" qui doit être
un "Union Type" et permet de construire un nouveau type en excluant les types
"NULL" et "UNDEFINED".

En gros, c'est un type qui interdit les types « NULL » et « UNDEFINED ».
*/
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.paint = function (color) {
        console.log(color);
    };
    return Car;
}());
var ford = new Car();
ford.paint("Green"); // OK
// ford.paint(undefined); // Error // la propriété "color" de la classe Car est NonNullable
