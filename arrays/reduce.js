const tab = [1,2,3,4];

console.log(tab.reduce((prev,next)=>prev+next))

//(prev,next) veut dire function(prev, next)  une fonction
//anonyme qui prend en parametre prev et next
// => represent le contenu de la function
// la function reduce passe dans prev la valeur precedante et dans 
// next la valeure suivante




let init = 0;
console.log(eleves.reduce((prev,next)=>prev+next.age,init))