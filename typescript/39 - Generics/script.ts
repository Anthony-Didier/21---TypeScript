let colors = ["red", "blue", "green"]; // (string[])
// Generics
let colors2: Array<string> = []; // (string[])
colors2 = ["red", "blue", "green"]; // OK
// colors2 = ["red", "blue", 200]; // Error // colors2 est une Array qui n'accepte que des chaînes de caractères

function identity(arg: number): number {
  return arg;
}

console.log(identity(200)); // 200

function identity2(arg: any): any {
  return arg;
}

console.log(identity2(200)); // 200
console.log(identity2("Hello")); // Hello
console.log(identity2(true)); // true

function identity3<T>(arg: T): T {
  return arg;
}

let output1 = identity3<string>("Hello"); // string
let output2 = identity3<number>(200); // number
let output3 = identity3<boolean>(false); // boolean
// let output4 = identity3<object>({ title: "Hello World" });
// En mettant le generic <object>, on ne pourra pas utiliser les propriétés à l'intérieur de l'objet
// On laisse donc TypeScript détecter le type via l'inférence
let output4 = identity3({ title: "Hello World" }); // { title: string }

console.log(typeof output1);
console.log(typeof output2);
console.log(typeof output3);
console.log(output4.title);

function identity4<T extends { title: string }>(arg: T): T {
  return arg;
}

let output5 = identity4({ title: "Hello World" }); // { title: string }

console.log(output5.title);

const objOne = { name: "Bart" };
const objTwo = { age: 8 };

function objInArray<N extends { name: string }, A extends { age: number }>(
  n: N,
  a: A
) {
  let data: Array<object> = [];
  data.push(n, a);
  return data;
}

const user = objInArray(objOne, objTwo);
console.log(user); // [{ name: "Bart" }, { age: 8 }]
