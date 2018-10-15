const TvShow = require('./TvShow')

class TvShowService {

    constructor() {
        this.tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Science Fiction')];
    }

    getAll() {
        return this.tvShows;
    }

    getById(tvShowId) {
        return this.tvShows.find(tvShow => tvShow.id == tvShowId);
    };


}
module.exports = new TvShowService();