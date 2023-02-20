var pseudo = "Superman";
var total = 200;
var isLoading = false;
// IntelliSense - VS Code
console.log(pseudo.length);
console.log(typeof total);
var totalString = total.toString();
console.log("total est maintenant de type :", typeof totalString);
var welcomeMsg = "Bienvenue ".concat(pseudo, " !\nVous avez un total de ").concat(total, " points.");
console.log(welcomeMsg);
// IntelliSense permet de faciliter le code
// Par exemple lorsque l'on a entré un "." juste après "pseudo" (ligne 7), IntelliSense a proposé plusieurs options comme :
// replace, split, length...
// Dans notre cas, nous avons choisi length pour que la longueur de la chaîne de caractères de "pseudo" soit calculée
