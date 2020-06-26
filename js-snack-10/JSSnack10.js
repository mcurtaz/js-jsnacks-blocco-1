//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var lista = ["pippo", "pluto", "paperino", "qui", "quo", "qua"];

var utente = prompt("Dobbiamo sapere se sei invitato. Prego inserisci il tuo nome:").toLowerCase(); // to lowerCase mette tutto in minuscolo. così evita errori di confronto tra i nomi della lista e quello dell'utente per la questione case sensitive

var invitato = false;

for (var i = 0; i < lista.length && invitato == false; i++) { // aggiungere nella condizione && invitato==false significa che se invitato diventa true quindi è stata trovata una corrispondenza il for smette di scorrere tutto l'array.

  lista[i] = lista[i].toLowerCase(); // to lowerCase mette tutto in minuscolo. così evita errori di confronto tra i nomi della lista e quello dell'utente per la questione case sensitive

  if (lista[i] == utente) {
    invitato = true;
  }

}

if (invitato == true) {
  console.log("Sei in lista!");
} else{
  console.log("Non sei in lista!");
}
