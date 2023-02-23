class Person {
  constructor(private name: string) {}

  talk() {
    console.log("Je suis une personne");
  }
}

const person1 = new Person("Toto");
person1.talk();

new Person("Toto2").talk();

Person.prototype.talk(); // Je suis une personne

console.log(Math.PI);

// Static
class Person2 {
  static readonly age: number = 30;

  constructor(private name: string) {}

  walk() {
    console.log("Je marche");
  }

  static talk() {
    console.log("Je suis une personne " + this.age);
    // this.walk(); // la méthode walk n'existe pas dans le type Person2
  }
}

const person2 = new Person2("Toto");
// console.log(person2.age); // Error // "age" est une propriété static du type Person2
console.log(Person2.age);
Person2.talk();
