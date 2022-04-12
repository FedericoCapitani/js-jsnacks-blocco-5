/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
 */

const zucchine = 
[
    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 20
    },
    {
        varieta: 'faenza',
        peso: 40,
        lunghezza: 25
    },
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 31
    },
    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 30
    },
    {
        varieta: 'faenza',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'faenza',
        peso: 60,
        lunghezza: 25
    },
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 30
    },
    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 20
    },
    {
        varieta: 'faenza',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'faenza',
        peso: 60,
        lunghezza: 31
    }
]

// calcolare somma del peso di tutte le zucchine
let somma_peso = 0

zucchine.forEach((zucchina) => {
    somma_peso += zucchina.peso;
})

console.log(`le zucchine pesano ${somma_peso} grammi`);