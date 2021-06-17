/* Traccia:
Creare un array di 3 studenti (3 oggetti in un array, quindi): 
Proprietà: nome cognome age e descrizione
Per nome, cognome ed age assegnate direttamente nel codice i valori che volete.
ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.
Successivamente, con dei prompt chiediamo di volta in volta all’utente 
la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà.
Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;)
Stampiamo con un console.log il risultato di questo array di studenti aggiornato.
*/

// Creazione della array con i 3 oggetti dentro:
var studenti = [
    {
        // 1
        nome : 'Gianni',
        cognome : 'Ciano',
        age : 11,
        descrizione : ''
    },
    {
        // 2
        nome : 'Pippo',
        cognome : 'Baudo',
        age : 13,
        descrizione : ''
    },
    {
        // 3
        nome : 'Aristotele',
        cognome : 'Veggente',
        age : 15,
        descrizione : ''
    }
];

// Ora si cicla all'interno della array e oggetti per prendere fuori la descrizione
// per farla modificare dall'utente:


for (var i = 0; i < studenti.length; i++) {
    var thisStudent = studenti[i];
    var thisNameSurname = thisStudent.nome + ' ' +  thisStudent.cognome;
    var description = prompt('Inserisci la descrizione dello studente' + ' ' + thisNameSurname);
    studenti[i].descrizione = description;
    // Per stampare a video in HTML serve un for in:

    for (var key in studenti[i]) {
        console.log(key, studenti[i][key]);
        // document.getElementById('result').innerHTML += '<li>' + key + ' ' + studenti[i][key] + '</li>';
        document.getElementById('result').innerHTML += `<li> ${key} ${studenti[i][key]} </li>`;
    }
}

