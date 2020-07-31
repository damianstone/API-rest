// To transform the string to camelCase challenge 

const {Transform} = require('stream');

String.prototype.toCamelCase = function() {
    return this
        .replace(/\s(.)/g, input => input.toUpperCase())
        .replace(/ /gi, '')
        .replace(/^(.)/, input => input.toLowerCase());
  };
  

const transformToCamelCase = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toCamelCase());
        callback();
    }
})

process.stdin.pipe(transformToCamelCase).pipe(process.stdout);
