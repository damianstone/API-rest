const joi = require('@hapi/joi');

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const titleShema = joi.string().max(80);
const yearSchema = joi.number().min(1888).max(2077);
const coverSchema = joi.string().uri();
const descriptionSchema = joi.string().max(300);
const durationSchema = joi.number().min(1).max(300);
const contentRatingSchema = joi.number().max(5);
const sourceShema = joi.string().uri();
const tagsSchema = joi.array().items(joi.string().max(50));

const createMovieSchema = {
  title: titleShema.required(),
  year: yearSchema.required(),
  cover: coverSchema.required(),
  description: descriptionSchema.required(),
  duration: durationSchema.required(),
  contentRating: contentRatingSchema.required(),
  source: sourceShema.required(),
  tags: tagsSchema,
};

const updateMovieSchema = {
  title: titleShema,
  year: yearSchema,
  cover: coverSchema,
  description: descriptionSchema,
  duration: durationSchema,
  contentRating: contentRatingSchema,
  source: sourceShema,
  tags: tagsSchema,
};

module.exports = {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
};