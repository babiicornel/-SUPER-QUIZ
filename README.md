# SUPER QUIZ 2.0 — PWA iPhone/iPad

Aggiornamento della PWA esistente. Mantiene l'installazione Safari/GitHub Pages e aggiorna la cache offline alla versione `super-quiz-v2`.

## Funzioni incluse
- Tema chiaro/scuro selezionabile.
- Mascotte gufo con animazione CSS.
- 5 materie e classi 1ª–5ª.
- 125 domande curate, 5 per materia per ogni classe.
- Tre modalità: facile (5 domande), standard (10 domande), sfida (10 domande con 15 punti per risposta esatta). La difficoltà dei contenuti è comunque differenziata in base alla classe.
- Modalità mista o materia singola.
- Punteggio e spiegazione immediata.
- Classifica locale filtrata per classe.
- Statistiche locali per materia.
- Collezione di medaglie/obiettivi.
- Sfida a turni per due giocatori sullo stesso dispositivo.
- Effetti sonori sintetizzati e disattivabili.
- Memorizzazione locale e cache offline.

## Aggiornare GitHub Pages da iPhone
1. Apri il repository GitHub `babiicornel/-SUPER-QUIZ`.
2. Per ciascun file esistente (`index.html`, `style.css`, `app.js`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `README.md`), apri il file, scegli modifica o sostituisci e carica/incolla la versione corrispondente di questa cartella. È importante sostituire i file, non creare una seconda copia in sottocartella.
3. Crea un commit sulla branch `main`.
4. Attendi la nuova pubblicazione GitHub Pages.
5. Su iPhone/iPad chiudi la PWA e riapri il sito con Safari e connessione Internet. Il service worker `super-quiz-v2` sostituisce la cache precedente; se compare ancora la versione vecchia, chiudi la PWA, ricarica Safari e riapri l'icona.

## Dati e privacy
I nomi, i punteggi, le statistiche e i premi sono salvati localmente nel browser/dispositivo tramite localStorage. Non vengono sincronizzati automaticamente tra iPhone e iPad. La classifica è quindi locale al singolo dispositivo. Per una classifica condivisa tra più dispositivi/utenti occorre aggiungere un backend e regole di protezione dei dati, soprattutto perché il gioco è rivolto a minori.

## Limiti noti della build 2.0
La modalità sfida è locale e a turni sullo stesso dispositivo, non multiplayer online. Le modalità facile/standard/sfida modificano durata e punteggio, mentre il livello didattico è associato alla classe selezionata; non è ancora un sistema adattivo. Prima di un uso didattico ufficiale, rivedere i contenuti con un insegnante.
