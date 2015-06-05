import ArrayST = require('../lib/search');

var st1 = new ArrayST<number, string>();
st1.put(1, 'test1');
st1.put(2, 'test2');

console.log(st1.get(1));