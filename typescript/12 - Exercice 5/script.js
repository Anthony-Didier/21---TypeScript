// 9 - Créer une variable "member" qui ne peut être qu'un objet
//      - Laisser TypeScript définir le type objet via inférence tout
//      en indiquant les propriétés suivantes :
//          firstName: "Dupont"
//          age: 20
//          isLoggedIn: true
//      - Afficher la valeur age via console.log
var member = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true
};
// En déclarant l'objet member en ayant au préalable précisé les types des propriétés de l'objet
// on peut maintenant utiliser les propriétés de l'objet
console.log(member.age);
