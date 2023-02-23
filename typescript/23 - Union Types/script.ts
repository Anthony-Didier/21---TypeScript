// Union Types
let firstName: string | number | boolean = "Roger";
firstName = 200;
firstName = true;

let names: (string | number | boolean)[] = [];
names = ["Test", 400, true];

function sum(arg1: number, arg2: number) {
  return arg1 + arg2;
}

console.log(sum(20, 40)); // 60
// console.log(sum("Hello", 40)); // Hello40 // TypeScript Error - JavaScript OK

function concatenate(arg1: number | string, arg2: number | string) {
  let result;

  if (typeof arg1 === "number" && typeof arg2 === "number") {
    result = arg1 + arg2; // (number)
    // arg1: number
    // arg2: number
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    result = arg1 + arg2; // (string)
    // arg1: string
    // arg2: string
  } else {
    result = arg1.toString() + arg2.toString(); // (string)
  }

  return result;
}

console.log(concatenate(10, 20)); // 30 (number)
console.log(concatenate("Hello", 20)); // Hello20
console.log(concatenate(20, "Hello")); // 20Hello
console.log(concatenate("Hello", "World")); // HelloWorld
