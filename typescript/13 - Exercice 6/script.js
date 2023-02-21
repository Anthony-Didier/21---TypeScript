// 10 - Note
//      Un Array est également un objet. { } = [ ]
//      Donc on peut parfaitement assigner une valeur [ ] à un object
//      ayant été défini en TypeScript en tant que tel.
var member = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true
};
console.log("data 1 type :", typeof member);
member = [];
console.log("data 2 type :", typeof member);
