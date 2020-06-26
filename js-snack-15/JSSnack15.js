// Chiedi all'utente 10 numeri e calcola somma e media

var n = 10;
var numero;
var somma = 0;
var media = 0;

do{
  for (var i = 0; i < n; i++) {

    numero = parseInt(prompt("Prego inserisci il " + (i+1) + "° numero:")); //con parseInt ottengo già il numero intero inserito invece della stringa

    console.log(numero);

    if (!isNaN(numero)) { // se quello inserito dall'utente è un numero lo aggiungo a somma

      somma += numero;

    } else{
      //se quello inserito dall'utente non è un numero creo un alert e in più decremento i in modo che quando riparte il for continuo a chiedere l n esimo numero mancante. cioè quello alla posizione alla posizione i. altrimenti con i incrementata salterei un numero

      alert("è stato inserito qualcosa diverso da un numero");

      i--;
    }

  }
} while (isNaN(numero)); //controllo: se quello inserito non è un numero faccio ripartire il for


media = somma / n;

console.log("somma : " + somma + " media : " + media);
