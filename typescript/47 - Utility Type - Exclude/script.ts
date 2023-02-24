/*
Le Generic Utility Type "Exclude" permet de construire un nouveau Union Type en
excluant des types définis dans un autre Union Type.
*/
type Easing = "ease-in" | "ease-out" | "ease-in-out";

type Animate = Exclude<Easing, "ease-out">;

class UIElement {
  animate(x: number, y: number, easing: Easing) {
    if (easing === "ease-in") {
      console.log("ease-in");
    }
    if (easing === "ease-out") {
      console.log("ease-out");
    }
    if (easing === "ease-in-out") {
      console.log("ease-in-out");
    }
  }
  animate2(x: number, y: number, easing: Animate) {
    if (easing === "ease-in") {
      console.log("ease-in");
    }
    // if (easing === "ease-out") { // Error // "ease-out" a été exclu du type Animate
    //   console.log("ease-out");
    // }
    if (easing === "ease-in-out") {
      console.log("ease-in-out");
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
