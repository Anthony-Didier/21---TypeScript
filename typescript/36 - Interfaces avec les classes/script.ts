interface HumanSounds {
  talk(): string;
}

interface AlienSounds {
  telepathy(): string;
}

class Person implements HumanSounds {
  constructor(readonly name: string, private age: number) {}

  talk() {
    return `Je m'appelle ${this.name}.`;
  }
}

class Alien {
  constructor(readonly name: string, private age: number) {}

  telepathy() {
    return `Je m'appelle ${this.name}. Je suis un ado de ${this.age} ans.`;
  }
}

let homer = new Person("Homer", 43); // Person
let roger = new Alien("Roger", 1500);

console.log(homer.talk());
console.log(roger.telepathy());

let humans: HumanSounds; // Type interface HumanSounds
humans = homer; // OK
// humans = roger; // Error // la méthode talk est absente du type Alien de "roger"

let humanMembers: HumanSounds[];
humanMembers = [];
// humanMembers.push("Toto"); // Error
humanMembers.push(homer); // OK
console.log(humanMembers);

const form = document.getElementById("signupForm") as HTMLFormElement;
const firstName = document.getElementById("firstName") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;
const species = document.getElementById("species") as HTMLSelectElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let humanUser: HumanSounds;
  let alienUser: AlienSounds;

  if (species.value === "human") {
    humanUser = new Person(firstName.value, age.valueAsNumber);
    console.log(humanUser, humanUser.talk());
  } else {
    alienUser = new Alien(firstName.value, age.valueAsNumber);
    console.log(alienUser, alienUser.telepathy());
  }
});
