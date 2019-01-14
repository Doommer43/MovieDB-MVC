//Import necessary components
import Movie from './Movie';

class Store {
    //Properties
    movieDB = {};

    constructor() {
        // let storage = localStorage ? localStorage : ({}, console.log("Error: empty localStorage"))

        //Loads from localStorage if it exists
        if (!localStorage.getItem('movieDB')) {
            this._createTestData();
            console.log('Created test data in Store constructor');
        } else {
            this.loadFromLocalStorage();
            console.log('Loaded movies from localStorage');
        }
    }
    

    _createTestData(){
        const testData = {
            "movie1": {
                id : "tt4380",
                title : "A Sunday in Hell",
                description : "The film follows the French Paris-Roubaix spring classic, notorious for the hellish paves or cobbled roads of the north, which are no longer used for traffic but only for transporting,",
                director : "Jørgen Leth",
                year : "1977",
                genre : "Documentary",
                img : "https://m.media-amazon.com/images/M/MV5BYjVhMTE3YzEtOGEwYS00NjFmLWFjYzAtMGVjNjY3YWY4OTJhL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
            },
            "movie2": {
                "title" : "Reptilicus",
                "description" : "After copper miners discover part of the frozen tail of a prehistoric monster in Lapland, scientists inadvertently bring it back to life",
                "director" : "Poul Bang",
                "year" : "1961",
                "genre" : "Sci-Fi",
                "img" : "reptilicus.bmp"
            },
            "movie3": {
                "title" : "The Live",
                "description" : "A drifter discovers a pair of sunglasses that allow him to wake up to the fact that aliens have taken over the Earth.",
                "director" : "John Carpenter",
                "year" : "1988",
                "genre" : "Sci-Fi",
                "img" : "they_live.bmp"
            },
            "movie4": {
                "title" : "Pi",
                "description" : "A paranoid mathematician searches for a key number that will unlock the universal patterns found in nature.",
                "director" : "Darren Aronofsky",
                "year" : "1998",
                "genre" : "Thriller",
                "img" : "pi.bmp"
            },
            "movie5": {
                "title" : "Groundhog Day",
                "description" : "A weatherman finds himself inexplicably living the same day over and over again. ",
                "director" : "Harold Ramis",
                "year" : "1993",
                "genre" : "Comedy",
                "img" : "groundhog_day.bmp"
            },
            "movie6": {
                "title" : "Trading Places",
                "description" : "A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires. ",
                "director" : "John Landis",
                "year" : "1983",
                "genre" : "Comedy",
                "img" : "trading_places.bmp"
            },
            "movie7": {
                "title" : "Brazil",
                "description" : "A bureaucrat, in a retro-future world, tries to correct an administrative error, and becomes an enemy of the state.",
                "director" : "Terry Gilliam",
                "year" : "1085",
                "genre" : "Dystopian",
                "img" : "brazil.bmp"
            }
        }
        const keys = Object.keys(testData)
    
        // Add test data to Store.movieDB
        keys.forEach(key => {
          const movie = testData[key]
          //   debug
          console.log('movie object in _createTestData:', movie)
          this.movieDB[key] = new Movie(movie)
          console.log('movie object efter new Movie()', this.movieDB[key])
        });
    
        this.saveToLocalStorage()
    }

    addMovieToStore(movie) {
        this.movieDB[movie.id] = movie;
        //Debug
        console.log('store.movieDB after movie add', this.imdbID);
    }

    removeMovieFromStore(movieID) {
        delete this.movieDB[movieID];
        this.saveToLocalStorage();
        //Debug
        console.log('Removed movie with imdbID ${movieID} from store.movieDB');
    }

    saveToLocalStorage() {
        localStorage.setItem('movieDB', JSON.stringify(this.movieDB));
        //Debug
        console.log('Saving to localStorage', this.movieDB);
    }

    loadFromLocalStorage() {
        this.movieDB = JSON.parse(localStorage['movieDB']);
    }
}

export let store = new Store();