const express = require('express');
const TvShowService = require('./TvShowService');

const tvShowRouter = express.Router();

tvShowRouter.get('/', (request, response) => response.json(TvShowService.getAll()));

module.exports = tvShowRouter;