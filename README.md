# SUPER QUIZ 3.0 — PWA iPhone/iPad

Aggiornamento compatibile con la PWA già pubblicata su GitHub Pages. Mantiene lo stesso indirizzo, la stessa struttura dei file e i dati locali già presenti nel browser.

## Novità della versione 3.0
- 200 domande: 5 materie × 5 classi, con 8 quesiti per ogni combinazione classe/materia.
- Nuova schermata **I cinque mondi dell'apprendimento**, con accesso diretto a Matematica, Scienze, Italiano, Geografia e Geometria.
- Riepilogo dei progressi per materia nei mondi, basato sulle risposte registrate sul dispositivo.
- Conservati tema chiaro/scuro, effetti sonori, spiegazioni, classifica locale, statistiche, premi e sfida a turni.
- Cache offline aggiornata a `super-quiz-v6-worlds-200q`.

## Installazione / aggiornamento su GitHub Pages
1. Apri il repository `babiicornel/-SUPER-QUIZ`.
2. Sostituisci i file nella cartella principale del repository con gli 8 file di questo archivio: `index.html`, `style.css`, `app.js`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `README.md`.
3. Esegui il commit sulla branch `main` e attendi la pubblicazione di GitHub Pages.
4. Su iPhone/iPad apri il sito con Safari e ricaricalo con connessione Internet. Chiudi e riapri la PWA installata se mostra ancora la versione precedente.

URL invariato: https://babiicornel.github.io/-SUPER-QUIZ/

## Dati e sincronizzazione
Punteggi, statistiche, nome e premi restano memorizzati localmente nel browser/dispositivo. Non vengono sincronizzati tra iPhone e iPad. La sincronizzazione online non è attiva in questa versione: richiede un backend, autenticazione e regole di protezione adeguate, soprattutto perché il gioco è rivolto a minori.

## Limiti
La sfida a due giocatori è a turni sullo stesso dispositivo, non online. I livelli facile/standard/sfida regolano durata e punteggio, non un algoritmo adattivo. I contenuti sono materiale didattico di esercitazione e andrebbero revisionati da un insegnante prima di un uso scolastico ufficiale.
