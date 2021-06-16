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

console.log(studenti)

