// Readonly (ne peut être modifié que lors de l'instanciation de la propriété ou via le constructor)
// 1ère méthode (Valeur affectée lors de l'instanciation de la propriété)
class Car {
  readonly color: string = "Red";
  public gears: number = 4;

  // color est en readonly, elle ne peut pas être modifiée via un setter
  // setColor(color: string) {
  //   this.color = color;
  // }
}

let ford = new Car();
console.log(ford);
// let greenColor = (ford.color = "Green"); // color est en readonly, elle ne peut pas être modifiée en dehors de la classe
// console.log(greenColor);

// 2ème méthode (Modification via le constructor)
class Car2 {
  readonly color: string;
  public gears: number = 4;

  constructor(c: string, g: number) {
    this.color = c;
    this.gears = g;
  }
}

let ford2 = new Car2("White", 5);
console.log(ford2);
// let newColor = (ford.color = "Black"); // color est en readonly, elle ne peut pas être modifiée en dehors de la classe
