// chiedi due numeri con prompt e stampa il maggiore

var num1 = prompt("Inserisci primo numero:");
var num2 = prompt("Inserisci secondo numero:");


if (num1>num2) {
  console.log("il maggiore è: " + num1);

} else if (num1<num2) {
  console.log("il maggiore è: " + num2);
} else {
  console.log("I due numeri sono uguali");
}
