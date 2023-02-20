let pseudo: string = "Superman";
let total: number = 200;
let isLoading: boolean = false;

// IntelliSense - VS Code

console.log(pseudo.length);
console.log(typeof total);

let totalString: string = total.toString();
console.log("total est maintenant de type :", typeof totalString);

let welcomeMsg: string = `Bienvenue ${pseudo} !
Vous avez un total de ${total} points.`

console.log(welcomeMsg);

// IntelliSense permet de faciliter le code
// Par exemple lorsque l'on a entré un "." juste après "pseudo" (ligne 7), IntelliSense a proposé plusieurs options comme :
// replace, split, length...
// Dans notre cas, nous avons choisi length pour que la longueur de la chaîne de caractères de "pseudo" soit calculée