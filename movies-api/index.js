const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

moviesApi(app);


// http://localhost:3000/2000 => para ver el resultado

app.listen(config.port, function(){
    // eslint-disable-next-line no-console
    console.log('listening http://localhost:' + config.port);
});


