/* SNACK 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
 */

function fusione_array(array_1, array_2){
    let new_array = []
    /* for (let i = 0; i < array_1.length; i++) {
        new_array.push(array_1[i])
        new_array.push(array_2[i])
    }  */
    if(array_1.lenght === array_2.lenght){
        array_1.forEach((element, index) =>{
            new_array.push(element);
            new_array.push(array_2[index])
        })
    }

    return new_array
}

const primo_array = ['a', 'b', 'c', 'd']
const secondo_array = [1,2,3,4]

let array_unito = fusione_array(primo_array, secondo_array)
console.log(array_unito);