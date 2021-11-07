const tab = [1,2,3,4];

console.log(tab.reduce((prev,next)=>prev+next))

//(prev,next) veut dire function(prev, next)  une fonction
//anonyme qui prend en parametre prev et next
// => represent le contenu de la function
// la function reduce passe dans prev la valeur precedante et dans 
// next la valeure suivante

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


let init = 0;
console.log(eleve.reduce((prev,next)=>prev+next.age,init))