// JS Snack 5
// Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta. N.B. trascura pure i controlli!

document.getElementById("calcola").addEventListener("click", function(){

  // prendo le variabili dal form
  var num1 = document.getElementById("n1").value;
  var num2 = document.getElementById("n2").value;
  var op = document.getElementById("operazione").value;
  var risultato;
// la variabile op è una stringa. la confronto per sapere quale operazione devo eseguire.
  if (op == "somma"){
    // uso number() per evitare che l'operazione mi restituisca una concatenazione di stringhe invece che una somma di numeri
    risultato = Number(num1) + Number(num2);
  } else if(op == "sottrai"){
    risultato = num1 - num2;
  } else if(op == "moltiplica"){
    risultato = num1 * num2;
  } else if(op == "dividi"){
    // aggiungo un piccolo controllo per evitare che si divida per 0 altrimenti eseguo la divisione
    if (num2 == 0){
      alert("Non so dividere per 0. Sorry.")
    } else{
      risultato = num1 / num2;
    }
  }

// stampo il risultato
  document.getElementById("risultato").innerHTML = risultato.toFixed(2);
});
