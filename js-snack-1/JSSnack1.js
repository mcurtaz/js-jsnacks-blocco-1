// JS Snack 1
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var a = prompt("Inserisci il primo numero");

var b = prompt("Inserisci secondo numero");

// a = Number(a);

// b = Number(b);

if (isNaN(a) || isNaN(b)){

  document.getElementById("bigNumber").innerHTML = "Mi dispiace: posso accettare come input soltanto dei numeri.";

} else{

  if (a > b){
    console.log(a);
    document.getElementById("bigNumber").innerHTML = a;
  } if (b > a){
    document.getElementById("bigNumber").innerHTML = b;
    console.log(b);
  } else{
    document.getElementById("bigNumber").innerHTML = "i due numeri inseriti sono uguali";
    console.log(a + " = " + b)
  }

}
