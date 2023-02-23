let colors1 = function () {
  console.log(arguments);
};

// colors1("Green", "Red", "Orange"); // 0 arguments attendus alors que l'on en a mis 3 // TypeScript Error - JavaScript OK

let colors2 = function (arg1: string, arg2: string, arg3: string) {
  console.log(arguments);
};

colors2("Green", "Red", "Orange"); // OK

let colors3 = function (
  arg1: string,
  arg2: string,
  arg3: string,
  arg4: string
) {
  console.log(typeof arguments); // object
  console.log(arguments.length); // 3

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }

  // Autre manière
  /*
  for (let i in arguments) {
    console.log(arguments[i]);
  }
  */
};

colors3("List 1 :", "Green", "Red", "Orange"); // OK
colors3("List 2 :", "Blue", "Black", "Pink"); // OK

const divColors = document.getElementById("colors");

// Utilisation du type Rest
let colors4 = function (arg1: string, ...restOfColors: string[]) {
  console.log(restOfColors);
  console.log(restOfColors.length); // 3

  const h1 = document.createElement("h1");
  h1.innerHTML = `Title: ${arg1}`;
  divColors?.appendChild(h1);

  const ul = document.createElement("ul");

  for (let i in restOfColors) {
    let li = document.createElement("li");
    li.innerHTML = restOfColors[i];
    ul.appendChild(li);
  }

  divColors?.appendChild(ul);
};

colors4("List 1 :", "Green", "Red", "Orange");
colors4("List 2 :", "Blue", "Black", "Pink");

function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

function sum(sum1: number, sum2: number) {
  return sum1 + sum2;
}

function sumOK(sum1: string, ...sum2: string[]) {
  return sum1 + sum2;
}

// buildNameFun = sum; // TypeScript Error // Les arguments de buildNameFun sont de type string alors que ceux de la fonction sum sont de type number
buildNameFun = sumOK; // TypeScript OK
