//Import necessary components
import KEY from '../Secret.js';

const URI = "http://www.omdbapi.com/";

export function searchMovie(movieTitle) {
    const URL = URI + `?` + `s='${movieTitle}'` + `&apikey=${KEY}`;
    //Debug
    Console.log(`SearchMovie URL:`, URL);
}