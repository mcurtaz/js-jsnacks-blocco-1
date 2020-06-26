//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var array = [];
var num;

for (var i = 0; i < 6; i++) {

  do{
    num = parseInt(prompt("Prego inserire il " + (i+1) + "° numero"));

    if (num % 2) { //se num è dispari num%2 da uno (% restituisce il resto della divisione per interi "il due ci sta n volte con resto di:") La condizione è booleana e assegna vero per tutto quello che è diverso da 0, false o stringa vuota. quindi se è uno è vero e pusha il numero nell'array. se num è pari num%2 è 0 che in booleano diventa falso e esce dall'if senza pushare il num nell array
      array.push(num);
    }

  } while(isNaN(num)); //controlla che l'utente inserisca effettivamente un numero altrimenti faccio ripartire il prompt

}

console.log(array);
