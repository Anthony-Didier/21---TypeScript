let myName; // type any
console.log(myName); // undefined
myName = null;
console.log(myName); // null

// Null vs Undefined
console.log(null === undefined); // false
console.log(null == undefined); // true

// typeof
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// !
console.log(null); // null
console.log(!null); // true car la valeur existe
console.log(!!null); // false

// return undefined | null
const myFunc = function foo(arg: string): string | null | undefined {
  return arg;
};

// const result = myFunc("Hello");
// if (result != null) {
//   console.log(typeof result); // string
// }

// console.log(null + 200); // TypeScript Error - JavaScript OK
// // Rien + 200 = 200
// const element = document.querySelector("elementFictif");
// console.log(element); // null

// console.log(undefined + 200); // Not a number
// // Inconnu + 200 ?

// const users: any = {};
// console.log(users.age); // undefined car cette valeur n'existe pas

// let value: number; // type number
// console.log(value); // undefined

let value1: undefined; // type undefined
console.log(value1); // undefined

let value2: null = null; // type null
console.log(value2); // undefined

let value3: unknown | any;
value3 = null; // TypeScript Error - JavaScript OK
value3 = undefined; // TypeScript Error - JavaScript OK
