const fs = require('fs');

    const file = process.argv[2];

    if (!file) {
        console.log('no pusiste un archivo aweonao');
    }


    const content = fs.readFile(file, function(err, content){
        if (err) {
           return console.log(err);
        }

        const lines = content.toString().split('\n').length; // => saltos de liena
        console.log(lines);
    });

// node sync-files.js maze.txt para correrlo


