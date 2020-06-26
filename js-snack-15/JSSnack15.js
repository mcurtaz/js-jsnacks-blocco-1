// Chiedi all'utente 10 numeri e calcola somma e media

var n = 10;
var numero;
var somma = 0;
var media = 0;

do{
  for (var i = 0; i < n; i++) {

    numero = parseInt(prompt("Prego inserisci il " + (i+1) + "° numero:"));

    console.log(numero);

    if (!isNaN(numero)) {

      somma += numero;

    } else{

      alert("è stato inserito qualcosa diverso da un numero");

      i--;
    }

  }
} while (isNaN(numero)); //controllo: se quello inserito non è un numero faccio ripartire il for


media = somma / n;

console.log("somma : " + somma + " media : " + media);
