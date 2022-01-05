/**
 * Dans ce programme je retourne un tableau ne contenant que les nom séparés de la partie droite des ":" y compris eux.
 * ['tontonmath', 'tontonmath','baba','lossen','dagobert','yao','tontonmath','leblanc','junior','Ali']
 */
const arr = ['tontonmath:Lecture', 'tontonmath:Editeur', 'baba:Lecture', 'lossen:Lecture', 'dagobert:Lecture', 'yao:Lecture', 'tontonmath:Administrateur', 'leblanc:Lecture', 'junior:Lecture', 'Ali:Administrateur']

let tabName = [];

for (let index = 0; index < arr.length; index++) {
    tabName.push(arr[index].split(':')[0]);
}

console.log(tabName)