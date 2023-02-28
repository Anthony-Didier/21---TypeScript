"use strict";
var App;
(function (App) {
    class Person {
        constructor(n, a) {
            this.name = n;
            this.age = a;
        }
    }
    App.Person = Person;
})(App || (App = {}));
/// <reference path="PersonInterface.ts" />
var App;
(function (App) {
    const person = new App.Person("Homer", 43);
    console.log(person);
})(App || (App = {}));
