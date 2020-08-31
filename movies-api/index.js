const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const {
    logErrors,
    wrapErrors,
    errorHandler
} = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// BODY PARSER
app.use(express.json());

// ROUTES
moviesApi(app);
// catch error 404
app.use(notFoundHandler);

//MIDDLEWARE - ERRORES
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


// http://localhost:3000/2000 => para ver el resultado

app.listen(config.port, function(){
    // eslint-disable-next-line no-console
    console.log('listening http://localhost:' + config.port);
});


