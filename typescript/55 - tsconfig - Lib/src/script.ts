let number: number = Math.random(); // Math.random() sert à donner un nombre aléatoire
const body: HTMLElement = document.body;
const firstName: HTMLInputElement = document.querySelector(
  "#firstName"
) as HTMLInputElement;
// Autre méthode
// const firstName: HTMLInputElement= document.getElementById("firstName")
console.log(number);
console.log(body);
console.log(firstName);
