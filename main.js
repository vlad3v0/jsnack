/*00000000000000000000000000000000000000000000000
000000000000 JSnack Exercise 00000000000000000000
000000000000000000000000000000000000000000000000*/

/* 1-1 - Chiedi all’utente il cognome, inseriscilo in un
array con altri cognomi e stampa la lista
ordinata alfabeticamente. Scrivi a che
posizione della lista il nuovo utente si trova */


// let surname = ['rossi', 'bianchi', 'mare'];

// console.log(surname);

// let surnameUser = prompt('Inserisci il tuo cognome!');

// console.log(surname);


// function insertSurname(surnameUser) {

//     if (surnameUser != ('' || 'surname') ) {

//         surname.push(surnameUser)

//         orderSurname = surname.sort();

//         console.log(surname);
        
//     } else {
//         console.log('Il cognome non è valido');
//     };

//     return
// }

// function showSurname() {
//     for (let a = 0; a < surname.length; a++) {

//         b = '<li> '  + surname[a] + ' ' + surname.indexOf(surname[a]) + ' </li>';
//         document.write(b);
//      };

//      return;
// };

// insertSurname(surnameUser);
// showSurname();


/* 1-3 Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while */

// let numberUser = 0;
// let number = [];
// let somma = 0;

// for (let a = 0; a < 5; a++) {

//     numberUser = +prompt('Number?');

//     number.push(numberUser);

//     somma += number[a];

// }

// console.log(number);
// console.log(somma);

/* 1-4 In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */

// let listaInvitati = ['Ciccio', 'Baruffo', 'Bogdan'];

// let nomeUtente = prompt('Buona sera!, mi dia il suo nome gentilmente')

// console.log(listaInvitati);
// console.log(nomeUtente);


// for (let a = 0; a < listaInvitati.length; a++) {
    
//     if (nomeUtente == listaInvitati[a]) {
//         console.log(`Salve ${nomeUtente}, è il benvenuto`);
//     } else {
//         console.log('Lei non è presente nella lista, mi dispiace');
//     }
// };

/* Crea un array vuoto
Chiedi per 6 volte all’utente di inserire un numero, se è
dispari inseriscilo nell’array */

// let box= [];
// let numeriUtente;

// for (let a = 0; a < 6; a++) {
//     let numeriUtente = +prompt('Inserisci 6 numeri');

//     if (numeriUtente % 2 == 0) {

//         box.push(numeriUtente);

//     } else {
        
//         console.log('numero dispari');

//     }
    
// }

// console.log(box);

/* una funzione per capire se la parola è palidroma */

// let word = prompt('Inserisci una parola palindrima', '').toLowerCase();
// let wordReverse = '';

// console.log(word);

// function checkPalindrome(word, wordReverse) {
    
//     for (let i = word.length -1; i >= 0; i--) {
//         wordReverse = wordReverse + word[i];
//         console.log(word[i]);
        
//     }
//     console.log(wordReverse);

//     if (word == wordReverse) {
//         document.writeln('E\' una parola palindroma')
//     } else {
//         document.writeln('Non è una parola palindroma')
//     }
    
// }

// checkPalindrome(word, wordReverse);

/* L'utente sceglie un numero da 1 a 5. 
Generiamo un numero pari o dispari e un numero random per il computer e
dichiariamo chi ha vinto
*/

// //  Creare funzione che genera un numero casuale tra un input minimo e uno massimo
// function generatoreRandom(min, max) {
//     return Math.floor(Math.random () * (max-min +1) +min );
// }
// //console.log(numeroRandom);

// // Creare funzione che stabilisce pari o dispari
  
// function giocata(n) {

//     console.log(n);
        
//     var pari = false;
      
//     if (n % 2 == 0) {
      
//         var pari = true;
//     } 
//     return pari;
        
// }
// //console.log(giocata);
  
//   var sceltaPariDispari = prompt("Scegli pari o dispari");
//   var playerNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));
//   document.writeln( "Numero inserito player: " + playerNumber + "<br>");
  

//   // Stampare a schermo la scelta dell'utente tra pari e dispari
  
//   if (sceltaPariDispari == "pari") {
  
//     var sceltaUtente = true;
//     // console.log('pari');
    
//     document.writeln("Il player ha scelto: Pari" + "<br>")
  
//   }
//   else if (sceltaPariDispari == "dispari"){
  
//     var sceltaUtente = false;
//     // console.log('dispari');
    
//     document.writeln("Il player ha scelto: Dispari" + "<br>")
  
//   }
//   else {
  
//     document.writeln("Il Player non ha inserito corretamente i dati" + "<br>");
  
//   }
  
//   // Riutilizzare la funzione per scegliere a caso un numero da 1 a 5 per il CPU
  
//   var cpuNumber = generatoreRandom(1, 5);
//   document.writeln('Numero Random CPU è: ' + cpuNumber + "<br>");
  
//   var somma = playerNumber + cpuNumber;
//   console.log(somma);
  
  
//   var sommacheck = giocata(somma);

// //   console.log(sommacheck);
// //   console.log(sceltaUtente);
// //   console.log(sceltaPariDispari);
  
// // Result
  
//   if (sommacheck === sceltaUtente) {
  
//     document.writeln("Hai vinto!!!");
  
//   }
//   else {
  
//     document.writeln("Hai perso!!!");
//   }


/* Inserisci un numero, se è pari stampa il numero, se è dispari stampa
il numero successivo */

// let n = +prompt('inserisci un numero ! ');

// function printResult(n) {

//     var result = n;
//     if (n % 2 == 0) {
//         document.write(n);
//     } else {
//         result = n + 1;
//         document.write(result);
//     }
//     return result;
// }

// printResult(n)

/* Generatore di "nomi cognomi" casuali, prendendo una lista di nomi e una di 
cognomi, Gatsby vuole generare una falsa lista di invitati */



// let listName = ["Rollo", "Bjorn", "Floki", "Ivor", "Ubbe", "Ragnar"];
// let listSurname = ["La Corazza", "Il Nero", "Il Pazzo", "Lo Storpio", "Lothbrock", "Lothbrok"];
// let numberNameFalse = +prompt("Quanti nomi falsi vuoi ? ")
// let falseList = [];

// function generatorRandom(min, max) {

//     return Math.floor(Math.random () * (max-min +1) + min );
// }

// function generatorFalseList(listName, listSurname) {

//     let nameRandom = generatorRandom(0, 5); // console.log(nameRandom);
//     let surnameRandom = generatorRandom(0, 5); // console.log(surnameRandom);

//     let name = listName[nameRandom]; // console.log(name);
//     let surname = listSurname[surnameRandom]; // console.log(surname);
//     let number = name + " " + surname ;  // console.log(falseName);

//     falseList.push(falseName);
    
//     return falseList;
// }

// function printFalseName(numberNameFalse) {

//     for (let n = 0; n < numberNameFalse; n++) {
        
//         generatorFalseList(listName, listSurname) + "<br>";

//     }
// };

// printFalseName(numberNameFalse);
// document.writeln(falseList);

// console.log(falseList);

/* Crea un Array di numeri e fai la somma di tutti gli elementi 
che sono in posizione dispari */


// let numberList = [1, 2, 4, 5, 8, 7, 3];
// let resultSumOdd= 0;

// for (let n = 0; n < numberList.length; n++) {
//     if (n % 2 == 1 ) {
        
//         resultSumOdd += numberList[n];
//     }
//     // console.log(resultSumOdd);
    
// }

// console.log(resultSumOdd);

/* Crea due array che hanno un numero di elementi diversi, Aggiungi elementi all'array
che ha meno elementi fino a quando ne avrà tanti quanti l'altro */

// let arrayOne = ["a", "b", "c", "d", "e"];
// let arrayTwo = ["f", "g", "h"];
// let newElement = "lettera";

// function checkIndexArray(array) {
//     let arrayIndex = array.length;
//     return arrayIndex;
// }

// function pushElement(array, newElement) {
//     array.push(newElement);
//     return array;
    
// }

// let array1 = checkIndexArray(arrayOne);
// let array2 = checkIndexArray(arrayTwo);
// console.log(typeof array1);
// console.log(typeof array2);

// function fullArray(a, b) {

//     while (array1 > array2) {
//         pushElement(arrayTwo, newElement);
//         console.log(arrayTwo);
//         array2++;
//     }
// }

// fullArray(array1, array2);

// document.writeln("Il primo Array ha " + array1 + " Elementi " + arrayOne + "<br>");
// document.writeln("Il secondo Array ha " + array2 + " Elementi " + arrayTwo + "<br>");

/* Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la
 somma degli elementi è minore di 50 */


// let arrayNumber = [];
// let sumNumber = 0;

// while (sumNumber <= 50 ) {
//     let number = +prompt("Inserisci un numero");
//     arrayNumber.push(number);
//     sumNumber += number;
// }

// document.writeln(arrayNumber);


