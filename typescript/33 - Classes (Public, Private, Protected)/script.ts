// Public (accessible à l’extérieur) (par défaut)
// Private (accessible seulement dans la classe)
// Protected (comme private mais en plus accessible dans les classes héritées)
class Mother {
  // public name: string;
  // private hair: string;
  // protected eyes: number;

  // On peut définir les valeurs private directement dans le constructor
  constructor(
    public name: string,
    private hair: string,
    protected eyes: number
  ) {
    // this.name = n;
    // this.hair = h;
    // this.eyes = e;
  }

  private speak() {
    console.log(`Je suis ${this.name} et j'ai les cheveux ${this.hair}.`);
  }

  // getter
  // hair étant private il faut utiliser un getter pour pouvoir accéder à cette valeur en dehors de la classe Mother
  getHair() {
    return this.hair;
  }

  // setter
  // hair étant private il faut utiliser un setter pour pouvoir modifier cette valeur en dehors de la classe Mother
  setHairColor(newColor: string) {
    this.hair = newColor;
  }
}

class Children extends Mother {
  getData() {
    /*
    Public : OK
    Private : Mother (non accessible)
    Protected : OK
    */
    return this.eyes;
  }
}

const person1 = new Mother("Rhea", "marron", 2); // type Mother
console.log(person1.name); // Rhea
person1.setHairColor("red"); // la valeur de "hair" a bien été modifiée
console.log(person1.getHair()); // red
console.log(person1);

const person2 = new Children("Déméter", "black", 2);
console.log(person2.getData()); // 2
