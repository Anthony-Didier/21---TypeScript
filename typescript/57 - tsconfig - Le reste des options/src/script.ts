let number: number = Math.random();
const body: HTMLElement = document.body;
const firstName: HTMLInputElement = document.querySelector(
  "#firstName"
) as HTMLInputElement;
console.log(number);
console.log(body);
console.log(firstName);
console.log("Hello World"); // This is a comment

// function gift(arg) { // erreur si l'option "noImplicitAny" du fichier tsconfig.json est activée
//   return arg + 3;
// }
