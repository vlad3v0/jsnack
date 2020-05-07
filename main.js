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

//  Creare funzione che genera un numero casuale tra un input minimo e uno massimo
function generatoreRandom(min, max) {
    return Math.floor(Math.random () * (max-min +1) +min );
  
  }
  //console.log(numeroRandom);
  
  var playerParioDisp = prompt("Scegli pari o dispari");
  
  var playerNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));
  document.writeln( "Numero inserito player: " + playerNumber + "<br>");
  
  // Creare funzione che stabilisce pari o dispari
  
  function giocata(number) {
  
    var pari = true;
  
    if (number % 2 != 0) {
  
      var pari = false;
    }
    return pari;
    
  }
  //console.log(giocata);
  // Stampare a schermo la scelta dell'utente tra pari e dispari
  
  if (giocata === "pari") {
  
    var pari = true;
    console.log('pari');
    
    document.writeln("Il player ha scelto: Pari" + "<br>")
  
  }
  else if (giocata === "dispari"){
  
    var dispari = false;2
    console.log('dispari');
    
    document.writeln("Il player ha scelto: Dispari" + "<br>")
  
  }
  else {
  
    document.writeln("Il Player non ha inserito corretamente i dati" + "<br>");
  
  }
  
  
  // Riutilizzare la funzione per scegliere a caso un numero da 1 a 5 per il CPU
  
  var cpuNumber = generatoreRandom(1, 5);
  document.writeln('Numero Random CPU è: ' + cpuNumber + "<br>");
  
  
  
  var somma = playerNumber + cpuNumber;
  //console.log(somma);
  
  
  var sommacheck = giocata(somma);
  //console.log(sommacheck);
  
  if (sommacheck === true) {
  
    document.writeln("Hai vinto!!!");
  
  }
  else {
  
    document.writeln("Hai perso!!!");
  }
  