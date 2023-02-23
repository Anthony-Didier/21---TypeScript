var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Public (accessible à l’extérieur) (par défaut)
// Private (accessible seulement dans la classe)
// Protected (comme private mais en plus accessible dans les classes héritées)
var Mother = /** @class */ (function () {
    // public name: string;
    // private hair: string;
    // protected eyes: number;
    // On peut définir les valeurs private directement dans le constructor
    function Mother(name, hair, eyes) {
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
        // this.name = n;
        // this.hair = h;
        // this.eyes = e;
    }
    Mother.prototype.speak = function () {
        console.log("Je suis ".concat(this.name, " et j'ai les cheveux ").concat(this.hair, "."));
    };
    // getter
    // hair étant private il faut utiliser un getter pour pouvoir accéder à cette valeur en dehors de la classe Mother
    Mother.prototype.getHair = function () {
        return this.hair;
    };
    // setter
    // hair étant private il faut utiliser un setter pour pouvoir modifier cette valeur en dehors de la classe Mother
    Mother.prototype.setHairColor = function (newColor) {
        this.hair = newColor;
    };
    return Mother;
}());
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Children.prototype.getData = function () {
        /*
        Public : OK
        Private : Mother (non accessible)
        Protected : OK
        */
        return this.eyes;
    };
    return Children;
}(Mother));
var person1 = new Mother("Rhea", "marron", 2); // type Mother
console.log(person1.name); // Rhea
person1.setHairColor("red"); // la valeur de "hair" a bien été modifiée
console.log(person1.getHair()); // red
console.log(person1);
var person2 = new Children("Déméter", "black", 2);
console.log(person2.getData()); // 2
