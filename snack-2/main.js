/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
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
        lunghezza: 17
    },
    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 30
    },
    {
        varieta: 'faenza',
        peso: 40,
        lunghezza: 26
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

const zucchine_lunghe = zucchine.filter((zucchina) => zucchina.lunghezza < 25)

console.log(zucchine_lunghe);

const zucchine_lunghe_over_25 = zucchine.filter((zucchina) => zucchina.lunghezza > 25)
console.log(zucchine_lunghe_over_25);

// somma pesi zucchine_lunghe

let somma = 0;

zucchine_lunghe.forEach((zucchina_lunga) => {
    somma += zucchina_lunga.peso
})

console.log(`lunghezza zucchine lunghe meno di 25: ${somma}`);

let somma_over25 = 0;

zucchine_lunghe_over_25.forEach((zucchina_lunga_over25) => {
    somma_over25 += zucchina_lunga_over25.peso
})

console.log(`lunghezza zucchine lunghe più di 25: ${somma_over25}`);