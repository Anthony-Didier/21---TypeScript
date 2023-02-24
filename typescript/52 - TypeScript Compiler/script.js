/*
Compiler les fichiers :
  tsc file.ts
Compiler les fichiers en changeant les noms
  tsc file.ts --out output-file.js     (tsc -help)
Compiler les fichiers automatiquement après validation
  tsc file.ts --watch ou tsc file.ts -w

Au lieu de préciser les paramètre lors de la compilation, on peut les définir dans un fichier séparé qui va
gérer tout cela automatiquement pour nous.
*/
console.log("Hello World");
