const TvShow = require('./TvShow')

class TvShowService {

    constructor() {
        this.tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Science Fiction')];
    }

    getAll() {
        return this.tvShows;
    }
}
module.exports = new TvShowService();