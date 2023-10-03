/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function trovaIlNumPiùGrande(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let number1 = 7;
let number2 = 21;
let result = trovaIlNumPiùGrande(number1, number2);
console.log("Il numero più grande è: " + result);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let myNumber = 7;
if (7 !== 5) {
  console.log("not equal");
} else {
  console.log("Il numero è uguale a 5.");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numero = prompt("Inserisci un numero");
const numeroIntero = parseInt(numero);
if (numeroIntero % 5 === 0) {
  console.log("Il numero è divisibile per 5");
} else {
  console.log("Il numero non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function verifica(num1, num2) {
  if (num1 === 8 || num2 === 8) {
    return true;
  }
  return false;
}

const numb1 = 7;
const numb2 = 4;
const risultato = verifica(numb1, numb2);

if (risultato) {
  console.log("Uno dei numeri è 8 o la somma/differenza è 8.");
} else {
  console.log("Nessuna delle condizioni è soddisfatta");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totaleShoppingCart = 79;
let costoSpedizione = 10;
if (totaleShoppingCart > 50) {
  costoSpedizione = 0;
}
let ammontareTotale = totaleShoppingCart + costoSpedizione;
console.log("Ammontare totale da addebitare all'utente: " + ammontareTotale);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var numero1 = 7;
var numero2 = 2;
var numero3 = 9;

if (numero1 >= numero2 && numero1 >= numero3) {
  if (numero2 >= numero3) {
    console.log(numero1, numero2, numero3);
  } else {
    console.log(numero1, numero3, numero2);
  }
} else if (numero2 >= numero1 && numero2 >= numero3) {
  if (numero1 >= numero3) {
    console.log(numero2, numero1, numero3);
  } else {
    console.log(numero2, numero3, numero1);
  }
} else {
  if (numero1 >= numero2) {
    console.log(numero3, numero1, numero2);
  } else {
    console.log(nuemero3, numero2, numero1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
console.log(isNumber(47));
console.log(isNumber("47"));
console.log(isNumber("Quarantasette"));

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function verificaPariDispari(numero) {
  if (numero % 2 === 0) {
    return "Il numero è pari.";
  } else {
    return "Il numero è dispari.";
  }
}
var numeroDaControllare = 7;
var resultato = verificaPariDispari(numeroDaControllare);
console.log(resultato);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArray = [];
for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}
console.log(myArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

let mioArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mioArray[mioArray.length - 1] = 100;
console.log(mioArray);
