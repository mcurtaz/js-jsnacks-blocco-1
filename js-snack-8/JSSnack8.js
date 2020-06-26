//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var par1 = prompt("Inserisci prima parola");
var par2 = prompt("Inserisci seconda parola");

if (par1.length>par2.length) {
  console.log(par2);
  console.log(par1);
} else if (par2.length>par1.length){
  console.log(par1);
  console.log(par2);
} else {
  console.log("Le parole sono uguali");
}
