// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var somma = 0;
var numero = 0;

// for (var i = 0; i < 5; i++) {
//   numero = Number(prompt("Inserisci numero:"));

    //piccolo while per controllare che l'utente inserisca un numero
//   while (isNaN(numero)){
//   numero = Number(prompt("Inserisci numero:"));
//   }

//   somma += numero;
// }

var i = 0;

 do{

  numero = Number(prompt("Inserisci il " + (i+1) + "° numero:"));

  somma += numero;
  i++;
}while (i < 5 && !isNaN(numero))

console.log("La somma è: " + somma);
