const array = [ -1, 6, 4, 9, 3 ]

// ordre decroissant
let sorted = array.sort((a, b) => {  
  return b - a
})
console.log('Ordre Decroissant:',sorted)

sorted = array.sort((a, b) => {
  return a - b
})

console.log('Ordre Croissant:',sorted)