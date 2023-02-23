var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.talk = function () {
        return "Je m'appelle ".concat(this.name, ".");
    };
    return Person;
}());
var Alien = /** @class */ (function () {
    function Alien(name, age) {
        this.name = name;
        this.age = age;
    }
    Alien.prototype.telepathy = function () {
        return "Je m'appelle ".concat(this.name, ". Je suis un ado de ").concat(this.age, " ans.");
    };
    return Alien;
}());
var homer = new Person("Homer", 43); // Person
var roger = new Alien("Roger", 1500);
console.log(homer.talk());
console.log(roger.telepathy());
var humans; // Type interface HumanSounds
humans = homer; // OK
// humans = roger; // Error // la méthode talk est absente du type Alien de "roger"
var humanMembers;
humanMembers = [];
// humanMembers.push("Toto"); // Error
humanMembers.push(homer); // OK
console.log(humanMembers);
var form = document.getElementById("signupForm");
var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var species = document.getElementById("species");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var humanUser;
    var alienUser;
    if (species.value === "human") {
        humanUser = new Person(firstName.value, age.valueAsNumber);
        console.log(humanUser, humanUser.talk());
    }
    else {
        alienUser = new Alien(firstName.value, age.valueAsNumber);
        console.log(alienUser, alienUser.telepathy());
    }
});
