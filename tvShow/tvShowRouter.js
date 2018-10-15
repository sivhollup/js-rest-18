const express = require('express');
const TvShowService = require('./TvShowService');

const tvShowRouter = express.Router();

tvShowRouter.get('/', (request, response) => response.json(TvShowService.getAll()));

tvShowRouter.route('/:tvShowId').get((req, res) => {
    const tvShowId = req.params.tvShowId;
    console.log(`Fetching TV Show with id: ${tvShowId}`);
    const result = TvShowService.getById(tvShowId);
    console.log(result);
    res.json(result);
});

module.exports = tvShowRouter;