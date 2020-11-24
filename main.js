/*00000000000000000000000000000000000000000000000
000000000000 JSnack Exercise 00000000000000000000
000000000000000000000000000000000000000000000000*/

/* const lunganewLocal = "lunga";
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


/* Crea un Array vuoto e chiedi all'utente un numero da inserire nell'array
Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando
la somma degli elementi è minore di 50 */

// let arrayNumber = [];
// let limitedNumbArray = 50;
// let somma = 0;

// let cycle = true;

// while (cycle == true) {

//     let number = +prompt('Inserisci un numero');

//     if ( somma + number >= limitedNumbArray) {
//         cycle = false;

//     } else {
//         arrayNumber.push(number);
//         somma = somma + number;
//     }

//     console.log(arrayNumber);
//     console.log('la somma è ' + somma);
// }

/* Fai inserie un numero, che chiameremo N, all'utente.
Genera N array, ognuno formato da 10 numeri casuali da 
1 a 100. Al termine della generazione, stampa */

// let N = +prompt('Inserisci il numero di array');
// let listArray = [];

// function generatorRandom(min, max) {

//     return Math.floor(Math.random () * (max-min +1) + min );
// }

// function createArray() {

//     let array = [];
//     for (let i = 0; i < 10; i++) {
        
//         let element = generatorRandom(1, 100);
//         array.push(element);

//     }
//     return array;
// }

// function generateNArray(N) {

//     for (let i = 0; i < N; i++) {
//         let newArray = createArray();
//         listArray.push(newArray);

//         console.log(newArray);
//     }
//     return listArray;

// }


// generateNArray(N);

// document.write(listArray)
// console.log(listArray);

/* Crea un array di array. L'array padre si chiamerà Studenti e
ogni array figlio è un classe di studenti.
Dentro ogni array figlio avremo dei nomi. Stampiamo a schermo: 
classe 0 = Nome,Nome, Nome
classe 1 = Nome, Nome, Nome 
ecc */

// let studenti = [];
// let classe = [];
// let nome = [' Nome ', ' Nome ', ' Nome '];

// for (let i = 0; i < 5; i++) {
//     studenti.push(classe);
//     classe.push(nome);
//     document.write("classe " + i + " : " + classe[i] + "<br>")
    
// }

// console.log(studenti);

/* Dare la possibilità di inserire due parole. VErificare tramite
una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga */


// let wordUser = prompt("inserisci 2 parole");
// console.log(wordUser);

// let arrayWord = wordUser.split(' ');
// console.log(wordUser);

// console.log(arrayWord);

// let firstWord = arrayWord[0];
// let secondWord = arrayWord[1];

// console.log(firstWord);
// console.log(secondWord);

// if (firstWord.length == secondWord.length) {
//     document.writeln(firstWord + " " + secondWord)
// } else if (firstWord.length > secondWord.length) {
//     document.writeln(firstWord)

// } else if (firstWord.length < secondWord.length) {
//     document.writeln(secondWord)
// }


/* Creare un oggetto che descriva uno studente con le seguenti propietà:
nome, cognome e età. Stampare a schermo atraverso il for in tutte le propietà. Poi
creare un array di oggetti studenti. Ciclare su tutti gli studeti per ognuno nome e cognome */



// let student = createStudent(); console.log(student);
// let students = [];

// function createStudent() {
    
//     let name = prompt('Insert your name');
//     let surname = prompt('Insert your surname');
//     let age = prompt('Insert your age');
//     return {
//         name,
//         surname,
//         age,
//     }
// }

// function printStudent(student) {
    
//     for (let key in student) {
//         document.writeln(key + ': ' + student[key] + '<br>');
//     }
// }


// function insertStudent(student) {
//     students.push(student);

// }

// function printStudents() {
    
//     for (let count = 0; count < students.length; count++) {
//         document.writeln(student.name + ' ' +student.surname + '<br>')
//     }
// }
// printStudent(student);
// insertStudent(student);
// console.log(students);

// insertStudent(student);
// insertStudent(student);
// insertStudent(student);

// printStudents();

/* Il Software riceve in input un lungo testo e una serie di parole da censurare.
Restituice il testo con xx al posto delle parole censurate.
Stampa un "badword index" calcolato come il numero di parole censurate su il 
numero di parole totali */

// let text = prompt('inserisci una frase lorem ipsum');
// let newBadWord = prompt('Inserisci una Bad Word');
// let badWord = ['stupido', 'deficente', 'tonto', 'cretino'];
// badWord.push(newBadWord);
// let IndexBadWord = {
//     'totalWord': 0,
//     'totalBadWordCheck': 0
// };

// console.log(text);
// console.log(badWord);

// function censureText(text, badWord) {

//     let wordWords = text.split(' ');
//     console.log(wordWords);

//     for (let a = 0; a < wordWords.length; a++) {

//         console.log(wordWords[a]);
    
//         if (badWord.includes(wordWords[a])) {

//             console.log('trovata');
//             wordWords[a] = 'xxxxx';
            
//             IndexBadWord.totalBadWordCheck++;
        
//         } else {

//             console.log('non trovata');
//         }
    
//     }

//     IndexBadWord.totalWord = wordWords.length;

//     console.log(wordWords.length);
//     console.log(IndexBadWord.totalBadWordCheck);
    
    

//     text = wordWords.join(' ');
//     return text;
// }

// document.writeln(censureText(text, badWord) + '<br>');

// document.write('Sono state trovate ' + IndexBadWord.totalBadWordCheck + ' Bad Word ' + ' su un totale di ' + IndexBadWord.totalWord + ' parole');


/* Creare un array di oggetti: Ogni oggetto descriverà una
bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

// let bicycle1 = {};
// let bicycle2 = {};
// let bicycles = [];


// function createBicycle() {
    
//     let objBicycle = {
//         'nome': prompt('Inserisci il nome della tua bicicletta'),
//         'peso': prompt('Quanto pesa la tua bicicletta?')
//     };
//     return objBicycle ;
// }


// function insertBicycle(a) {
//     bicycles.push(a);
// }

// function calcHighBicycle(a,b) {
//     if (a > b) {
//         console.log('è pesante ! cambia bici è un consiglio');
//     } else {
//         console.log('bella bici ! è leggera');
//         document.write('Il modello ' + b.nome + ' è la bici più leggera')
//     }
// }

// bicycle1 = createBicycle();
// bicycle2 = createBicycle();
// // console.log(bicycle1);
// // console.log(bicycle2);

// insertBicycle(bicycle1);
// insertBicycle(bicycle2);
// console.log(bicycles);

// calcHighBicycle(bicycle1, bicycle2);

/* Creare un array di oggetti riguardanti squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli
subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno
tutte settate a 0. 
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti */

// let teamsFootball = [];

// function generateRandom(min, max) {
//     return Math.floor(Math.random () * (max-min +1) +min );
// }

// const team1 =  {
//     'name': '',
//     'totalPoint': generateRandom(1, 80),
//     'faultLoseOut': generateRandom(0, 60)
// };
// team1.name = 'Juve';
// teamsFootball.push(team1);

// console.log(teamsFootball);

// const team2 =  {
//     'name': '',
//     'totalPoint': generateRandom(1, 80),
//     'faultLoseOut': generateRandom(0, 60)
// };
// team2.name = 'Milan';
// teamsFootball.push(team2);

// console.log(teamsFootball);

/* Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età. Stampare a
schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo
nell’ordine: nome, cognome e età. */

// let students = []
// let studente1 = {
//     'name': "Gio",
//     'surname': "Cali",
//     'age': 20
// };

// let studente2 = {
//     'name': "Gina",
//     'surname': "Kovacevich",
//     'age': 21
// };

// let studente3 = {
//     'name': "John",
//     'surname': "Bear",
//     'age': 21
// };


// for (let key in studente1) {
//     document.writeln('key: ' + key + ' - value: ' + studente1[key] + '<br>');
// }
// students.push(studente1, studente2, studente3);

// console.log(students);

// function createStudent() {
//     let student = {
//     'name': prompt('Come Ti chiami'),
//     'surname': prompt('Qualè il tuo cognome?'),
//     'age': +prompt('Quanti anni hai?')
//     }

//     console.log(student);
//     return student;

// }

// let newStudent = createStudent();

// students.push(newStudent);

// console.log(students);

/* Crea 10 oggetti che rappresentano una zucchina,
indicandone per ognuno varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

// let zucchine = [];
// let numberVeg = 10;
// let typeVeg = ['Lunga', 'Corta', 'Bianca', 'Tonda']

// function generateRandom(min, max) {
//     return Math.floor(Math.random() * (max-min +1) + min );
// }

// function generateRandomType(min, max) {
//     let i = Math.floor(Math.random() * (max-min +1) + min );
//     return typeVeg[i];
// }



// function createVegetables(n) {
//     for (let i = 0; i < n; i++) {
//         let zucchini = {
//             'variety': generateRandomType(0, 3),
//             'weight': generateRandom(0.1, 4),
//             'width': generateRandom(5, 20)
//         };

//         console.log(zucchini);
        
//         zucchine.push(zucchini);

//     }
//     return zucchine;
// }

// createVegetables(numberVeg);

// console.log(zucchine);

// function sumWeightVeg() {
//     let sum = 0;
//     for (let i = 0; i < zucchine.length; i++) {
//         sum += zucchine[i].weight;
        
//     }
//     return sum;
// }

// let totalWeight = sumWeightVeg();

// console.log(totalWeight);




/* ^
   |
   |
   |
   |
   V
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm.
Infine stampa separatamente quanto pesano i due
gruppi di zucchine */

// let zucchineCorte = [];
// let zucchineLunghe = [];
// // let zucchineDivise = sumWidth(zucchineCorte, zucchineLunghe);

// function sumWidth(a){
//     let element = 0;
//     for (let i = 0; i < a.length; i++) {
//         element += a[i];
//     };
//     return element;
// }

// function chekSeparateWeight(array) {
//     for (let a = 0; a < array.length; a++) {
//         let zucchina = zucchine[a];
//         if (zucchina.width < 15) {
//             zucchineCorte.push(zucchina.width);
//             console.log('zuk pic ' + zucchina.width);
//         } else {
//             zucchineLunghe.push(zucchina.width);
//             console.log('zuk grande ' + zucchina.width);
//         }
//     }
// }

// chekSeparateWeight(zucchine);
// console.log(zucchineCorte);
// console.log(zucchineLunghe);


// let sumZukCorte = sumWidth(zucchineCorte);
// let sumZukLunghe = sumWidth(zucchineLunghe);

// console.log(sumZukCorte);
// console.log(sumZukLunghe);


/* 
Un oggetto rappresenta una finestra di un browser e contiene due
campi: un array di tab aperte, e un numero che indica l’indice della tab
aperta nell’array
{
“Tab” : [“Facebook”, “GitHub”, “Gmail”],
“Active_tab” : 0
}
Il software deve guardare se c’è un social aperto e eliminarlo dalle tab ,
nel caso la tab fosse attiva, deve attivare la successiva

*/
// let tabActive = "Youtube";
// let windowBrowser = {
//     "tab" : ["Facebook", "GitHub", "Gmail"],
//     "active_tab" : 0
// }

// console.log(windowBrowser);

// function checkActiveTab(windowBrowser, tabActive) {

//     console.log(windowBrowser.tab);
//     console.log(tabActive);
//     // console.log(windowBrowser);

//     for (let i = 0; i < windowBrowser.tab.length; i++) {

        
//         if (tabActive == windowBrowser.tab[i]) {
//             console.log('trovata una tab aperta ' + 'la tab aperta è ' + windowBrowser.tab[i]);

//             windowBrowser.tab.splice(i, 1);
//             windowBrowser.active_tab = 1;
//             document.writeln("Hey! stata trovata una scheda attiva")

//         } else {
//             console.log('non funziona ');
//         }
//     }
//     if (windowBrowser.active_tab == 0) {

//         document.writeln("Non è stata trovata una scheda attiva")

//     }
// }

// checkActiveTab(windowBrowser, tabActive);

// console.log(windowBrowser);


/* ^
   |
   |
   |
   |
   V
Si scriva una funziona che accetti una stringa come argomento e la
ritorna girata (es. Ciao -> oaiC) */

// let stringa = prompt('Inserisci una parola');

// function reverseString(stringa) {

//     stringaDaRigirare = stringa.split("");
//     console.log(stringaDaRigirare);

//     stringaDaRigirare.reverse();
//     console.log(stringaDaRigirare);

//     resultStringaReverse = stringaDaRigirare.join("")
//     console.log(resultStringaReverse);

//     return resultStringaReverse;
// };

// let stringaReverse = reverseString(stringa);

// console.log("La parola rigirata è " + stringaReverse);



/* ^
   |
   |
   |
   |
   V
Scrivi una funzione che fonda due array prendendo alternativamente gli
elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

// let arr1 = [1, 2, 3, 4];
// let arr2 = ['a', 'b', 'c', 'd'];
// let arrResult = [];

// function concatArray(arr1, arr2) {
   
//    for (let index = 0; index < arr1.length; index++) {

//      arrResult = arrResult.concat(arr2[index], arr1[index]);
      
//    };

//    return arrResult;
// }

// console.log(concatArray(arr1, arr2));


/* ^
   |
   |
   |
   |
   V
Si scriva una funzione che accetta tre argomenti, un array e due numeri.
La funzione ritornerà il numero di elementi all’interno dell’array compresi
tra i due numeri */

// let arrayDiNumeri = [1,2,3,4,5,6,7,8,9,0];
// let numeroA = 3;
// let numeroB = 5;

// function numeroElementiTraIntervalli(arrayDiNumeri, numeroA, numeroB) {
   
//    let intervalloNumeri;
//    intervalloNumeri = arrayDiNumeri.slice(numeroA, numeroB)
//    console.log(intervalloNumeri);

//    let counter = intervalloNumeri.length;

//    console.log('il numero di elementi al\'interno dell intervallo è ' + counter);
// }

// numeroElementiTraIntervalli(arrayDiNumeri, numeroA, numeroB); 



/* Basket
ESERCITAZIONE
*Basket*
Il software deve generare casualmente le statistiche di gioco di
100 giocatori di basket per una giornata di campionato.
In particolare vanno generate per ogni giocatore le seguenti
informazioni, facendo attenzione che il numero generato abbia
senso:
-
Codice Giocatore Univoco (formato da 3 lettere
maiuscole casuali e 3 numeri)
-
Numero di punti fatti
-
Numero di rimbalzi
-
Falli
-
Percentuale di successo per tiri da 2 punti
-
Percentuale di successo per da 3 punti
Una volta generato il “database”, il programma deve chiedere
all’utente di inserire un Codice Giocatore e il programma
restituisce le statistiche. */

let databasePlayer = [];

let player = {
   "id": generateID(),
   "point": 0,
   "rimbalzi": 0,
   "fault": 0,
   "2-poin-success-rate ": 0,
   "3-poin-success-rate ": 0,
};

console.log(databasePlayer);
console.log(player);


function randomNumber(max, min) {
   let number = Math.floor((Math.random() * (max - min)) + min);
   return number;
};

function generateID() {

   let numberid = randomNumber(999, 100);
   
   let letterid = "";

   for (let index = 0; index < 3; index++) {

      let stringAlphabet = "ABCDEFGHILMNOPQRSTUVZ";
      let numberLetter = randomNumber(21,1);
      letterid += stringAlphabet.charAt(numberLetter);
      
   };

   return numberid + letterid
};