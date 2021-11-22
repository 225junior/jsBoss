// ID
// UserName: "leon",
// Email: "damas@leon.com",
// FullName: "Leon Gontrant Damas",
// AccessLevel: "Administrateur",
const user = [
    {
      ID: 1,
      UserName: "leon",
      Email: "damas@leon.com",
      FullName: "Leon Gontrant Damas",
      AccessLevel: "Administrateur",
    },
    {
      ID: 4,
      UserName: "bertrand",
      Email: "bertrandlejardinier@yahoo.fr",
      FullName: "Bertrand le Jardinier",
      AccessLevel: "Editeur",
    },
    {
      ID: 5,
      UserName: "latartine",
      Email: "latartinevero@inges.ci",
      FullName: "Latartine Véronique",
      AccessLevel: "Editeur",
    },
    {
      ID: 6,
      UserName: "junior",
      Email: "brindoujunior@gmail.com",
      FullName: "Brindou Junior",
      AccessLevel: "Administrateur",
    },
    {
      ID: 12,
      UserName: "ete",
      Email: "dodochou1@yahoo.fr",
      FullName: "Eté Mathurin",
      AccessLevel: "Administrateur",
    },
    {
      ID: 13,
      UserName: "losseni",
      Email: "coulibalylosseni@inges.ci",
      FullName: "Coulibaly Losseni",
      AccessLevel: "Administrateur",
    },
    {
      ID: 14,
      UserName: "damien",
      Email: "kaddamien@yahoo.fr",
      FullName: "Kakpo Damien",
      AccessLevel: "Lecture",
    },
    {
      ID: 15,
      UserName: "kone",
      Email: "kone@moussa.ci",
      FullName: "Konaré Moussa",
      AccessLevel: "Editeur",
    },
    {
      ID: 16,
      UserName: "zokou",
      Email: "zokou@ci",
      FullName: "Zokou Dagobert",
      AccessLevel: "Editeur",
    },
    {
      ID: 22,
      UserName: "hamidou",
      Email: "hamidou@sangare.ci",
      FullName: "Hamidou Sangaré",
      AccessLevel: "Editeur",
    },
    {
      ID: 23,
      UserName: "dirigeon",
      Email: "delagloire@gmail.com",
      FullName: "Dirigeon de la gloire",
      AccessLevel: "Administrateur",
    },
    {
      ID: 24,
      UserName: "pagny",
      Email: "florent@pagny.com",
      FullName: "Florent Pagny",
      AccessLevel: "Editeur",
    },
    {
      ID: 25,
      UserName: "koudougnon",
      Email: "duabli@doudou.com",
      FullName: "Zobi Zobel",
      AccessLevel: "Editeur",
    },
  ];


  const sortByPosition = obj => {
    const order = [], res = {};
    Object.keys(obj).forEach(key => {
       return order[obj[key]['AccessLevel'] - 1] = key;
    });
    order.forEach(key => {
       res[key] = user[key];
    });
    return res;
 }
 
 console.log(sortByPosition(obj));
const tt = user.filter((utilisateur) => utilisateur.FullName.toLowerCase()
.includes(str.toLowerCase()));

console.log(tt)