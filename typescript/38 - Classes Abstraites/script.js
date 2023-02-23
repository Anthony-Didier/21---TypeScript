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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.walk = function () {
        console.log("Je marche");
    };
    return Person;
}());
// const person1 = new Person("Toto"); // Error // impossible de créer un objet à partir d'une classe abstraite
// person1.walk();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // La classe Child hérite de la classe abstraite Person
    // Elle est donc obligée d'avoir la méthode abstraite updateName()
    Child.prototype.updateName = function (name) {
        this.name = name;
        // La méthode est avant tout une méthode de la classe abstraite Person
        // Elle est de type void (= elle ne retourne rien)
        // Donc on n'a pas à mettre de return ici on peut directement un console.log
        console.log(this.name);
    };
    return Child;
}(Person));
var mario = new Child("Mario");
mario.updateName("Spirou");
mario.walk();
