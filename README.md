# SUPER QUIZ — versione PWA per iPhone e iPad

Questa edizione è una web app installabile (PWA), scelta per consentire l'installazione su iPhone e iPad senza possedere un Mac e senza passare dall'App Store.

## Funzioni
- iPhone e iPad: interfaccia responsive.
- Cinque materie: Matematica, Scienze, Italiano, Geografia e Geometria.
- Classi dalla 1ª alla 5ª.
- Selezione di materia singola o modalità mista.
- 10 domande per partita, feedback immediato e spiegazione.
- 10 punti per ogni risposta esatta.
- Classifica locale, ordinata per punteggio, con reset.
- Memorizzazione locale sul dispositivo.
- Cache offline dopo il primo caricamento.
- Effetti sonori semplici, disattivabili.
- Banca dati generata con 100 domande di matematica e 100 per ciascuna delle altre quattro materie (500 complessive); per scienze, italiano, geografia e geometria gli stessi nuclei didattici sono riproposti con formulazione contestualizzata alle cinque classi.

## Installazione
La PWA deve essere pubblicata su un indirizzo HTTPS. Un file ZIP aperto direttamente non è sufficiente per installare una web app completa né per attivare la modalità offline.

1. Pubblicare tutti i file contenuti nella cartella su un hosting HTTPS statico (ad esempio GitHub Pages).
2. Aprire il link con Safari su iPhone o iPad.
3. Toccare Condividi → Aggiungi alla schermata Home → Aggiungi.
4. Avviare SUPER QUIZ dalla nuova icona. Aprire una volta con Internet per memorizzare i file offline.

## Nota sulla banca dati
La versione contiene 500 domande generate da un archivio di esercizi e nozioni scolastiche. La difficoltà numerica della matematica varia per classe. Per le altre materie, la classe seleziona la fascia del quiz e il testo introduce una contestualizzazione; per un uso didattico strutturato è consigliata una revisione editoriale e una differenziazione più rigorosa dei programmi per anno.

## File
- index.html: pagina dell'app.
- style.css: interfaccia responsive.
- app.js: logica di gioco, domande e classifica.
- manifest.webmanifest: metadati PWA.
- sw.js: cache offline.
- icon-192.png e icon-512.png: icone.
