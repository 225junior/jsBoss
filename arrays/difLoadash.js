var _ = require('lodash');

_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
// → { 'a': 1, 'b': 2 }
_.partition([1, 2, 3, 4], n => n % 2);
// → [[1, 3], [2, 4]]

a = ["skla", "losseni", "brindou", "ete"]

b = ["skla", "losseni"]

console.log(_.difference(a,b))