//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

document.getElementById("btn").addEventListener("click", function(){

  var number = parseInt(document.getElementById("number").value); // fino a N numeri N preso dall'input

  var cubi = []; // array di cubi

  for (var i = 1; i <= number; i++) {

    //cubi di [i - 1] perchè i parte da 1 quindi con i - 1 metto il primo risultato all'indice 0 dell'array che così non rimane vuoto

    cubi[i - 1] = Math.pow(i, 3); // Math.pow fa le potenze il primo elemento è la base il secondo la potenza in questo caso i (apice)3. i alla terza

    cubi[i - 1] = i ** 3; // Si può scrivere anche così. è come scrivere una potenza i alla 3. i**2 sarebbe i alla seconda quadrato di i
  }
  console.log(cubi);
});



// Metodo più semplice\elegante\intuitivo senza array.

document.getElementById("btn2").addEventListener("click", function(){

  var number = parseInt(document.getElementById("number").value);

  for (var i = 1; i <= number; i++) {
    //cicla con i che va da 1 a number e stampa di volta in volta i al cubo
    console.log(i**3);
  }

});
