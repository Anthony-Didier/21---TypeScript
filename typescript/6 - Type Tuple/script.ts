let x: [string, number];
x = ["Hello", 20];
// Le tuple x:[string, number] n'autorise que 2 données :
// 1 string et 1 number
// On ne peut donc pas mettre 3 données directement
// mais avec la méthode push c'est possible
//x = ["Hello", 20, "bonjour"];
x.push("Bonjour");
console.log(x);

// La méthode substring efface un caractère d'une donnée de type string
// et ne fonctionne donc pas sur une donnée de type number
console.log(x[0].substring(1));
//console.log(x[1].substring(1));

// Pour transformer une donnée de type number en une donnée de type string
console.log(x[1].toString);
console.log(typeof x[1]);

// Une erreur est signalée lorsque l'on essaye d'utiliser une donnée dans un index (= position dans une array, tuple) qui n'existe pas
//x[3] = "Hello";
//console.log(x[5].toString());

const member: {
  level: [string, number];
} = {
  level: ["admin", 1]
};

// Dans la propriété level, la donnée en 1ère position (= index 0) doit être de type string
// donc la remplacer par une donnée de type number par exemple ne fonctionnera pas
//member.level[0] = 200;
member.level[0] = "moderator";
console.log(member.level);

// Comme nous l'avons vu plus haut :
// Le tuple level: [string, number] n'autorise que 2 données :
// 1 string et 1 number
// On ne peut donc pas mettre 3 données directement
// mais avec la méthode push c'est possible
member.level.push("salut");
console.log(member.level);
