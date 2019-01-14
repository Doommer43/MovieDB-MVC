//Import necessary components
import { store } from '../Model/Store';
import { createFavouriteView, addMovieToView } from '../View/FavouriteView';

export function setupFavourite() {
    //Setup view and append to document
    const favouriteHTML = createFavouriteView(store);
    document.body.insertAdjacentHTML('beforeend', favouriteHTML);
    const favouriteSection = document.getElementById('favouriteSection');
    //Setup eventlisteners
    favouriteSection.addEventListener('click', (event) => {
        const clickedElement = event.target
        if (clickedElement.matches('a.favourite-movie-button')) {
            _removeMovie(clickedElement);
        }
    });
}

function _removeMovie(movieElement) {
    const movieID = movieElement.getAttribute('data-id');
    movieElement.closest('article').remove();
    store.removeMovieFromStore(movieID);
}

export function addMovieToFavourite(movie) {
    const favouriteSection = document.getElementById('favouriteSection');
    //Create new movie card component
    const movieHTML = addMovieToView(movie);
    //Append movieCard
    favouriteSection.insertAdjacentHTML('beforeend', movieHTML);
    //Call and change store
    store.addmovieToStore(movie);
}