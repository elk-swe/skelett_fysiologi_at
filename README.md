# Skelettets fysiologi för arbetsterapeuter

En statisk, klickbar förberedelsemodul för MC036G. Webbplatsen använder vanlig HTML, CSS och JavaScript utan externa paket.

## Lokal förhandsvisning

Öppna `index.html` direkt i en webbläsare eller starta en enkel lokal webbserver från projektmappen, till exempel `python -m http.server 8000`.

## Uppdatera YouTube-filmen

När föreläsningen är redo att bäddas in ändrar du `YOUTUBE_VIDEO_ID` nära början av `assets/site.js`. Använd videons ID, den del som kommer efter `v=` i en vanlig YouTube-länk. Bygg om eller ladda om sidan efter ändringen.

## GitHub Pages

Projektet är statiskt och länkarna är relativa, så det kan publiceras från en GitHub Pages-repository även under en projektsökväg. Lägg till projektfilerna i repositoryt och välj repositoryts rot som publiceringskälla. `scripts/build.mjs` kopierar webbfilerna till `dist/` för Site-publicering.

## Tillgänglighet

Sidorna har svensk dokumentstruktur, tangentbordsvänliga länkar och knappar, synlig fokusmarkering, hoppa-till-innehåll-länk, alt-texter, responsiv layout och reglage för textstorlek. Vald textstorlek sparas i den aktuella webbläsaren.

## Instuderingsfrågor

Sidan `instuderingsfragor.html` innehåller 25 utfällbara frågor med ledtrådar. Frågetexten visas i rubriken och ledtråden öppnas med tangentbord eller pekskärm.
