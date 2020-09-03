const express = require('express');
const MoviesService = require('../services/movies');

const {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
} = require('../utils/schema/movies');

const validationhandler = require('../utils/middleware/validationhandler');

function moviesApi(app){
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService


    router.get('/', async function(req, res, next){
        const { tags } = req.query; // => query es cuando se pone en el signo de pregunta
        try {
            const movies = await moviesService.getMovies({ tags })
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });

        }catch(err){
            next(err);
        }
    });

    router.get('/:movieId', validationhandler({ movieId: movieIdSchema}, 'params'), async function(req, res, next){
        const { movieId } = req.params; // => parametros es cuando estan establecidos en la url 
        try {
            const movies = await moviesService.getMovie({ movieId })
            res.status(200).json({
                data: movies,
                message: 'movies retrieved'
            });

        }catch(err){
            next(err);
        }
    });

    router.post('/', validationhandler(createMovieSchema), async function(req, res, next){
        const { body: movie } = req; // => en este caso los datos provienen del cuerpo en JSON (ver postman)
        try {
            const createMovieId = await moviesService.createMovie({ movie })
            res.status(201).json({
                data: createMovieId,
                message: 'movie created'
            });

        }catch(err){
            next(err);
        }
    });

    router.put('/:movieId', validationhandler({ movieId: movieIdSchema}, 'params'), validationhandler(updateMovieSchema), async function(req, res, next){
        const { movieId } = req.params; // => en este caso tambien los datos provenien direct. de la URL
        const { body: movie } = req;
        try {
            const updatedMovieId = await moviesService.updatedMovie({ 
                movieId,
                movie
            });
            res.status(200).json({
                data: updatedMovieId,
                message: 'movies updated'
            });

        }catch(err){
            next(err);
        }
    });

    router.delete('/:movieId', validationhandler({ movieId: movieIdSchema}, 'params'), async function(req, res, next){
        const { movieId } = req.params;
        try {
            const deleteMovieId = await moviesService.deleteMovie({ movieId });
            res.status(200).json({
                data: deleteMovieId,
                message: 'movie deleted'
            });

        }catch(err){
            next(err);
        }
    });
}

module.exports = moviesApi;











