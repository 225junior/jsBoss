class Persons {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }

    get fullName() {
        return this.firstName+' '+this.lastName
    }
}


// extends pour dire qu'il herite du parent
class Users extends Persons {
    constructor(firstName, lastName, email){
        // super pour dire que le contenu du  constructeur est celui recupéré chez le parent
        super(firstName, lastName);
        this.email = email
    }
}

let user = new Persons("Alibaba", "Tonio")

//la class enfant
let user2 = new Users("franck", "landry","franck@gmail.com") 
console.log(user.fullName)

//l'enfant peu meme appeler les methodes du parent
console.log(user2.fullName)

console.log(user2 instanceof Users);
console.log(user2 instanceof Persons);
console.log(user instanceof Users);
console.log(user instanceof Persons);
