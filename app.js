const subjects=[
 {id:"math",name:"Matematica",emoji:"➗",color:"#3478df",tint:"#edf4ff",desc:"Numeri, calcoli e problemi"},
 {id:"science",name:"Scienze",emoji:"🔬",color:"#1b9b69",tint:"#eaf8f0",desc:"Natura, animali e corpo umano"},
 {id:"italian",name:"Italiano",emoji:"📚",color:"#e58a35",tint:"#fff3e8",desc:"Parole, grammatica e verbi"},
 {id:"geo",name:"Geografia",emoji:"🌍",color:"#8660d8",tint:"#f2edff",desc:"Italia, paesi e continenti"},
 {id:"geometry",name:"Geometria",emoji:"📐",color:"#d45b9c",tint:"#fff0f7",desc:"Figure, misure e solidi"}
];
const $=s=>document.querySelector(s);
let state={screen:"home",grade:3,name:"",subject:"mixed",questions:[],index:0,score:0,chosen:null,answered:false,sound:true};
const store={get scores(){try{return JSON.parse(localStorage.getItem("sq_scores")||"[]")}catch{return[]}},set scores(v){localStorage.setItem("sq_scores",JSON.stringify(v))}};
function q(subject,prompt,choices,answer,explain,grade=3){return {subject,prompt,choices,answer,explain,grade}}
function makeBank(){
 const b=[];
 // 100 matematica: 20 esercizi per classe, con numeri adeguati alla fascia.
 for(let g=1;g<=5;g++) for(let i=0;i<20;i++){
  let a,bb,op,ans,prompt;
  if(g===1){a=2+(i*3)%18;bb=1+(i*2)%9;op=i%2?"+":"−";if(op==="−"&&bb>a)[a,bb]=[bb,a];ans=op==="+"?a+bb:a-bb;prompt=`Quanto fa ${a} ${op} ${bb}?`}
  else if(g===2){a=12+(i*7)%68;bb=2+(i*3)%25;op=i%3===0?"×":i%3===1?"+":"−";if(op==="×"){a=2+(i%8);bb=2+((i*3)%9)}if(op==="−"&&bb>a)[a,bb]=[bb,a];ans=op==="×"?a*bb:op==="+"?a+bb:a-bb;prompt=`Quanto fa ${a} ${op} ${bb}?`}
  else if(g===3){a=20+(i*13)%180;bb=2+(i*5)%30;op=i%3===0?"×":i%3===1?"+":"−";if(op==="×"){a=2+(i%12);bb=2+((i*2)%10)}if(op==="−"&&bb>a)[a,bb]=[bb,a];ans=op==="×"?a*bb:op==="+"?a+bb:a-bb;prompt=`Calcola: ${a} ${op} ${bb}.`}
  else if(g===4){a=100+(i*37)%700;bb=10+(i*11)%90;op=i%3===0?"÷":i%3===1?"×":"+";if(op==="÷"){bb=2+(i%9);a=bb*(3+(i*7)%30)}if(op==="×"){a=12+(i%18);bb=3+(i%9)}ans=op==="÷"?a/bb:op==="×"?a*bb:a+bb;prompt=`Risolvi: ${a} ${op} ${bb}.`}
  else{a=1000+(i*137)%8000;bb=100+(i*29)%900;op=i%3===0?"÷":i%3===1?"×":"−";if(op==="÷"){bb=2+(i%12);a=bb*(20+(i*3)%80)}if(op==="×"){a=12+(i%28);bb=11+(i%17)}if(op==="−"&&bb>a)[a,bb]=[bb,a];ans=op==="÷"?a/bb:op==="×"?a*bb:a-bb;prompt=`Risolvi: ${a} ${op} ${bb}.`}
  const wrong=[ans+2,ans-3,ans+5].map((v,k)=>v<0?ans+7+k:v);const choices=[String(ans),...wrong.map(String)].sort(()=>Math.random()-.5);b.push(q("math",prompt,choices,String(ans),`Il risultato è ${ans}.`,g));
 }
 const facts={
 science:[
 ["Quale organo pompa il sangue?","Cuore",["Polmone","Stomaco","Rene"],"Il cuore spinge il sangue in tutto il corpo."],
 ["Quale parte della pianta assorbe acqua?","Radice",["Fiore","Frutto","Foglia"],"Le radici assorbono acqua e sali minerali."],
 ["Quale animale è un mammifero?","Delfino",["Trota","Rana","Lucertola"],"Il delfino respira aria e allatta i piccoli."],
 ["A quale temperatura ghiaccia l'acqua pura?","0 °C",["10 °C","50 °C","100 °C"],"A pressione normale l'acqua ghiaccia a 0 °C."],
 ["Quale stella illumina la Terra?","Sole",["Luna","Venere","Marte"],"Il Sole è la stella del nostro sistema."],
 ["Quale gas respiriamo per vivere?","Ossigeno",["Elio","Azoto puro","Anidride carbonica"],"Le cellule usano l'ossigeno nella respirazione."],
 ["Quale organo usiamo principalmente per respirare?","Polmoni",["Cuore","Fegato","Stomaco"],"I polmoni permettono gli scambi gassosi."],
 ["Come si chiama il passaggio da liquido a vapore?","Evaporazione",["Fusione","Congelamento","Condensazione"],"Con l'evaporazione un liquido diventa vapore."],
 ["Quale animale depone uova?","Gallina",["Gatto","Cane","Mucca"],"La gallina è un uccello oviparo."],
 ["Quale materiale è attirato da una calamita?","Ferro",["Legno","Vetro","Carta"],"Il ferro è un materiale ferromagnetico."],
 ["Quale parte del corpo protegge il cervello?","Cranio",["Costole","Femore","Bacino"],"Il cranio è la struttura ossea che protegge il cervello."],
 ["Quale pianeta è chiamato Pianeta Rosso?","Marte",["Venere","Giove","Saturno"],"La superficie ricca di ossidi di ferro appare rossastra."],
 ["Che cosa producono le api?","Miele",["Latte","Seta","Cera di petrolio"],"Le api trasformano il nettare in miele."],
 ["Quale stato ha forma e volume propri?","Solido",["Liquido","Aeriforme","Vapore"],"Un solido mantiene forma e volume."],
 ["Quale apparato digerisce il cibo?","Apparato digerente",["Apparato respiratorio","Sistema nervoso","Apparato scheletrico"],"L'apparato digerente trasforma gli alimenti."],
 ["Come si chiama l'insieme degli esseri viventi e dell'ambiente?","Ecosistema",["Continente","Minerale","Costellazione"],"Un ecosistema comprende organismi e ambiente."],
 ["Quale fonte di energia è rinnovabile?","Energia solare",["Carbone","Petrolio","Gas naturale"],"La luce solare si rinnova continuamente."],
 ["Quale organo controlla molte attività del corpo?","Cervello",["Milza","Polmone","Intestino"],"Il cervello coordina funzioni e risposte."],
 ["Quale animale è un anfibio?","Rana",["Serpente","Aquila","Delfino"],"La rana vive parte della vita in acqua e parte sulla terra."],
 ["Quale processo permette alle piante di produrre zuccheri usando la luce?","Fotosintesi",["Digestione","Respirazione polmonare","Fermentazione"],"La fotosintesi usa luce, acqua e anidride carbonica."]
 ],
 italian:[
 ["Qual è il plurale di 'fiore'?","Fiori",["Fiore","Fiorese","Fiorei"],"Il plurale di fiore è fiori."],
 ["In 'Luca corre', qual è il verbo?","Corre",["Luca","Il","Nessuno"],"Corre indica l'azione."],
 ["Quale parola è un aggettivo?","Allegro",["Correre","Tavolo","Ieri"],"Allegro esprime una qualità."],
 ["Qual è il contrario di 'generoso'?","Avaro",["Altruista","Gentile","Disponibile"],"Avaro indica chi è poco disposto a condividere."],
 ["Quale frase è corretta?","Qual è il tuo nome?",["Qual'è il tuo nome?","Quale il tuo nome?","Quale'è il tuo nome?"],"Qual è si scrive senza apostrofo."],
 ["Qual è il soggetto in 'La bambina legge'?","La bambina",["Legge","Il libro","Nessuno"],"Il soggetto compie l'azione."],
 ["Quale parola è un nome proprio?","Giulia",["città","bambino","fiume"],"I nomi propri indicano persone o luoghi specifici."],
 ["Quale articolo accompagna 'zaino'?","Lo",["Il","La","Gli"],"Si dice lo zaino."],
 ["Qual è il passato remoto di 'andare' alla terza persona singolare?","Andò",["Andava","È andato","Andrà"],"La forma è egli andò."],
 ["Quale parola contiene un dittongo?","Fiore",["Casa","Pane","Luna"],"In fiore le vocali i e o formano un dittongo."],
 ["Qual è il sinonimo di 'veloce'?","Rapido",["Lento","Fermo","Pesante"],"Rapido ha significato simile a veloce."],
 ["Quale frase contiene un complemento di luogo?","Vado a scuola",["Mangio una mela","Leggo un libro","Corro velocemente"],"'A scuola' indica il luogo."],
 ["Quale è un pronome personale?","Noi",["Bello","Sotto","Casa"],"Noi è un pronome personale."],
 ["Quale verbo è al futuro?","Partirò",["Partivo","Parto","Partii"],"Partirò indica un'azione futura."],
 ["Quale parola è un avverbio?","Lentamente",["Lento","Lentezza","Rallentare"],"Lentamente modifica il significato del verbo."],
 ["Come si chiama una parola con significato opposto a un'altra?","Antonimo",["Sinonimo","Omonimo","Accrescitivo"],"L'antonimo esprime significato contrario."],
 ["Quale segno chiude una domanda diretta?","Punto interrogativo",["Punto fermo","Virgola","Due punti"],"Il punto interrogativo chiude una domanda."],
 ["Quale forma è corretta?","Ce l'ho",["C'è l'ho","Ce lo","Celo"],"Ce l'ho è la forma corretta con il verbo avere."],
 ["Qual è il participio passato di 'scrivere'?","Scritto",["Scrivuto","Scrivendo","Scrisse"],"Il participio passato è scritto."],
 ["Quale parola è un nome astratto?","Coraggio",["Sedia","Matita","Finestra"],"Il coraggio è un concetto, non un oggetto materiale."]
 ],
 geo:[
 ["Qual è la capitale d'Italia?","Roma",["Milano","Napoli","Torino"],"Roma è la capitale italiana."],
 ["In quale continente si trova il Brasile?","America del Sud",["Africa","Asia","Europa"],"Il Brasile si trova in America meridionale."],
 ["Quale mare bagna la costa occidentale italiana?","Mar Tirreno",["Mar Adriatico","Mar Nero","Mar Baltico"],"Il Tirreno bagna la costa occidentale."],
 ["Quale linea immaginaria divide la Terra in emisfero nord e sud?","Equatore",["Meridiano di Greenwich","Tropico del Cancro","Circolo polare"],"L'Equatore è a 0° di latitudine."],
 ["Qual è la vetta più alta sopra il livello del mare?","Everest",["K2","Monte Bianco","Kilimangiaro"],"L'Everest è la montagna più alta."],
 ["Qual è il fiume più lungo d'Italia?","Po",["Tevere","Arno","Adige"],"Il Po attraversa la Pianura Padana."],
 ["In quale regione si trova Venezia?","Veneto",["Lombardia","Piemonte","Toscana"],"Venezia è il capoluogo del Veneto."],
 ["Quale oceano è il più vasto?","Pacifico",["Atlantico","Indiano","Artico"],"L'Oceano Pacifico è il più esteso."],
 ["Quale strumento indica i punti cardinali?","Bussola",["Termometro","Barometro","Igrometro"],"La bussola indica il nord magnetico."],
 ["Qual è la capitale della Francia?","Parigi",["Lione","Marsiglia","Nizza"],"Parigi è la capitale francese."],
 ["Quale regione italiana ha Palermo come capoluogo?","Sicilia",["Sardegna","Calabria","Puglia"],"Palermo è il capoluogo della Sicilia."],
 ["Come si chiama una rappresentazione ridotta della Terra?","Mappamondo",["Plastico","Grafico","Diagramma"],"Il mappamondo rappresenta il globo terrestre."],
 ["Quale continente è attraversato dal fiume Nilo?","Africa",["Europa","Oceania","Antartide"],"Il Nilo scorre nell'Africa nord-orientale."],
 ["Quale Stato ha Madrid come capitale?","Spagna",["Portogallo","Grecia","Austria"],"Madrid è la capitale della Spagna."],
 ["Che cosa indica la latitudine?","Distanza angolare dall'Equatore",["Distanza dal mare","Altezza di una montagna","Profondità del mare"],"La latitudine si misura a nord o sud dell'Equatore."],
 ["Quale catena montuosa separa in parte Italia e Francia?","Alpi",["Appennini","Pirenei","Carpazi"],"Le Alpi segnano parte del confine tra Italia e Francia."],
 ["Quale mare si trova a est dell'Italia?","Mar Adriatico",["Mar Tirreno","Mar Ligure","Mar di Sardegna"],"L'Adriatico bagna la costa orientale italiana."],
 ["Quale continente è il più freddo?","Antartide",["Europa","Africa","America del Sud"],"L'Antartide è il continente più freddo."],
 ["Quale città è capoluogo della Lombardia?","Milano",["Bergamo","Brescia","Como"],"Milano è il capoluogo lombardo."],
 ["Quale elemento della carta spiega il significato dei simboli?","Legenda",["Scala","Titolo","Reticolo"],"La legenda spiega i simboli della carta."]
 ],
 geometry:[
 ["Quanti lati ha un triangolo?","3",["2","4","5"],"Un triangolo ha tre lati."],
 ["Quanti angoli retti ha un quadrato?","4",["1","2","3"],"Tutti gli angoli del quadrato sono retti."],
 ["Quale figura ha tutti i punti del bordo alla stessa distanza dal centro?","Circonferenza",["Triangolo","Rettangolo","Trapezio"],"La circonferenza è equidistante dal centro."],
 ["Un rettangolo misura 5 cm per 3 cm. Qual è il perimetro?","16 cm",["8 cm","15 cm","20 cm"],"5 + 3 + 5 + 3 = 16 cm."],
 ["Quante facce ha un cubo?","6",["4","8","12"],"Il cubo ha sei facce quadrate."],
 ["Quanti lati uguali ha un quadrato?","4",["2","3","5"],"Il quadrato ha quattro lati congruenti."],
 ["Come si chiama un poligono di 5 lati?","Pentagono",["Esagono","Ottagono","Quadrilatero"],"Il pentagono ha cinque lati."],
 ["Quanti gradi misura un angolo retto?","90°",["45°","180°","360°"],"L'angolo retto misura 90 gradi."],
 ["Qual è la formula dell'area del rettangolo?","Base × altezza",["Lato × 4","Base + altezza","Base × altezza ÷ 2"],"L'area del rettangolo è base per altezza."],
 ["Quanti vertici ha un cubo?","8",["6","10","12"],"Il cubo ha otto vertici."],
 ["Come si chiama un triangolo con tre lati uguali?","Equilatero",["Isoscele","Scaleno","Rettangolo"],"Nel triangolo equilatero i tre lati sono uguali."],
 ["Quante diagonali ha un quadrato?","2",["1","3","4"],"Un quadrato ha due diagonali."],
 ["Qual è il perimetro di un quadrato con lato 6 cm?","24 cm",["12 cm","18 cm","36 cm"],"Il perimetro è 4 × 6 = 24 cm."],
 ["Quale solido ha due basi circolari?","Cilindro",["Cubo","Piramide","Cono"],"Il cilindro ha due basi circolari parallele."],
 ["Quanti gradi misura un angolo piatto?","180°",["90°","120°","360°"],"L'angolo piatto misura 180 gradi."],
 ["Come si chiama il segmento dal centro alla circonferenza?","Raggio",["Diametro","Cordа","Perimetro"],"Il raggio unisce il centro a un punto della circonferenza."],
 ["Quale quadrilatero ha una sola coppia di lati paralleli?","Trapezio",["Rombo","Rettangolo","Quadrato"],"Il trapezio ha una coppia di lati paralleli."],
 ["Quante basi ha una piramide a base quadrata?","1",["2","4","6"],"La piramide ha una base e facce laterali triangolari."],
 ["Qual è l'area di un quadrato con lato 4 cm?","16 cm²",["8 cm²","12 cm²","20 cm²"],"L'area è 4 × 4 = 16 cm²."],
 ["Come si chiama la distanza dal centro a un punto del cerchio?","Raggio",["Diametro","Lato","Altezza"],"Il raggio è metà del diametro."]
 ]
 };
 for(const [sid,arr] of Object.entries(facts)){
  for(let g=1;g<=5;g++) for(let i=0;i<arr.length;i++){
   const [prompt,answer,wrong,explain]=arr[i];
   // Stesso nucleo didattico, ma formulazione contestualizzata per la classe.
   const prefix=g===1?"Osserva e rispondi: ":g===2?"Per la tua classe: ":g===3?"Ragiona e rispondi: ":g===4?"Domanda di ripasso: ":"Sfida esperto: ";
   let choices=[answer,...wrong];
   b.push(q(sid,prefix+prompt,choices,answer,explain,g));
  }
 }
 return b;
}
const bank=makeBank();
function render(){
 const root=$("#app");
 if(state.screen==="home") root.innerHTML=homeHTML();
 if(state.screen==="quiz") root.innerHTML=quizHTML();
 if(state.screen==="result") root.innerHTML=resultHTML();
 if(state.screen==="rank") root.innerHTML=rankHTML();
 bind();
}
function homeHTML(){
 return `<section class="hero"><div class="hero-emoji">🎓✨</div><h1>SUPER QUIZ</h1><p>Impara, gioca e conquista le stelle!</p><span class="chip">5 materie · 5 classi · 10 domande</span></section>
 <section class="panel"><label class="field-label" for="playerName">COME TI CHIAMI?</label><input class="field" id="playerName" maxlength="20" placeholder="Scrivi il tuo nome" value="${esc(state.name)}"><div style="height:16px"></div><div class="field-label">SCEGLI LA TUA CLASSE</div><div class="grade-grid">${[1,2,3,4,5].map(g=>`<button class="grade ${state.grade===g?'active':''}" data-grade="${g}">${g}ª</button>`).join("")}</div></section>
 <section class="panel"><div class="section-title">Scegli la materia</div><div class="subject-grid"><button class="subject ${state.subject==='mixed'?'active':''}" data-subject="mixed" style="--tint:#f0efff;--color:#6558e8"><span class="emoji">🎲</span><span>Tutte<small>Modalità mista</small></span></button>${subjects.map(s=>`<button class="subject ${state.subject===s.id?'active':''}" data-subject="${s.id}" style="--tint:${s.tint};--color:${s.color}"><span class="emoji">${s.emoji}</span><span>${s.name}<small>${s.desc}</small></span></button>`).join("")}</div></section>
 <button class="btn" id="start">🚀 INIZIA A GIOCARE</button><div class="actions"><button class="btn secondary" id="leaderboard">🏆 Classifica</button><button class="btn secondary" id="howto">❔ Come si gioca</button></div>
 <section class="panel muted" style="text-align:center">Funziona anche senza connessione dopo il primo caricamento. I punteggi restano salvati su questo dispositivo.</section>`;
}
function quizHTML(){
 const q=state.questions[state.index],s=subjects.find(x=>x.id===q.subject);
 return `<div class="quiz-head"><button class="chip" id="quit">← Esci</button><span>DOMANDA ${state.index+1} / 10</span><span>⭐ ${state.score}</span></div><div class="progress"><span style="width:${(state.index+1)*10}%"></span></div>
 <section class="panel question-card"><div class="q-emoji">${s.emoji}</div><div class="q-subject">${s.name.toUpperCase()} · ${q.grade}ª ELEMENTARE</div><div class="question">${q.prompt}</div><div class="answers">${q.choices.map((c,i)=>{let cls="answer";if(state.answered&&c===q.answer)cls+=" correct";else if(state.answered&&c===state.chosen)cls+=" wrong";return `<button class="${cls}" data-answer="${esc(c)}" ${state.answered?'disabled':''}><span>${String.fromCharCode(65+i)}. ${esc(c)}</span><span>${state.answered&&c===q.answer?'✓':state.answered&&c===state.chosen?'✕':''}</span></button>`}).join("")}</div>
 ${state.answered?`<div class="feedback ${state.chosen===q.answer?'good':'bad'}">${state.chosen===q.answer?'🎉 Bravissimo! Risposta esatta!':'💡 Non preoccuparti! La risposta corretta è: '+esc(q.answer)}<br><span style="font-weight:700">${esc(q.explain)}</span></div><button class="btn" id="next">${state.index===9?'🏆 VEDI IL RISULTATO':'CONTINUA →'}</button>`:''}</section>
 <div class="scoreline">⭐ Punteggio: ${state.score} punti</div>`;
}
function resultHTML(){
 const pct=state.score,medal=pct>=90?"🏆":pct>=70?"🥇":pct>=50?"🌟":"💪";
 const msg=pct>=90?"Straordinario! Sei un campione!":pct>=70?"Ottimo lavoro! Continua così!":pct>=50?"Bravo! Con un po' di allenamento farai ancora meglio.":"Non mollare! Ogni errore è un'occasione per imparare.";
 return `<section class="panel result"><div class="medal">${medal}</div><h2>Partita completata!</h2><div class="big-score">${pct} / 100</div><p class="muted">${msg}</p><span class="chip">${esc(state.name)} · ${state.grade}ª elementare</span><div style="height:20px"></div><button class="btn" id="again">🔄 GIOCA ANCORA</button><div style="height:10px"></div><button class="btn secondary" id="leaderboard">🏆 VEDI LA CLASSIFICA</button><div style="height:10px"></div><button class="btn secondary" id="home">⌂ TORNA ALLA HOME</button></section>`;
}
function rankHTML(){
 const scores=store.scores.sort((a,b)=>b.points-a.points).slice(0,50);
 return `<div class="row" style="margin:8px 0 16px"><button class="chip" id="home">← Home</button><div class="section-title" style="text-align:center;flex:3;margin:0">🏆 CLASSIFICA</div><button class="chip" id="reset">🗑 Reset</button></div><section class="panel"><p class="muted">Migliori 50 risultati salvati su questo dispositivo.</p>${scores.length?scores.map((s,i)=>`<div class="rank-row"><div class="rank">${i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1+'.'}</div><div><div class="rank-name">${esc(s.name)}</div><div class="rank-meta">${s.grade}ª elementare · ${new Date(s.date).toLocaleDateString('it-IT')}</div></div><div class="rank-points">${s.points} pt</div></div>`).join(""):`<div class="empty"><div>🏅</div><b>La classifica è vuota</b><p class="muted">Gioca la prima partita e conquista il podio!</p></div>`}</section>`;
}
function bind(){
 document.querySelectorAll("[data-grade]").forEach(b=>b.onclick=()=>{state.grade=+b.dataset.grade;render()});
 document.querySelectorAll("[data-subject]").forEach(b=>b.onclick=()=>{state.subject=b.dataset.subject;render()});
 const name=$("#playerName");if(name)name.oninput=()=>state.name=name.value;
 const start=$("#start");if(start)start.onclick=startGame;
 const rank=$("#leaderboard");if(rank)rank.onclick=()=>{state.screen="rank";render()};
 const how=$("#howto");if(how)how.onclick=()=>alert("Scegli il tuo nome, la classe e una materia. Rispondi a 10 domande: ogni risposta esatta vale 10 punti. Alla fine il risultato entra nella classifica di questo dispositivo.");
 const quit=$("#quit");if(quit)quit.onclick=()=>{if(confirm("Vuoi interrompere la partita?")){state.screen="home";render()}};
 document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>answer(b.dataset.answer));
 const next=$("#next");if(next)next.onclick=nextQuestion;
 const again=$("#again");if(again)again.onclick=startGame;
 const home=$("#home");if(home)home.onclick=()=>{state.screen="home";render()};
 const reset=$("#reset");if(reset)reset.onclick=()=>{if(confirm("Vuoi cancellare tutti i punteggi salvati su questo dispositivo?")){store.scores=[];render()}};
}
function startGame(){
 const input=$("#playerName");if(input)state.name=input.value.trim();
 if(!state.name){alert("Scrivi il nome del giocatore prima di iniziare.");$("#playerName")?.focus();return}
 let eligible=bank.filter(x=>x.grade===state.grade);
 if(state.subject!=="mixed")eligible=eligible.filter(x=>x.subject===state.subject);
 // Garantisce un campione casuale di dieci domande senza duplicati nella partita.
 state.questions=shuffle(eligible).slice(0,10);
 if(state.subject==="mixed"){
  const chosen=[];for(const s of subjects){const item=shuffle(eligible.filter(x=>x.subject===s))[0];if(item)chosen.push(item)}
  const rest=shuffle(eligible.filter(x=>!chosen.includes(x))).slice(0,10-chosen.length);
  state.questions=shuffle([...chosen,...rest]).slice(0,10);
 }
 state.index=0;state.score=0;state.chosen=null;state.answered=false;state.screen="quiz";render();
}
function answer(value){if(state.answered)return;state.chosen=value;state.answered=true;if(value===state.questions[state.index].answer){state.score+=10;beep(true)}else beep(false);render()}
function nextQuestion(){if(state.index<9){state.index++;state.chosen=null;state.answered=false;render()}else{const list=store.scores;list.push({name:state.name,grade:state.grade,points:state.score,date:new Date().toISOString()});store.scores=list;state.screen="result";render()}}
function beep(ok){if(!state.sound)return;try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return;const c=new C(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=ok?660:220;g.gain.value=.06;o.start();o.stop(c.currentTime+.12)}catch{}}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
$("#soundToggle").onclick=()=>{state.sound=!state.sound;$("#soundToggle").textContent=state.sound?"🔊":"🔇"};
render();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
