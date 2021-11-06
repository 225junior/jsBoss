class users {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }

    //grace au mot clé get, on peut utilisater fullName comme une proprieter
    // fullName devient un getter
    get fullName() {
        return this.firstName+' '+this.lastName
    }
}

let user = new users('Albert', 'Fulbert')

console.log(user.fullName)