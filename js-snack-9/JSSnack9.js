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

  if (!isNaN(numero)) {//se il numero inserito dall'utente è un numero (non non è un numero) lo sommo altrimenti decremento la i e si rifarà un altro ciclo while con lo stesso valore si i perchè prima lo decremento poi lo incremento

    somma += numero; // += è la versione compatta di somma = somma +

  }else{

    i--;

  }

  i++;

}while (i < 5)

console.log("La somma è: " + somma);
