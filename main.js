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

while (userNumbers.length < 9){
    let num = Number(prompt("Inserrisci un numero tra 1 e 100:"))
    
    // L’utente non può inserire più volte lo stesso numero.
    if(userNumbers.includes(num)){
        alert("inserisci un numero diverso")
    }else if( num > 100 ){
        //Controllo che i numeri inseriti vadano da 1 a 100
        alert ("inserisci un numero COMPRESO TRA 1 e 100")
    }else if( num < 100){
      userNumbers.push(num);  
    };
    
    // Se il numero è presente nella lista dei numeri generati, la partita termina
    if (bombsList.includes(num)){
        alert("hai perso")
        bombsList.length = 0   
     // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
        console.log(userNumbers.length);
        userNumbers.length = 0
    };
}

console.log (userNumbers);

//altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.