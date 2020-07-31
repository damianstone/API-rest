const fs = require('fs');

fs.mkdir('backend/os-files/succionamela', { recursive: true }, (err) => {
    if (err) {
        return console.log(err);
    }
});