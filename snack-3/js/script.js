var numeri = [5,5,5];
var calc = 0;
for (var i = 0; i < numeri.length; i++) {
    calc += numeri[i];    
}
var media = calc / numeri.length;

console.log(calc);
console.log(media);

// Array con tre giocatori di basket quindi i due saranno due oggetti
// con le loro valori:

// array:
var giocatori = [
    {
        // 1:
        nome : 'Lebron',
        cognome : 'James',
        anno : '2021',
        punteggio : 10
    },
    {
        // 2
        nome : 'Kyle',
        cognome : 'Irving',
        anno : '2021',
        punteggio : 10
    },
    {
        // 3
        nome : 'Derrick',
        cognome : 'Rose',
        anno : '2021',
        punteggio : 10
    }
];


var pun = 0;
for (var x = 0; x < giocatori.length; x++) {
    pun += giocatori[x].punteggio;
    console.log('somma', pun)
}
var mediaPunteggio = pun / giocatori.length;
console.log('media', mediaPunteggio);



