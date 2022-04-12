/* SNACK 3 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
 */
function reverseString(str){
    // divido la stringa in singoli caratteri
    let split_string = str.split("");
    // inverto i singoli caratteri e li metto dentro un array
    let reverse_array = split_string.reverse()
    // riunisco i caratteri in una stringa
    let joined_array = reverse_array.join("")

    return joined_array
}

const string = 'Ciao, come stai?'

let reversed_string = reverseString(string)

console.log(reversed_string);