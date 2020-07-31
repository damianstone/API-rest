const os = require('os');

//console.log('CPU info: ', os.cpus());
//console.log('IP Adress: ', os.networkInterfaces().en0.map( i => i.address));
console.log('free memory', os.freemem()); // => en bytes
console.log('os type', os.type());
console.log('sp version', os.release());
console.log('user info', os.userInfo());














