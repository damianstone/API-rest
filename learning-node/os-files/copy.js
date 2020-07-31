const fs = require('fs');

/* Copiar archivos 
* primer param => nombre del archivo que quiero copiar 
* segundo param => nuevo del nuevo archivo
* tercer param => callback cm siempre 
*/
fs.copyFile('maze.txt', 'juice.txt', err => {
    if(err){
        console.log(err)
    }

    console.log('copy file');
})














