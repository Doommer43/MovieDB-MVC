# AspIT.Webpack
Webpack 4 config til automatisering af diverse webudviklingsopgaver

På nuværende tidspunkt kan scriptet:
* Starte en lokal server der åbnes i din browser og som opdateres hver gang en fil gemmes
* Transpile SCSS til CSS
* Automatisk sætte vendorprefixes på CSS regler 
* Minify og komprimere CSS
* Komprimere billeder ( virker med .png og .jpg )
* Transpile JavaScript

To-Do:
* Tilføje sourcemap til js og css filer

## Forudsætninger
Tjek at du har installeret den nyeste version af [node.js](https://nodejs.org/en/).

Installer nødvendige filer med

`npm install` eller `yarn install`

config forventer følgende struktur.
```bash
./dist                           # Her ligger webpack færdig kode
./src                             # Mappe med udviklingskode
├── scss/                         # Mappe til .scss filer
    ├── *.scss                    
├── js                            # JavaScript filer
├── img                           # Billeder mindre end 10000 converteres til Base64
├── index.html                    # Forsiden
├── index.js                      # Primære js fil hvor .scss og .js importeres
├── webpack.config.js             # Konfigurationsfil til webpack 4
├── postcss.config.js             # Konfiguration til postcss loader
├── .babelrc                      # Konfigurationsfil til babeljs
├── .gitignore                    # Filer der skal ignoreres af git
```

## Sådan bruger du filen
Download repository og brug det som struktur for dit projekt.

Start en developmentserver med 

`npm run start` eller `yarn start`

Når du er klar til at distribuere din kode bruges:

`npm run build` eller `yarn build`