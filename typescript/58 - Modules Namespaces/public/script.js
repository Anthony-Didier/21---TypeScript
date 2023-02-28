"use strict";
/// <reference path="PersonInterface.ts" />
var App;
(function (App) {
    class Person {
        constructor(n, a) {
            this.name = n;
            this.age = a;
        }
    }
    const person = new Person("Homer", 43);
    console.log(person);
})(App || (App = {}));
