class Mother {
  name: string;
  hair: string;
  eyes: number;

  constructor(n: string, h: string, e: number) {
    this.name = n;
    this.hair = h;
    this.eyes = e;
  }

  speak() {
    console.log(`Je suis ${this.name} et j'ai les cheveux ${this.hair}.`);
  }
}

class Children extends Mother {
  speak() {
    console.log(`I am ${this.name} and I have ${this.hair} hair.`);
  }

  speakMothLang() {
    super.speak();
  }
}

class Random {
  name: string;
  hair: string;
  eyes: number;

  constructor(n: string, h: string, e: number) {
    this.name = n;
    this.hair = h;
    this.eyes = e;
  }
}

const person1 = new Mother("Rhea", "marron", 2); // type Mother
console.log(person1);
person1.speak();

const person2 = new Children("Déméter", "brown", 2); // type Children
console.log(person2);
person2.speak();
person2.speakMothLang();

const person3: Mother = new Children("Déméter", "brown", 2); // type Children
person3.speak();

// const person4: Mother = new Random("Tom", "marron", 2); // Erreur car la méthode speak() du type Mother est absente du type Random
