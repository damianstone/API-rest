const MongoLib = require('../lib/mongo');


class MoviesService {
    constructor() {
        this.collection = 'movies';
        this.mongoDB = new MongoLib();
    }
 
    async getMovies({ tags }) {
        const query = tags && { tags: {$in: tags }};
        const movies = await this.mongoDB.getAll(this.collection, query);
        return movies || [];
    } // => devuelve toda la coleccion de peliculas 

    async getMovie({ movieId }) {
        const movie = await this.mongoDB.get(this.collection, movieId);
        return movie || {};
    } // => devuelve solo una pelicula 

    async createMovie({ movie }) {
        const createMovieId = await this.mongoDB.create(this.collection, movie);
        return createMovieId;
    }

    async updatedMovie({ movieId, movie } = {}) {
        const updatedMovie = await this.mongoDB.update(this.collection, movieId, movie)
        return updatedMovie;
    }

    async deleteMovie({ movieId }) {
        const deleteMovie = await this.mongoDB.delete(this.collection, movieId);
        return deleteMovie;
    }
}

module.exports = MoviesService;

