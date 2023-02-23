const form = document.querySelector("#signupForm") as HTMLFormElement;
console.log(form.children);

const firstName = document.getElementById("firstName") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;
const gender = document.getElementById("gender") as HTMLSelectElement;

// Validation form
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(firstName.value, age.valueAsNumber, gender.value);
});
