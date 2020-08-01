const express = require('express');
const app = express();

const { config } = require('./config/index');


app.get('/', function(req, res){
    res.send('Hello World')
});

app.get('/json', function(req, res){
    res.json({"hello": "world"});
});

// RETO
app.get('/:year', function(req, res){
    const year = parseInt(req.params.year);
    const bisiesto = (year % 4 === 0 && year % 100 !== 0) || year % 400 == 0;
    if (bisiesto) {
        res.send(`El año: ${year} SI es bisiesto`);
    } else {
        res.send(`El año: ${year} NO es bisiesto`)
    }
    res.end();
})

// http://localhost:3000/2000 => para ver el resultado

app.listen(config.port, function(){
    // eslint-disable-next-line no-console
    console.log('listening http://localhost:' + config.port);
});


