const arr = ['tontonmath:Lecture', 'tontonmath:Editeur', 'baba:Lecture', 'lossen:Lecture', 'dagobert:Lecture', 'yao:Lecture', 'tontonmath:Administrateur', 'leblanc:Lecture', 'junior:Lecture', 'Ali:Administrateur']

let tabName = [];

for (let index = 0; index < arr.length; index++) {
    tabName.push(arr[index].split(':')[0]);
}

console.log(tabName)