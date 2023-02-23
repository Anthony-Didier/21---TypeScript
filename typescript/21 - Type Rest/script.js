var colors1 = function () {
    console.log(arguments);
};
// colors1("Green", "Red", "Orange"); // 0 arguments attendus alors que l'on en a mis 3 // TypeScript Error - JavaScript OK
var colors2 = function (arg1, arg2, arg3) {
    console.log(arguments);
};
colors2("Green", "Red", "Orange"); // OK
var colors3 = function (arg1, arg2, arg3, arg4) {
    console.log(typeof arguments); // object
    console.log(arguments.length); // 3
    for (var i = 0; i < arguments.length; i++) {
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
var divColors = document.getElementById("colors");
// Utilisation du type Rest
var colors4 = function (arg1) {
    var restOfColors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfColors[_i - 1] = arguments[_i];
    }
    console.log(restOfColors);
    console.log(restOfColors.length); // 3
    var h1 = document.createElement("h1");
    h1.innerHTML = "Title: ".concat(arg1);
    divColors === null || divColors === void 0 ? void 0 : divColors.appendChild(h1);
    var ul = document.createElement("ul");
    for (var i in restOfColors) {
        var li = document.createElement("li");
        li.innerHTML = restOfColors[i];
        ul.appendChild(li);
    }
    divColors === null || divColors === void 0 ? void 0 : divColors.appendChild(ul);
};
colors4("List 1 :", "Green", "Red", "Orange");
colors4("List 2 :", "Blue", "Black", "Pink");
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName;
function sum(sum1, sum2) {
    return sum1 + sum2;
}
function sumOK(sum1) {
    var sum2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sum2[_i - 1] = arguments[_i];
    }
    return sum1 + sum2;
}
// buildNameFun = sum; // TypeScript Error // Les arguments de buildNameFun sont de type string alors que ceux de la fonction sum sont de type number
buildNameFun = sumOK; // TypeScript OK
