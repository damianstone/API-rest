const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('hello world');
}, 'pluto is deprecated. it is not a planet anymore');

helloPluto();





















