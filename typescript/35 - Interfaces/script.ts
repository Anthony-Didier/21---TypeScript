class Mother {
  name: string;
  eyes: number;

  constructor(n: string, e: number) {
    this.name = n;
    this.eyes = e;
  }

  speak() {
    console.log("Je me présente, je m'appelle " + this.name);
  }
}

let rhea = new Mother("Rhea", 2);
console.log(rhea);
rhea.speak();

interface Person {
  name: string;
  readonly eyes: number;
  speak(a: string): string; // type: string + return string
}

let helene: Person;

helene = {
  name: "Hélène",
  eyes: 2,
  speak(a: string): string {
    return a + " " + this.name;
  }
};

console.log(helene);

const talkingPerson = (a: Person, b: string) => {
  return a.speak(b);
};

const result = talkingPerson(helene, "Je m'appelle");
console.log(result);

let cyclope: Person = {
  name: "Cyclope",
  eyes: 1,
  speak(a: string): string {
    return a + " " + this.name;
  }
};

console.log(cyclope);

cyclope.name = "Méduse";
// cyclope.eyes = 2 // Modification impossible car eyes (du type Person) est en readonly

console.log(cyclope);
