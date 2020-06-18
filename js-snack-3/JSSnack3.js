// JS Snack 3
// Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.

document.getElementById("btnColore").addEventListener("click", function(){

  // prompt per inserimento numero

  var num = parseInt(prompt("Inserisci numero"));

  // variabile con "indirizzo" del paragrafo a cui cambia lo sfondo
  var paragrafo = document.getElementById("colore");

 // verifica che num sia effettivamente un numero
if (!isNaN(num)){

 // assegno una classe diversa a seconda del valore di num
  if (num == 0){
    paragrafo.className = "bg-blue";
  } else if (num < 0){
    paragrafo.className = "bg-red";
  } else {
    paragrafo.className = "bg-green";
  }


} else{
  alert("Non è possibile inserire input che non siano numeri");
}


});
