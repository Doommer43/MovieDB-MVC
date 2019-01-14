export default class Movie {
    constructor (movie) {
        this.title = movie.title || movie.Title;
        this.year = movie.year || movie.Year;
        this.id = movie.id || movie.imdbID;
        this.poster = movie.img || movie.Img;
        this.genre = movie.genre || movie.Genre;
        this.plot = movie.plot || movie.Plot;
    }
}