class users {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }

    // ces methodes n'ont pas besoin qu'on crée 
    // une nouvelle instance de User pour les utiliser
    // on peut meme ajouter les le mot clé get [static get total]
    // pour ne pas avoir a utiliser la parenthese
    static getTotal(){
        return 5;
    }
   
}

console.log(users.getTotal())