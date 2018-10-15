const express = require('express');
const TvShowService = require('./TvShowService');

const tvShowRouter = express.Router();

tvShowRouter.route('/').get((request, response) => {
    return response.json(TvShowService.getAll());
});

tvShowRouter.route('/:tvShowId').get((req, res) => {
    const tvShowId = req.params.tvShowId;
    console.log(`Fetching TV Show with id: ${tvShowId}`);
    const result = TvShowService.getById(tvShowId);
    res.json(result);
});

tvShowRouter.post('/', (req, res) => {
    const name = req.body.name;
    const genre = req.body.genre;

    const tvShow = TvShowService.createTvShow(name, genre);
    res.json(tvShow);
});

tvShowRouter.route('/:tvShowId').delete((req, res) => {
    const id = req.params.tvShowId;
    console.log(`Deleting tv show with id ${id}`);
    TvShowService.remove(id);
})

module.exports = tvShowRouter;