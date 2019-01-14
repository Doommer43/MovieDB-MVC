//Import needed files to setup the app
import { setupFavourite } from './Controller/FavouriteController.js';
import { store } from './Model/Store.js';

class App{
    constructor() {
        //Generate header
        const headerHTML = `
            <div class="container">
                <header>
                <h1>Personal Movie DB</h1>
                </header>  
            </div>
        `;
        //Insert header into DOM (Document Object Model)
        document.body.insertAdjacentHTML('beforeend', headerHTML);

        setupFavourite();

        //Footer
        const footerHTML = `
            <!-- Footer -->
            </main>
            <footer>
                <p class="center-align">Personal Movie DB - %copy 2018 ligebanen</p>
            </footer>
            </div>
        `;
        //Insert header into DOM (Document Object Model)
        document.body.insertAdjacentHTML('beforeend', footerHTML);

        //Saves to localStorage on window unload
        window.addEventListener('beforeunload', store.saveToLocalStorage());
    }
}

//Starts a new app when document contant is loaded
document.addEventListener('DOMContentLoaded', () => new App());