abstract class Person {
  constructor(public name: string) {}

  walk() {
    console.log("Je marche");
  }

  abstract updateName(name: string): void;
}

// const person1 = new Person("Toto"); // Error // impossible de créer un objet à partir d'une classe abstraite
// person1.walk();

class Child extends Person {
  // La classe Child hérite de la classe abstraite Person
  // Elle est donc obligée d'avoir la méthode abstraite updateName()
  updateName(name: string) {
    this.name = name;
    // La méthode est avant tout une méthode de la classe abstraite Person
    // Elle est de type void (= elle ne retourne rien)
    // Donc on n'a pas à mettre de return ici on peut directement un console.log
    console.log(this.name);
  }
}

let mario = new Child("Mario");
mario.updateName("Spirou");
mario.walk();
