// %s => String
// %d => numero
// %j => json

console.log('a %s and a %s', 'dog', 'cat'); // => un perrito y un gatito
console.info('hello world');
console.warn('hello error');

// Hcaer pequeños test en nuestro codigo y ver si esta fallando o no
console.assert(42 == '42');
console.assert(42 === '42'); 

console.trace('hello');

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo');










