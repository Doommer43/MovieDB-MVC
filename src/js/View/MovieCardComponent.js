//Import necessary components
import Movie from '../Model/Movie';

export default class MovieCardComponent {
    constructor(movie){
        console.log("a",movie);
        this.movie = new Movie(movie);
        console.log("b",this.movie);
    }

    render() {
        return `
            <article class="col s12 m5 l3">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${this.movie.poster}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator white-text text-darken-4">${this.movie.title}<i class="material-icons right">arrow_upward</i></span>
                        <p>Year: ${this.movie.year}<br>${this.movie.genre ? `Genre: ${this.movie.genre}` : ''}</p>
                        <p><a type="button" class="favorite-movie-button" data-id="${this.movie.id}">${ this.movie.fav === true ? `remove from fav` : `Remove` }</a></p>
                    </div>
                    <div class="card-reveal black">
                        <span class="card-title white-text text-darken-4">${this.movie.title}<i class="material-icons right">close</i></span>
                        <p>${this.movie.plot}</p>
                    </div>
                </div>
            </article>
            `
    }
}