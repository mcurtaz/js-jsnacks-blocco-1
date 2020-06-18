// JS Snack 6
// Nella pagina c'è un bottone#lanciaMoneta. Al click su un bottone, il programma genera un numero casuale (tra 0 e 9). Se il numero è pari mostra un img con la testa della moneta. Se è dispari mostra un'altra img con la croce della moneta.
var testa = document.getElementById("testa");
var croce = document.getElementById("croce");

// evento click sul bottone lancia
document.getElementById("lancia").addEventListener("click", function(){

  // creo un numero random da 0 a 9

  var num = Math.floor(Math.random() * 10);

  console.log(num);

  testa.classList.remove("display-none");

  croce.classList.remove("display-none");

  // se è pari metto classe display none a croce altrimenti la metto a Testa
  if (num % 2){
    croce.classList.add("display-none");
    testa.classList.add("roll");
  } else{
    testa.classList.add("display-none");
    croce.classList.add("roll");
  }

});
