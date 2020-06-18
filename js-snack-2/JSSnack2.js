// JS Snack 2
// L’utente inserisce nome e cognome nei relativi input, al click su un bottone, concatenare i valori degli input e stampare in console.

// al click sul bottone
document.getElementById("btn").addEventListener("click", function(){

  // prendo le due variabili dal form
  var nome = document.getElementById("nome").value;

  var cognome = document.getElementById("cognome").value;

  // creo una terza variabile nome completo

  var nomeCompleto = nome + " " + cognome;

  console.log(nomeCompleto);

  document.getElementById("nomeCompleto").innerHTML = nomeCompleto;

})
