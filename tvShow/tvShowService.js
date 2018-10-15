const TvShow = require('./TvShow')
const createId = require('../utils/idUtil');

class TvShowService {

    constructor() {
        this.tvShows = [new TvShow(createId(), 'Mr.Robot', 'Drama'), new TvShow(createId(), 'Black Mirror', 'Science Fiction')];
    }

    getAll() {
        return this.tvShows;
    }

    getById(tvShowId) {
        return this.tvShows.find(tvShow => tvShow.id == tvShowId);
    };

    createTvShow(name, genre) {
        console.log(name);
        console.log(genre);
        const tvShow = new TvShow(createId(), name, genre);
        this.tvShows.push(tvShow);
        return tvShow;
    }

    remove(id) {
        this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== id);
    }

    update(id, updatedTvShow) {
        this.tvShows = this.tvShows
            .map(tvShow => {
                if (tvShow.id === id) {
                    return Object.assign({}, tvShow, updatedTvShow);
                }
                return tvShow;
            });
        return this.getById(id);
    }


}
module.exports = new TvShowService();