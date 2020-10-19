/**
 * 
 * Esercizio Cognomi
 * 
 */


 var surnames = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];

 //  1. Chiedere il Cognome all'utente
var surname = prompt('Inserisci pure il tuo cognome');

//  2. Inserirlo in un Array già esistente
surnames.push(surname);

//  3. Stampare la lista dei Cognomi in ordine alfabetico
var order = surnames.sort();
var items ='';

for ( var i = 0; i < surnames.length ; i++) {
    var item = surnames[i];

    items += '<li>' + item + '</li>';
}

document.getElementById('cognomi').innerHTML = items;


//  4. Marcare la posizione del cognome appena inserito

var position = order.indexOf(surname) + 1;

document.getElementById('new').innerHTML = position;