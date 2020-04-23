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