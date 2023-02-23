// Readonly (ne peut être modifié que lors de l'instanciation de la propriété ou via le constructor)
// 1ère méthode (Valeur affectée lors de l'instanciation de la propriété)
var Car = /** @class */ (function () {
    function Car() {
        this.color = "Red";
        this.gears = 4;
        // color est en readonly, elle ne peut pas être modifiée via un setter
        // setColor(color: string) {
        //   this.color = color;
        // }
    }
    return Car;
}());
var ford = new Car();
console.log(ford);
// let greenColor = (ford.color = "Green"); // color est en readonly, elle ne peut pas être modifiée en dehors de la classe
// console.log(greenColor);
// 2ème méthode (Modification via le constructor)
var Car2 = /** @class */ (function () {
    function Car2(c, g) {
        this.gears = 4;
        this.color = c;
        this.gears = g;
    }
    return Car2;
}());
var ford2 = new Car2("White", 5);
console.log(ford2);
// let newColor = (ford.color = "Black"); // color est en readonly, elle ne peut pas être modifiée en dehors de la classe
