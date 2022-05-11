/*--------------
    FUNCTIONS
---------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  /*--------------
       MAIN
---------------*/
// Il computer deve generare 16 numeri casuali tra 1 e 100.
let count = 0;

const bombsList = [];

while(bombsList.length < 16){
    const bombs = getRndInteger(1, 100);
   
    // I numeri non possono essere duplicati.  
   if(!bombsList.includes(bombs)){
        bombsList.push(bombs);
    }
}

console.log(bombsList);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
const userNumbers = [];

let gameStatus = false;

while ( gameStatus === false ){
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
        gameStatus = true;
        alert("hai perso")  
     // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
        console.log(`${"il tuo puntenggio è:"} ${userNumbers.length}`);
    };
}

if(userNumbers.length === 9){
    alert("Hai vinto!!!")
}

console.log (userNumbers);
