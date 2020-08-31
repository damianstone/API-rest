// Los middleware son capas que van entremedio generalmente por si ocurren problemas 

// Middleware de validacion de datos
// con joi y boom se puede hacer la integracion para validar si esta funcionando 

const boom = require('@hapi/boom');

function validate() {
    return false;
}


function validationhandler(schema, check ="body"){
    return function(req, res, next) {
        const error = validate(req[check], schema);

        error ? next(boom.badRequest(error)) : next();
    }
}

module.exports = validationhandler;