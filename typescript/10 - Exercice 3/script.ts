// 7 - Créer une variable "member" qui ne peut être qu'un objet :
//      - Via l’indicateur de valeur "object", sans définir le contenu
//      de l'objet. Ensuite, avec les propriétés suivantes :
//          firstName: "Dupont"
//          age: 20
//          isLoggedIn: true
//      - Afficher la valeur age via console.log
let member: object = {
  firstName: "Dupont",
  age: 20,
  isLoggedIn: true
};

// En déclarant l'objet member de cette manière
// on ne peut pas utiliser les propriétés de l'objet
//console.log(member.age);
