//Stampa le potenze di 2 fino a 1000.

var i = 0;

while (2**i < 1000){
  console.log("2 alla " + i + " = " + 2**i);
  i++;
}

// soluzioni alternative

// i = i*2 è come fare alla seconda poi alla terza poi alla quarta... (perchè moltiplichi il risultato un'altra volta per due)
for (var i = 1; i < 1000; i = i*2) {
  console.log(i);
}


//questa è più grossolana ma più esplicativa. nel senso che si spiega da se

var numero = 1;
var esponente = 1;

while (numero < 1000) {
  numero = 2 ** esponente;
  esponente++;
}
