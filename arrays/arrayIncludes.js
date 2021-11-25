const existant = [
    "tontonmath:Lecture",
    "baba:Lecture",
    "lossen:Lecture",
    "dagobert:Lecture",
    "yao:Lecture",
    "leblanc:Lecture",
    "junior:Lecture",
];

let nouveau = ["Albert", "lossen", "Monpieux", "leblanc", "tontonmath"];

let tabName = [];
let Fnouveau = [];

for (let index = 0; index < existant.length; index++) {
    tabName.push(existant[index].split(":")[0]);
}

for (let index = 0; index < nouveau.length; index++) {
    for (let key = 0; key < tabName.length; key++) {
        if (tabName[key] == nouveau[index]) {
            Fnouveau.push(nouveau[index]);
        }
    }
}

console.log(nouveau);
console.log(tabName);
console.log(Fnouveau);

let difference = nouveau
    .filter((x) => !Fnouveau.includes(x))
    .concat(Fnouveau.filter((x) => !Fnouveau.includes(x)));

console.log(difference);
