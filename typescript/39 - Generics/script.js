var colors = ["red", "blue", "green"]; // (string[])
// Generics
var colors2 = []; // (string[])
colors2 = ["red", "blue", "green"]; // OK
// colors2 = ["red", "blue", 200]; // Error // colors2 est une Array qui n'accepte que des chaînes de caractères
function identity(arg) {
    return arg;
}
console.log(identity(200)); // 200
function identity2(arg) {
    return arg;
}
console.log(identity2(200)); // 200
console.log(identity2("Hello")); // Hello
console.log(identity2(true)); // true
function identity3(arg) {
    return arg;
}
var output1 = identity3("Hello"); // string
var output2 = identity3(200); // number
var output3 = identity3(false); // boolean
// let output4 = identity3<object>({ title: "Hello World" });
// En mettant le generic <object>, on ne pourra pas utiliser les propriétés à l'intérieur de l'objet
// On laisse donc TypeScript détecter le type via l'inférence
var output4 = identity3({ title: "Hello World" }); // { title: string }
console.log(typeof output1);
console.log(typeof output2);
console.log(typeof output3);
console.log(output4.title);
function identity4(arg) {
    return arg;
}
var output5 = identity4({ title: "Hello World" }); // { title: string }
console.log(output5.title);
var objOne = { name: "Bart" };
var objTwo = { age: 8 };
function objInArray(n, a) {
    var data = [];
    data.push(n, a);
    return data;
}
var user = objInArray(objOne, objTwo);
console.log(user); // [{ name: "Bart" }, { age: 8 }]
