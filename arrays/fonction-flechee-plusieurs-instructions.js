eleve =
[
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

const str = 'a';
const age = 16;
const arr = eleve.concat();
eleve.pop();
console.log(eleve.filter((e) => e.Nom.toLowerCase()
.includes(str.toLowerCase()) || e.age == age));
