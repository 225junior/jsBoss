// permet de fusionner plusieurs tableau

a = [1,2,3,4]
b = [5,6,7,8,9]
c = [10,11,12,13]
console.log(a.concat(b))
// [1, 2, 3, 4, 5,6, 7, 8, 9]


console.log(a.concat(b, c))
// [1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13]

// concat permet de creer une copie de tableau
tabCopy  = c.concat();

// index contien la position du nouvel element a ajouter mais le start est 1
index = tabCopy.push(14)

console.log(tabCopy)