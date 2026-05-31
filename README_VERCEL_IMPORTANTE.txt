MEMENTO CONFIGURATOR - VERCEL BUILD READY

CARICA SU GITHUB:
1. Estrai questo ZIP.
2. Carica su GitHub i file CONTENUTI dentro la cartella estratta.
   Attenzione: non caricare la cartella come sottocartella unica.
   La root del repository deve contenere:
   - index.html
   - assets/
   - configurator.json
   - package.json
   - vercel.json

VERCEL SETTINGS:
Framework Preset: Other
Build Command: npm run build
Output Directory: dist
Install Command: lascia vuoto oppure npm install

TEST:
Dopo il deploy prova:
https://tuosito.vercel.app/test.html

Se test.html funziona ma / no, allora è un problema del configuratore.
Se anche test.html dà 404, i file non sono nella root corretta del repository.
