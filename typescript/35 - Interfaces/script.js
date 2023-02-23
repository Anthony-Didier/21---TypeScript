var Mother = /** @class */ (function () {
    function Mother(n, e) {
        this.name = n;
        this.eyes = e;
    }
    Mother.prototype.speak = function () {
        console.log("Je me présente, je m'appelle " + this.name);
    };
    return Mother;
}());
var rhea = new Mother("Rhea", 2);
console.log(rhea);
rhea.speak();
var helene;
helene = {
    name: "Hélène",
    eyes: 2,
    speak: function (a) {
        return a + " " + this.name;
    }
};
console.log(helene);
var talkingPerson = function (a, b) {
    return a.speak(b);
};
var result = talkingPerson(helene, "Je m'appelle");
console.log(result);
var cyclope = {
    name: "Cyclope",
    eyes: 1,
    speak: function (a) {
        return a + " " + this.name;
    }
};
console.log(cyclope);
cyclope.name = "Méduse";
// cyclope.eyes = 2 // Modification impossible car eyes (du type Person) est en readonly
console.log(cyclope);
