var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.talk = function () {
        console.log("Je suis une personne");
    };
    return Person;
}());
var person1 = new Person("Toto");
person1.talk();
new Person("Toto2").talk();
Person.prototype.talk(); // Je suis une personne
console.log(Math.PI);
// Static
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.walk = function () {
        console.log("Je marche");
    };
    Person2.talk = function () {
        console.log("Je suis une personne " + Person2.age);
        // this.walk(); // la méthode walk n'existe pas dans le type Person2
    };
    Person2.age = 30;
    return Person2;
}());
var person2 = new Person2("Toto");
// console.log(person2.age); // Error // "age" est une propriété static du type Person2
console.log(Person2.age);
Person2.talk();
