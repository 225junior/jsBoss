 a = "[{\"Type\":\"Normal\",\"Value\":10},{\"Type\":\"Urgent\",\"Value\":7},{\"Type\":\"Très Urgent\",\"Value\":3},{\"Type\":\"Dans l'immédiat\",\"Value\":1}]";

b = JSON.parse(a);

console.log(b);


const typeDelaisFound = b.find(item => item.Type == 'Normal');

console.log(typeDelaisFound);