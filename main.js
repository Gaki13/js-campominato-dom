// Il computer deve generare 16 numeri casuali tra 1 e 100.
let count = 0;

const bombsList = [];

while(count !== 16){
    const bombs = Math.floor(Math.random() * 100) + 1;
   
    // I numeri non possono essere duplicati.  
   if(!bombsList.includes(bombs)){
        bombsList.push(bombs);
    }
    count++
}

console.log(bombsList);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
const userNumbers = [];

while (userNumbers.length < 10){
    let num = Number(prompt("Inserrisci un numero tra 1 e 100:"))
    
    // L’utente non può inserire più volte lo stesso numero.
    if(userNumbers.includes(num)){
        alert("inserisci un numero diverso")
    }else{
      userNumbers.push(num);  
    };
}

console.log (userNumbers);

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.