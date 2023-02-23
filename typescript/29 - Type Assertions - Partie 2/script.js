var form = document.querySelector("#signupForm");
console.log(form.children);
var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
// Validation form
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(firstName.value, age.valueAsNumber, gender.value);
});
