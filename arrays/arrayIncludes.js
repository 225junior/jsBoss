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
let tfind = [];

for (let index = 0; index < existant.length; index++) {
    tabName.push(existant[index].split(":")[0]);
}

for (let index = 0; index < nouveau.length; index++) {
    for (let key = 0; key < tabName.length; key++) {
        if (tabName[key] == nouveau[index]) {
            tfind.push(nouveau[index]);
        }
    }
}

console.log('Nouvau',nouveau);
// console.log(tabName);
console.log('Find',tfind);

let difference = nouveau
    .filter((x) => !tfind.includes(x));
    // .concat(tfind.filter((x) => !tfind.includes(x)));

console.log('Diference entre nouveau et tFind',difference);
