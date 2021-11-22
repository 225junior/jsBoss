eleve = [
  {
    Nom: "Amy garnie",
    age: 7,
  },
  {
    Nom: "Kouamé Fulgence",
    age: 15,
  },
  {
    Nom: "Mariline Monroe",
    age: 16,
  },
  {
    Nom: "Bogui ledja",
    age: 17,
  },
  {
    Nom: "Guessan Paul",
    age: 13,
  },
];

// concat permet de faire une varie copie du tableau
const arr = eleve.concat();

//suprime 3 elements a partir de 1
eleve.splice(1, 3); //le tableau eleve est donc modifié

console.log(arr); // le tableau arr reste intacte,
//cest une vraie copie de eleve
console.log(eleve); // eleve a changé
