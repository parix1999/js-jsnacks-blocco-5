var palla = {
    nome : 'palla',
    peso : 10
}

// attraverso un prompt si modifica il peso:
palla.peso = prompt('peso');

// array dove inserire l'oggetto palla:
var giochi = [];

giochi.push(palla);
console.log(palla)

var newGame = prompt('Inserisci un nuovo oggetto');
var newWeight = prompt('Inserisci il peso');

giochi.push({
    nome : newGame,
    peso: newWeight
})
console.log(giochi);
