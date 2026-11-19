const S=[
{id:"math",n:"Matematica",e:"➗",c:"#3478df",t:"#edf4ff",d:"Numeri e problemi"},
{id:"science",n:"Scienze",e:"🔬",c:"#1b9b69",t:"#eaf8f0",d:"Natura e corpo umano"},
{id:"italian",n:"Italiano",e:"📚",c:"#e58a35",t:"#fff3e8",d:"Parole e grammatica"},
{id:"geo",n:"Geografia",e:"🌍",c:"#8660d8",t:"#f2edff",d:"Italia e mondo"},
{id:"geometry",n:"Geometria",e:"📐",c:"#d45b9c",t:"#fff0f7",d:"Figure e misure"}];
const Q=[];
function add(g,s,p,a,w,x){Q.push({g,s,p,a,w,x})}
const data={
1:{
math:[
["Quanto fa 3 + 2?","5",["4","6","7"],"3 più 2 fa 5."],["Quanto fa 8 − 3?","5",["4","6","3"],"8 meno 3 fa 5."],["Quale numero viene dopo 19?","20",["18","21","29"],"Dopo 19 viene 20."],["Quante unità ci sono in una decina?","10",["5","9","12"],"Una decina è formata da dieci unità."],["Hai 4 mele e ne ricevi 3. Quante sono?","7",["6","8","9"],"4 più 3 fa 7."]
],
science:[
["Quale animale fa le uova?","Gallina",["Gatto","Cane","Mucca"],"La gallina è un uccello oviparo."],["Di che cosa ha bisogno una pianta per crescere?","Acqua e luce",["Solo buio","Plastica","Caramelle"],"Acqua e luce aiutano la pianta a vivere."],["Quale parte del corpo usiamo per vedere?","Occhi",["Orecchie","Mani","Piedi"],"Gli occhi sono gli organi della vista."],["Quale animale vive nell'acqua?","Pesce",["Leone","Cavallo","Gallina"],"I pesci vivono nell'acqua e respirano con le branchie."],["Quante zampe ha normalmente un insetto?","Sei",["Quattro","Otto","Dieci"],"Gli insetti hanno sei zampe."]
],
italian:[
["Quale parola inizia con la lettera M?","Mela",["Sole","Casa","Luna"],"Mela inizia con M."],["Qual è il plurale di gatto?","Gatti",["Gatto","Gatte","Gattino"],"Il plurale di gatto è gatti."],["Quale parola è un nome di persona?","Bambina",["Correre","Alto","Velocemente"],"Bambina indica una persona."],["Completa: Il sole _____.","brilla",["brillano","brilliamo","brillate"],"Il soggetto singolare richiede brilla."],["Quale parola fa rima con pane?","Cane",["Mare","Sole","Fiore"],"Pane e cane terminano con lo stesso suono."]
],
geo:[
["Come si chiama il luogo in cui abitiamo?","Terra",["Luna","Sole","Marte"],"Viviamo sul pianeta Terra."],["Quale elemento troviamo in una città?","Strade",["Ghiacciai soltanto","Crateri","Vulcani sempre"],"Le città hanno strade ed edifici."],["Dove si trova il mare?","Sulla superficie terrestre",["Nel cielo","Sotto il centro della Terra","Sulla Luna"],"I mari ricoprono parte della superficie terrestre."],["Quale mezzo viaggia sull'acqua?","Nave",["Treno","Bicicletta","Automobile"],"La nave naviga sull'acqua."],["Quale paesaggio ha molta sabbia e poche piogge?","Deserto",["Foresta pluviale","Ghiacciaio","Prato alpino"],"Il deserto è molto arido."]
],
geometry:[
["Quanti lati ha un triangolo?","3",["2","4","5"],"Il triangolo ha tre lati."],["Quale figura è rotonda?","Cerchio",["Quadrato","Triangolo","Rettangolo"],"Il cerchio è una figura rotonda."],["Quanti lati ha un quadrato?","4",["3","5","6"],"Il quadrato ha quattro lati."],["Quale oggetto assomiglia a una sfera?","Palla",["Libro","Scatola","Finestra"],"La palla ha forma sferica."],["Quanti vertici ha un triangolo?","3",["2","4","5"],"Un triangolo ha tre vertici."]
]},
2:{
math:[
["Quanto fa 24 + 15?","39",["38","40","41"],"24 più 15 fa 39."],["Quanto fa 50 − 18?","32",["28","38","42"],"50 meno 18 fa 32."],["Quanto fa 5 × 2?","10",["7","8","12"],"Cinque gruppi da due fanno dieci."],["Qual è la metà di 18?","9",["8","10","12"],"La metà di 18 è 9."],["Hai 3 sacchetti con 4 biglie ciascuno. Quante biglie?","12",["7","9","16"],"3 gruppi da 4 fanno 12."]
],
science:[
["Quale organo usiamo per ascoltare?","Orecchie",["Occhi","Naso","Mani"],"Le orecchie permettono l'udito."],["Quale animale è un mammifero?","Delfino",["Trota","Rana","Lucertola"],"Il delfino è un mammifero."],["Quale parte della pianta assorbe acqua?","Radice",["Fiore","Frutto","Petalo"],"Le radici assorbono acqua dal terreno."],["L'acqua può diventare ghiaccio quando...","si raffredda molto",["si scalda","si mescola alla sabbia","si illumina"],"L'acqua solidifica quando si raffredda fino al punto di congelamento."],["Quale alimento deriva dal latte?","Formaggio",["Pane","Riso","Mela"],"Il formaggio si produce con il latte."]
],
italian:[
["Qual è il contrario di alto?","Basso",["Largo","Lungo","Grande"],"Basso è il contrario di alto."],["Qual è il verbo nella frase 'Marta canta'?","Canta",["Marta","La","Nessuno"],"Canta indica l'azione."],["Qual è il plurale di amico?","Amici",["Amiche","Amico","Amicii"],"Il plurale maschile di amico è amici."],["Quale parola è un aggettivo?","Rosso",["Tavolo","Saltare","Ieri"],"Rosso descrive una qualità."],["Completa: Noi _____ a scuola.","andiamo",["vai","vanno","andate"],"Con noi si usa andiamo."]
],
geo:[
["Qual è la capitale d'Italia?","Roma",["Milano","Torino","Napoli"],"Roma è la capitale d'Italia."],["Quale paesaggio ha alte montagne?","Montagna",["Pianura","Costa","Deserto"],"La montagna presenta rilievi elevati."],["Dove sfocia un fiume?","Nel mare o in un lago",["Sulla cima di un monte","Nel cielo","Nel deserto sempre"],"La foce è il punto in cui il fiume termina."],["Quale punto cardinale indica il sorgere del Sole?","Est",["Ovest","Nord","Sud"],"Il Sole sorge a est."],["Quale regione italiana ha Venezia come capoluogo?","Veneto",["Lombardia","Toscana","Liguria"],"Venezia è il capoluogo del Veneto."]
],
geometry:[
["Quanti angoli ha un rettangolo?","4",["3","5","6"],"Il rettangolo ha quattro angoli."],["Quale figura ha tre lati?","Triangolo",["Quadrato","Pentagono","Cerchio"],"Il triangolo ha tre lati."],["Quanti centimetri formano un metro?","100",["10","50","1000"],"Un metro corrisponde a 100 centimetri."],["Quale solido assomiglia a una scatola da scarpe?","Parallelepipedo",["Sfera","Cono","Cilindro"],"Una scatola ha forma di parallelepipedo."],["Quanti lati uguali ha un quadrato?","4",["2","3","Nessuno"],"I quattro lati del quadrato sono uguali."]
]},
3:{
math:[
["Quanto fa 7 × 8?","56",["54","48","64"],"7 per 8 fa 56."],["Quanto fa 144 ÷ 12?","12",["10","11","14"],"144 diviso 12 fa 12."],["Quanto fa 235 + 148?","383",["373","393","483"],"235 più 148 fa 383."],["Qual è il triplo di 24?","72",["48","68","84"],"24 per 3 fa 72."],["Un libro costa 8 euro. Quanto costano 4 libri?","32 euro",["24 euro","28 euro","36 euro"],"8 per 4 fa 32 euro."]
],
science:[
["Quale organo pompa il sangue?","Cuore",["Polmone","Stomaco","Cervello"],"Il cuore pompa il sangue."],["Quale processo permette alle piante di usare la luce per produrre nutrimento?","Fotosintesi",["Digestione","Evaporazione","Germinazione"],"La fotosintesi usa la luce per produrre zuccheri."],["A quale temperatura ghiaccia l'acqua pura normalmente?","0 °C",["10 °C","50 °C","100 °C"],"A pressione normale l'acqua ghiaccia a 0 °C."],["Quale animale è un anfibio?","Rana",["Serpente","Aquila","Delfino"],"La rana è un anfibio."],["Quale gas è necessario alla respirazione umana?","Ossigeno",["Elio","Metano","Idrogeno"],"Le cellule utilizzano ossigeno."]
],
italian:[
["Qual è il soggetto in 'Il cane corre nel prato'?","Il cane",["Corre","Nel prato","Il"],"Il cane compie l'azione."],["Qual è il passato prossimo di mangiare, prima persona singolare?","Ho mangiato",["Mangiai","Mangerò","Mangiavo"],"La forma è ho mangiato."],["Quale parola è un avverbio?","Lentamente",["Lento","Lentezza","Lente"],"Lentamente modifica il verbo."],["Qual è il sinonimo di felice?","Contento",["Triste","Arrabbiato","Stanco"],"Contento ha significato simile a felice."],["Quale frase è corretta?","Qual è il tuo nome?",["Qual'è il tuo nome?","Quale il tuo nome?","Quale'è il tuo nome?"],"Qual è si scrive senza apostrofo."]
],
geo:[
["Qual è il fiume più lungo d'Italia?","Po",["Tevere","Arno","Adige"],"Il Po è il fiume più lungo d'Italia."],["Quale mare bagna la costa orientale italiana?","Adriatico",["Tirreno","Ligure","Ionio"],"Il Mar Adriatico bagna la costa orientale."],["Qual è il continente più esteso?","Asia",["Africa","Europa","Oceania"],"L'Asia è il continente più esteso."],["Come si chiama la rappresentazione ridotta della Terra?","Mappamondo",["Termometro","Plastico","Grafico"],"Il mappamondo rappresenta il globo."],["Quale regione ha Palermo come capoluogo?","Sicilia",["Sardegna","Puglia","Calabria"],"Palermo è il capoluogo siciliano."]
],
geometry:[
["Un rettangolo misura 5 cm e 3 cm. Qual è il perimetro?","16 cm",["8 cm","15 cm","20 cm"],"5+3+5+3 = 16 cm."],["Quanti gradi misura un angolo retto?","90°",["45°","180°","360°"],"Un angolo retto misura 90 gradi."],["Come si chiama un poligono con 5 lati?","Pentagono",["Esagono","Ottagono","Triangolo"],"Il pentagono ha cinque lati."],["Qual è l'area di un quadrato con lato 4 cm?","16 cm²",["8 cm²","12 cm²","20 cm²"],"4 per 4 fa 16 cm²."],["Quante facce ha un cubo?","6",["4","8","12"],"Il cubo ha sei facce."]
]},
4:{
math:[
["Quanto fa 3.456 + 2.789?","6.245",["6.145","6.235","6.345"],"La somma è 6.245."],["Quanto fa 936 ÷ 9?","104",["106","94","114"],"9 per 104 fa 936."],["Quanto fa 25 × 16?","400",["350","390","420"],"25 per 16 fa 400."],["Quanto vale 3/4 di 20?","15",["10","12","16"],"20 diviso 4 per 3 fa 15."],["Un treno percorre 60 km in un'ora. Quanti km in 3 ore alla stessa velocità?","180 km",["120 km","160 km","200 km"],"60 per 3 fa 180 km."]
],
science:[
["Quale apparato trasporta il sangue?","Circolatorio",["Digerente","Respiratorio","Scheletrico"],"Il sistema circolatorio trasporta il sangue."],["Qual è il pianeta chiamato Pianeta Rosso?","Marte",["Venere","Giove","Saturno"],"Marte appare rossastro per gli ossidi di ferro."],["Come si chiama il passaggio da liquido a gas?","Evaporazione",["Condensazione","Solidificazione","Fusione"],"L'evaporazione trasforma il liquido in vapore."],["Quale fonte energetica è rinnovabile?","Solare",["Carbone","Petrolio","Gas naturale"],"L'energia solare è rinnovabile."],["Quale organo coordina molte attività del corpo?","Cervello",["Milza","Stomaco","Polmone"],"Il cervello coordina il sistema nervoso."]
],
italian:[
["Quale parola è un pronome personale?","Noi",["Bello","Sotto","Casa"],"Noi è un pronome personale."],["Qual è il participio passato di scrivere?","Scritto",["Scrivuto","Scrivendo","Scrisse"],"Il participio passato è scritto."],["Quale frase contiene un complemento di luogo?","Vado in palestra",["Mangio una mela","Leggo bene","Sono felice"],"In palestra indica il luogo."],["Quale parola è un nome astratto?","Coraggio",["Sedia","Matita","Finestra"],"Il coraggio è un concetto astratto."],["Quale tempo indica un'azione futura?","Partirò",["Partivo","Partii","Parto"],"Partirò indica il futuro."]
],
geo:[
["Quale catena montuosa separa l'Italia dalla Francia in parte?","Alpi",["Appennini","Pirenei","Carpazi"],"Le Alpi segnano parte del confine."],["Qual è la capitale della Spagna?","Madrid",["Barcellona","Siviglia","Valencia"],"Madrid è la capitale spagnola."],["Quale oceano è il più vasto?","Pacifico",["Atlantico","Indiano","Artico"],"Il Pacifico è il più esteso."],["Che cosa indica la scala di una carta?","Il rapporto tra distanze sulla carta e reali",["I punti cardinali","Le temperature","Le altezze delle nuvole"],"La scala esprime la riduzione delle distanze."],["Quale città è capoluogo della Lombardia?","Milano",["Brescia","Bergamo","Como"],"Milano è il capoluogo lombardo."]
],
geometry:[
["Un quadrato ha lato 7 cm. Qual è il perimetro?","28 cm",["14 cm","21 cm","49 cm"],"4 per 7 fa 28 cm."],["Qual è l'area di un rettangolo 8 × 5 cm?","40 cm²",["26 cm²","13 cm²","80 cm²"],"8 per 5 fa 40 cm²."],["Come si chiama un triangolo con due lati uguali?","Isoscele",["Equilatero","Scaleno","Ottusangolo"],"Il triangolo isoscele ha due lati uguali."],["Quanti vertici ha un cubo?","8",["6","10","12"],"Il cubo ha otto vertici."],["Qual è la somma degli angoli interni di un triangolo?","180°",["90°","270°","360°"],"La somma è sempre 180 gradi."]
]},
5:{
math:[
["Quanto fa 2,5 × 4?","10",["8","9","12"],"2,5 per 4 fa 10."],["Quanto fa 3/5 di 40?","24",["18","20","30"],"40 diviso 5 per 3 fa 24."],["Un prodotto costa 80 euro e ha uno sconto del 25%. Quanto costa dopo lo sconto?","60 euro",["55 euro","65 euro","75 euro"],"Il 25% di 80 è 20; 80 meno 20 fa 60."],["Quanto fa 1.250 ÷ 25?","50",["25","40","60"],"25 per 50 fa 1.250."],["Un'auto percorre 150 km in 2 ore. Qual è la velocità media?","75 km/h",["60 km/h","70 km/h","80 km/h"],"150 diviso 2 fa 75 km/h."]
],
science:[
["Quale gas assorbono le piante durante la fotosintesi?","Anidride carbonica",["Ossigeno","Elio","Azoto puro"],"Le piante usano anidride carbonica e acqua."],["Quale forza ci mantiene sulla superficie terrestre?","Gravità",["Attrito soltanto","Magnetismo terrestre","Elettricità"],"La gravità attrae i corpi verso la Terra."],["Quale organo filtra il sangue producendo urina?","Reni",["Polmoni","Stomaco","Cuore"],"I reni filtrano il sangue."],["Che cosa studia l'ecologia?","Le relazioni tra organismi e ambiente",["Solo le rocce","Solo i pianeti","Le regole grammaticali"],"L'ecologia studia gli ecosistemi."],["Quale pianeta è il più grande del Sistema Solare?","Giove",["Terra","Marte","Mercurio"],"Giove è il pianeta più grande."]
],
italian:[
["In quale frase il verbo è al congiuntivo?","Spero che tu venga",["Tu vieni oggi","Tu verrai domani","Tu venisti ieri"],"Venga è congiuntivo presente."],["Qual è il complemento oggetto in 'Sara legge un romanzo'?","Un romanzo",["Sara","Legge","Nessuno"],"Un romanzo risponde a che cosa legge?"],["Quale parola è un avverbio di tempo?","Domani",["Rapidamente","Qui","Molto"],"Domani indica quando."],["Qual è la forma corretta?","Ce l'ho",["C'è l'ho","Celo","Ce lo ho"],"Ce l'ho è la grafia corretta."],["Quale figura retorica attribuisce qualità umane a un oggetto?","Personificazione",["Similitudine","Rima","Allitterazione"],"La personificazione attribuisce caratteristiche umane."]
],
geo:[
["Qual è la capitale del Canada?","Ottawa",["Toronto","Vancouver","Montreal"],"Ottawa è la capitale canadese."],["Quale linea è a 0° di longitudine?","Meridiano di Greenwich",["Equatore","Tropico del Cancro","Circolo polare"],"Greenwich è il meridiano fondamentale."],["Quale Stato è attraversato dal Nilo?","Egitto",["Norvegia","Cile","Giappone"],"Il Nilo attraversa l'Egitto."],["Quale fascia climatica si trova intorno all'Equatore?","Tropicale",["Polare","Temperata fredda","Subartica"],"La fascia equatoriale è calda e spesso umida."],["Che cosa rappresentano le curve di livello?","Punti alla stessa altitudine",["Stesse temperature","Confini politici","Distanze stradali"],"Le curve di livello uniscono punti di uguale quota."]
],
geometry:[
["Un triangolo ha base 10 cm e altezza 6 cm. Qual è l'area?","30 cm²",["60 cm²","16 cm²","36 cm²"],"10 per 6 diviso 2 fa 30 cm²."],["Qual è il volume di un cubo con lato 3 cm?","27 cm³",["9 cm³","18 cm³","36 cm³"],"3 per 3 per 3 fa 27 cm³."],["Quanto misura un angolo giro?","360°",["180°","270°","90°"],"Un angolo giro misura 360 gradi."],["Qual è la formula della circonferenza?","2 × π × r",["π × r²","lato × 4","base × altezza"],"La circonferenza è due pi greco per il raggio."],["Un parallelepipedo ha dimensioni 2, 3 e 4 cm. Qual è il volume?","24 cm³",["9 cm³","12 cm³","20 cm³"],"2 per 3 per 4 fa 24 cm³."]
]}
};
for(let g=1;g<=5;g++)for(const sid of Object.keys(data[g]))for(const row of data[g][sid])add(g,sid,row[0],row[1],row[2],row[3]);

const state={screen:"home",grade:3,subject:"mixed",difficulty:"standard",name:"",questions:[],index:0,score:0,answered:false,chosen:null,players:[],turn:0,sound:true};
const $=s=>document.querySelector(s);
const storage={get(k,d){try{return JSON.parse(localStorage.getItem("sq2_"+k))??d}catch{return d}},set(k,v){localStorage.setItem("sq2_"+k,JSON.stringify(v))}};
let stats=storage.get("stats",{}),scores=storage.get("scores",[]),earned=storage.get("badges",[]);
function esc(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function subject(id){return S.find(s=>s.id===id)}
function go(screen){state.screen=screen;render()}
function home(){return `<section class="hero"><div class="mascot">🦉</div><h1>SUPER QUIZ 2.0</h1><p>Il gufo saggio ti accompagna nella sfida!</p><div class="chips" style="justify-content:center"><span class="chip">5 materie</span><span class="chip">5 classi</span><span class="chip">125 domande curate</span></div></section>
<section class="panel"><label class="label">NOME DEL GIOCATORE</label><input id="name" class="field" maxlength="20" placeholder="Scrivi il tuo nome" value="${esc(state.name)}"><div style="height:14px"></div><label class="label">CLASSE</label><div class="gradegrid">${[1,2,3,4,5].map(g=>`<button class="grade ${state.grade===g?'active':''}" data-grade="${g}">${g}ª</button>`).join("")}</div></section>
<section class="panel"><div class="title">Scegli la materia</div><div class="subjectgrid"><button class="subject ${state.subject==='mixed'?'active':''}" data-subject="mixed" style="--tint:#f0efff;--color:#6757df"><span class="emoji">🎲</span><span><b>Tutte</b><small>Modalità mista</small></span></button>${S.map(s=>`<button class="subject ${state.subject===s.id?'active':''}" data-subject="${s.id}" style="--tint:${s.t};--color:${s.c}"><span class="emoji">${s.e}</span><span><b>${s.n}</b><small>${s.d}</small></span></button>`).join("")}</div></section>
<section class="panel"><div class="title">Livello di difficoltà</div><div class="chips">${["facile","standard","sfida"].map((d,i)=>`<button class="pill ${state.difficulty===d?'active':''}" data-diff="${d}">${["🌱 Facile","⭐ Standard","🔥 Sfida"][i]}</button>`).join("")}</div><p class="muted">Il livello modifica il numero di opzioni e la soglia dei premi.</p></section>
<button class="btn" id="start">🚀 INIZIA LA PARTITA</button><div class="actions"><button class="btn alt" id="rank">🏆 Classifica</button><button class="btn alt" id="stats">📊 Progressi</button></div><div class="actions"><button class="btn alt" id="badges">🎖️ Collezione premi</button><button class="btn alt" id="multi">👥 Sfida a turni</button></div>`}
function quiz(){let q=state.questions[state.index],s=subject(q.s);return `<div class="quizhead"><button class="chip" id="quit">← Esci</button><span>${state.index+1} / ${state.questions.length}</span><span>⭐ ${state.players.length?state.players[state.turn].score:state.score}</span></div><div class="bar"><span style="width:${(state.index+1)/state.questions.length*100}%"></span></div><section class="panel qbox"><div class="qemoji">${s.e}</div><div class="qmeta">${s.n.toUpperCase()} · CLASSE ${q.g}ª</div><div class="question">${q.p}</div><div class="answers">${q.opts.map((o,i)=>`<button class="answer ${state.answered&&o===q.a?'correct':''} ${state.answered&&o===state.chosen&&o!==q.a?'wrong':''}" data-answer="${esc(o)}" ${state.answered?'disabled':''}>${String.fromCharCode(65+i)}. ${esc(o)} ${state.answered&&o===q.a?'✓':state.answered&&o===state.chosen?'✕':''}</button>`).join("")}</div>${state.answered?`<div class="feedback ${state.chosen===q.a?'good':'bad'}">${state.chosen===q.a?'🎉 Esatto! Il gufo è fiero di te!':'💡 La risposta giusta è: '+esc(q.a)}<br>${esc(q.x)}</div><button class="btn" id="next">${state.index===state.questions.length-1?'🏆 VEDI IL RISULTATO':'CONTINUA →'}</button>`:''}</section><div class="muted" style="text-align:center">🦉 Un passo alla volta: imparare è una vittoria!</div>`}
function result(){let unit=state.difficulty==="sfida"?15:10;let pct=Math.round(state.score/(state.questions.length*unit)*100),cup=pct>=90?"🏆":pct>=70?"🥇":pct>=50?"🌟":"💪";return `<section class="panel result"><div class="cup">${cup}</div><h2>Partita completata!</h2><div class="big">${state.score} punti</div><p class="muted">${pct>=90?"Incredibile! Sei un campione!":pct>=70?"Ottimo lavoro!":pct>=50?"Bravo, continua ad allenarti!":"Non mollare: ogni tentativo ti fa migliorare!"}</p><div class="chips" style="justify-content:center"><span class="chip">${esc(state.name)}</span><span class="chip">${state.grade}ª elementare</span><span class="chip">${pct}% corrette</span></div><div style="height:15px"></div><button class="btn" id="again">🔄 GIOCA ANCORA</button><div style="height:9px"></div><button class="btn alt" id="rank">🏆 CLASSIFICA</button><div style="height:9px"></div><button class="btn alt" id="home">⌂ HOME</button></section>`}
function leaderboard(){let list=scores.filter(x=>x.grade===state.grade).sort((a,b)=>b.score-a.score).slice(0,40);return `<div class="row" style="display:flex;justify-content:space-between;align-items:center"><button class="chip" id="home">← Home</button><div class="title">🏆 Classifica ${state.grade}ª</div><button class="chip" id="reset">Reset</button></div><section class="panel">${list.length?list.map((x,i)=>`<div class="rankrow"><div class="ranknum">${i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1+'.'}</div><div><div class="rankname">${esc(x.name)}</div><div class="rankmeta">${new Date(x.date).toLocaleDateString("it-IT")} · ${x.subject==="mixed"?"Tutte le materie":subject(x.subject)?.n}</div></div><div class="pts">${x.score} pt</div></div>`).join(""):`<div class="muted" style="text-align:center;padding:25px">Ancora nessun punteggio per questa classe. Inizia a giocare!</div>`}</section>`}
function progress(){let all=Object.values(stats),total=all.reduce((a,b)=>a+b.games,0),correct=all.reduce((a,b)=>a+b.correct,0);return `<button class="chip" id="home">← Home</button><section class="panel"><div class="title">📊 I tuoi progressi</div><div class="statgrid"><div class="stat"><strong>${total}</strong><small>Partite giocate</small></div><div class="stat"><strong>${correct}</strong><small>Risposte esatte</small></div><div class="stat"><strong>${all.length?Math.round(correct/Math.max(1,all.reduce((a,b)=>a+b.total,0))*100):0}%</strong><small>Precisione generale</small></div><div class="stat"><strong>${earned.length}</strong><small>Premi conquistati</small></div></div><div class="title" style="margin-top:18px">Risultati per materia</div>${S.map(s=>{let x=stats[s.id]||{games:0,correct:0,total:0};return `<div class="rankrow"><span style="font-size:23px">${s.e}</span><div class="rankname">${s.n}<div class="rankmeta">${x.correct||0} risposte corrette · ${x.games||0} partite</div></div><div class="pts">${x.total?Math.round(x.correct/x.total*100):0}%</div></div>`}).join("")}</section>`}
const badgeDefs=[["first","🌟","Prima stella","Completa la prima partita",()=>scores.length>=1],["ten","🎯","Occhio di falco","Ottieni almeno 70 punti",()=>scores.some(x=>x.score>=70)],["perfect","💎","Partita perfetta","Ottieni 100 punti",()=>scores.some(x=>x.score===100)],["all5","🌈","Esploratore","Gioca tutte le materie",()=>S.every(s=>(stats[s.id]?.games||0)>0)],["champ","🏆","Campione","Ottieni almeno 90 punti",()=>scores.some(x=>x.score>=90)],["streak","🔥","Sempre meglio","Completa 5 partite",()=>scores.length>=5]];
function badgePage(){return `<button class="chip" id="home">← Home</button><section class="panel"><div class="title">🎖️ La tua collezione</div><div class="badgegrid">${badgeDefs.map(b=>{let got=earned.includes(b[0]);return `<div class="badgeitem" style="opacity:${got?1:.4}"><div class="ico">${b[1]}</div><b>${b[2]}</b><small>${got?"Conquistato":b[3]}</small></div>`}).join("")}</div></section>`}
function multiPage(){return `<button class="chip" id="home">← Home</button><section class="panel"><div class="title">👥 Sfida a turni</div><p class="muted">Due giocatori usano lo stesso dispositivo. Ogni giocatore risponde alle stesse 5 domande, a turno. Passate il dispositivo quando compare il messaggio.</p><label class="label">GIOCATORE 1</label><input class="field" id="p1" maxlength="20" placeholder="Nome giocatore 1"><div style="height:12px"></div><label class="label">GIOCATORE 2</label><input class="field" id="p2" maxlength="20" placeholder="Nome giocatore 2"><div style="height:14px"></div><button class="btn" id="startMulti">INIZIA LA SFIDA</button></section>`}
function render(){let v=$("#view");v.innerHTML=state.screen==="home"?home():state.screen==="quiz"?quiz():state.screen==="result"?result():state.screen==="rank"?leaderboard():state.screen==="stats"?progress():state.screen==="badges"?badgePage():multiPage();bind()}
function bind(){
 $("#name")?.addEventListener("input",e=>state.name=e.target.value);
 document.querySelectorAll("[data-grade]").forEach(b=>b.onclick=()=>{state.grade=+b.dataset.grade;playSound("tap");render()});
 document.querySelectorAll("[data-subject]").forEach(b=>b.onclick=()=>{state.subject=b.dataset.subject;playSound("select");render()});
 document.querySelectorAll("[data-diff]").forEach(b=>b.onclick=()=>{state.difficulty=b.dataset.diff;playSound("tap");render()});
 $("#start")?.addEventListener("click",startGame);$("#rank")?.addEventListener("click",()=>go("rank"));$("#stats")?.addEventListener("click",()=>go("stats"));$("#badges")?.addEventListener("click",()=>go("badges"));$("#multi")?.addEventListener("click",()=>go("multi"));
 $("#quit")?.addEventListener("click",()=>{if(confirm("Vuoi interrompere la partita?"))go("home")});
 document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>answer(b.dataset.answer));$("#next")?.addEventListener("click",next);
 $("#again")?.addEventListener("click",startGame);$("#home")?.addEventListener("click",()=>go("home"));
 $("#reset")?.addEventListener("click",()=>{if(confirm("Cancellare tutti i punteggi salvati su questo dispositivo?")){scores=[];storage.set("scores",scores);render()}});
 $("#startMulti")?.addEventListener("click",startMulti);
}
function startGame(){let n=$("#name")?.value.trim()||state.name.trim();if(!n){alert("Scrivi il nome del giocatore.");return}state.name=n;let pool=Q.filter(q=>q.g===state.grade&&(state.subject==="mixed"||q.s===state.subject));let chosen=[];if(state.subject==="mixed"){for(let s of S){let item=shuffle(pool.filter(q=>q.s===s))[0];if(item)chosen.push(item)}chosen=chosen.concat(shuffle(pool.filter(q=>!chosen.includes(q))).slice(0,(state.difficulty==="facile"?5:10)-chosen.length))}else chosen=shuffle(pool).slice(0,state.difficulty==="facile"?5:10);state.questions=chosen.slice(0,10).map(q=>({...q,opts:shuffle([q.a,...q.w])}));state.index=0;state.score=0;state.answered=false;state.chosen=null;state.players=[];playSound("start");go("quiz")}
function answer(val){if(state.answered)return;state.chosen=val;state.answered=true;let q=state.questions[state.index];if(val===q.a){state.score+=state.difficulty==="sfida"?15:10;playSound("correct")}else playSound("wrong");render()}
function next(){
 let q=state.questions[state.index];
 if(state.players.length){
   if(state.chosen===q.a)state.players[state.turn].score+=10;
   if(state.turn===0){state.turn=1;playSound("turn");multiTurn();return}
   state.turn=0;
   if(state.index<state.questions.length-1){state.index++;state.answered=false;state.chosen=null;playSound("next");multiTurn();return}
   let [a,b]=state.players;let winner=a.score===b.score?"Pareggio!":a.score>b.score?a.name+" vince!":b.name+" vince!";
   playSound(a.score===b.score?"finish":"victory");$("#view").innerHTML=`<section class="panel result"><div class="cup">🏆</div><h2>${winner}</h2><div class="statgrid"><div class="stat"><strong>${a.score}</strong><small>${esc(a.name)} · punti</small></div><div class="stat"><strong>${b.score}</strong><small>${esc(b.name)} · punti</small></div></div><div style="height:14px"></div><button class="btn" id="home">TORNA ALLA HOME</button></section>`;$("#home").onclick=()=>{state.players=[];go("home")};return;
 }
 let st=stats[q.s]||{games:0,correct:0,total:0};st.total++;if(state.chosen===q.a)st.correct++;stats[q.s]=st;storage.set("stats",stats);
 if(state.index<state.questions.length-1){state.index++;state.answered=false;state.chosen=null;playSound("next");render()}else finish()
}
function finish(){let item={name:state.name,grade:state.grade,score:state.score,subject:state.subject,date:new Date().toISOString()};scores.push(item);storage.set("scores",scores);for(const sid of new Set(state.questions.map(q=>q.s))){let st=stats[sid]||{games:0,correct:0,total:0};st.games++;stats[sid]=st}storage.set("stats",stats);let newBadge=false;for(let b of badgeDefs)if(b[4]()&&!earned.includes(b[0])){earned.push(b[0]);newBadge=true}storage.set("badges",earned);playSound(newBadge?"badge":(state.score>=70?"victory":"finish"));go("result")}
function startMulti(){let a=$("#p1").value.trim(),b=$("#p2").value.trim();if(!a||!b){alert("Inserisci i nomi di entrambi i giocatori.");return}state.players=[{name:a,score:0},{name:b,score:0}];state.turn=0;state.questions=shuffle(Q.filter(q=>q.g===state.grade)).slice(0,5).map(q=>({...q,opts:shuffle([q.a,...q.w])}));state.index=0;state.score=0;state.answered=false;state.chosen=null;playSound("start");multiTurn()}
function multiTurn(){let p=state.players[state.turn];$("#view").innerHTML=`<section class="panel result"><div class="cup">🔄</div><h2>Turno di ${esc(p.name)}</h2><p>Passa il dispositivo a ${esc(p.name)} e premi quando sei pronto.</p><button class="btn" id="ready">SONO PRONTO</button></section>`;$("#ready").onclick=()=>{state.screen="quiz";render()}}
let audioCtx=null;
function getAudioContext(){
 try{
   const C=window.AudioContext||window.webkitAudioContext;
   if(!C)return null;
   if(!audioCtx)audioCtx=new C();
   if(audioCtx.state==="suspended")audioCtx.resume();
   return audioCtx;
 }catch{return null}
}
const soundPatterns={
 tap:[[520,.055,"sine"]],
 select:[[520,.07,"sine"],[740,.09,"sine"]],
 start:[[523,.12,"triangle"],[659,.12,"triangle"],[784,.16,"triangle"],[1047,.22,"sine"]],
 correct:[[659,.09,"sine"],[784,.09,"sine"],[988,.13,"sine"],[1319,.2,"triangle"]],
 wrong:[[330,.12,"triangle"],[277,.16,"sine"]],
 next:[[587,.07,"sine"],[784,.11,"sine"]],
 finish:[[784,.12,"triangle"],[659,.12,"triangle"],[523,.22,"sine"]],
 victory:[[523,.11,"triangle"],[659,.11,"triangle"],[784,.11,"triangle"],[1047,.18,"triangle"],[1319,.28,"sine"]],
 badge:[[784,.1,"sine"],[988,.1,"sine"],[1175,.1,"triangle"],[1568,.3,"triangle"]],
 turn:[[440,.1,"sine"],[554,.1,"sine"],[659,.16,"triangle"]]
};
function playSound(name){
 if(!state.sound)return;
 const ctx=getAudioContext();if(!ctx)return;
 const pattern=soundPatterns[name]||soundPatterns.tap;
 let at=ctx.currentTime+.015;
 pattern.forEach(([freq,duration,wave])=>{
   const osc=ctx.createOscillator(),gain=ctx.createGain();
   osc.type=wave;osc.frequency.setValueAtTime(freq,at);
   gain.gain.setValueAtTime(.0001,at);
   gain.gain.exponentialRampToValueAtTime(.075,at+.012);
   gain.gain.exponentialRampToValueAtTime(.0001,at+duration);
   osc.connect(gain);gain.connect(ctx.destination);
   osc.start(at);osc.stop(at+duration+.02);
   at+=duration*.82;
 });
}
// iOS Safari blocca l'audio automatico all'apertura della pagina.
// Sblocchiamo l'AudioContext e riproduciamo il jingle al primo tocco dell'utente.
let introJinglePlayed=false;
function playOpeningJingle(){
 if(introJinglePlayed)return;
 introJinglePlayed=true;
 if(!state.sound)return;
 const ctx=getAudioContext();
 if(!ctx)return;
 if(ctx.state==="suspended"){
   ctx.resume().then(()=>playSound("start")).catch(()=>{});
 }else{
   playSound("start");
 }
}
document.addEventListener("pointerdown",playOpeningJingle,{once:true,capture:true});
document.addEventListener("touchstart",playOpeningJingle,{once:true,capture:true});
document.addEventListener("keydown",playOpeningJingle,{once:true,capture:true});

$("#themeBtn").onclick=()=>{document.body.classList.toggle("dark");let dark=document.body.classList.contains("dark");localStorage.setItem("sq2_theme",dark?"dark":"light");$("#themeBtn").textContent=dark?"☀️":"🌙"};
$("#soundBtn").onclick=()=>{state.sound=!state.sound;$("#soundBtn").textContent=state.sound?"🔊":"🔇";if(state.sound)playSound("select")};
if(localStorage.getItem("sq2_theme")==="dark"){document.body.classList.add("dark");$("#themeBtn").textContent="☀️"}
render();
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
