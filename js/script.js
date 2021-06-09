// Consegna

// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// ------------------------------------

// 1. 16 numeri random tra 1 e 100 - no duplicati
var random = []
for (var i = 0; i < 16; i ++){
    random.push = Math.floor(Math.random() * 100 + 1);

}
document.getElementById('random').innerHTML += random;

// 2. Chiedere 84 volte un numero tra 1 e 100 - no  duplicati

for (var i = 0; i < 84; i ++){
    numero = parseInt(prompt('Inserisci un numero'));
    document.getElementById('numero').innerHTML +=  numero;
}

// 3. End partita se il numero è lo stesso del AI, vietato o raggiunto il limite di numeri

// 4. Comunicare punteggio: quante volte inserito un numero consentito