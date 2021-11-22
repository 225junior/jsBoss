eleve =
[
    {
        Nom:"Yao jean",
        age : 5,    
    },
    {
        Nom:"Guy Serges",
        age : 10,    
    },
    {
        Nom:"Franck Lambert",
        age : 3,    
    },
    {
        Nom:"Amy garnie",
        age : 7,    
    },
    {
        Nom:"Kouamé Fulgence",
        age: 15
    },
    {
        Nom:"Mariline Monroe",
        age:16
    },
    {
        Nom:"Bogui ledja",
        age:17
    },
    {
        Nom:"Guessan Paul",
        age:13
    },
];


t = ["Kouamé Fulgence","Guessan Paul"]
// a = [1,2,3,4,5,6,7]
arr = [];
console.log(eleve.filter((e) => e.Nom.includes('Bog')));





for (let index = 0; index < t.length; index++) {
    
    arr.push(eleve.filter((e) => e.Nom == t[index] ));
}

// console.log("Sans Flat",arr);
// console.log("Avec Flat",arr.flat());

// console.log(a.filter((n) => n>3 ))