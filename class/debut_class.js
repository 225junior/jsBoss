const x = function(){

}

const y = class {

}

// function Hero(name, level){
//     this.name = name;
//     this.level = level
// }

class Hero
{
    constructor(name, level)
    {
        this.name = name;
        this.level = level;
    }
}


console.log(new Hero('Albert', 15))

const constructeurFromFunction = new x(); 
const constructeurFromClass = new y()
console.log(constructeurFromFunction)
console.log(constructeurFromClass)
console.log(Object.getPrototypeOf(y));