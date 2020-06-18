// JS Snack 4
// Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.

document.getElementById("btnNumero").addEventListener("click", function(){

 // variabile con numero random tra 1 e 10
  var num = Math.floor(Math.random() * 10 + 1);

  console.log(num);

// classList.add per ripristinare le due classi ogni volta che viene premuto il bottone
  document.getElementById("numero").classList.add("pari", "dispari");

// se il numero è pari il resto della divisione per due è 0. se la condizione è vera tolgo la classe pari. altrimenti tolgo la classe dispari
  if ((num % 2) == 0){
    document.getElementById("numero").classList.remove("pari");
  } else {
    document.getElementById("numero").classList.remove("dispari");
  }

});
