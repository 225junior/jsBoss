class users {
    constructor(firstName, lastName){
        console.log('Vous venez de creer un nouvel utilisateur')
        this.firstName = firstName;
        this.lastName = lastName
    }
}

let user = new users('Albert', 'Fulbert')

console.log(user)