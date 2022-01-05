/**
 * Dans ce programme je transforme la chaine de caratere a en un tableu d'objet JSON.
 * Je fais une recherche sur le tableau et je retourne le resultat
 */
a = "[{\"Type\":\"Normal\",\"Value\":10},{\"Type\":\"Urgent\",\"Value\":7},{\"Type\":\"Très Urgent\",\"Value\":3},{\"Type\":\"Dans l'immédiat\",\"Value\":1}]";

b = JSON.parse(a);

console.log('All: ',b);


const typeDelaisFound = b.find(item => item.Type == 'Normal');

console.log('Recherche des Normal: ', typeDelaisFound);