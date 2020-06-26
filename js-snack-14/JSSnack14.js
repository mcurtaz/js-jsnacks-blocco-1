//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.



do{

 var somma = 0;

 var numero = prompt("Inserisci un numero di 4 cifre:");

 for (var i = 0; i < numero.length && numero.length == 4 && !isNaN(numero); i++) { //anche nelle condizioni del for controllo che numero sia un numero e che sia di 4 cifre altrimenti non entro neanche nel for

   console.log(numero[i]); // numero[i] si può trattare la stringa restituita dal prompt come fosse un array e quindi alla posizione numero[0] ci sarà il primo carattere della stringa e così via.

   somma += parseInt(numero[i]); // con parseInt trasformo il carattere alfanumerico della stringa alla posizione i in un numero e quindi ottengo la cifra da poter sommare alle altre cifre nelle altre posizioni
 }

}while (numero.length != 4 || isNaN(numero)); //controllo che il numero sia effettivamente un numero e che sia di 4 cifre altrimenti riparte il prompt

console.log(somma);
