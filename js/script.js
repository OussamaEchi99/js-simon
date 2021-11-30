// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Variabile numeri
const numbers = [ 2, 7, 6, 11, 17 ];

// Con un ciclo For Scrivi all'utente ogni numero dell'array
let numberArray;
for (let i = 0; i < numbers.length; i++) {
    numberArray = numbers[i];
    alert(numberArray);
}

// Creo il timer della funzione
setTimeout(userInput, 30000);

let userNumber;
// Creo la funzione che verrà chiamata al finire del timer
function userInput() {
    // Creo un'array dove pusho ogni numero dell'utente
    let userArray = [];
    // Creo un'array dove pusho solo i numeri idovinati
    let correctNumbers = [];
    // Faccio un For per 5 volte per l'input dell'utente
    for (let i = 0; i < 5 ; i++) {
        userNumber = parseInt(prompt('Scivi il Primo numero'));

        userArray.push(userNumber);
    }

    let theFiveNumbers;
    // Creo un For dove posso mettere a confronto i numeri del sistema
    // e i numeri dati dall'utente
    for (let i = 0; i < userArray.length; i++) {
        theFiveNumbers = userArray[i];
        if ( numbers.includes(theFiveNumbers) ) {
            correctNumbers.push(theFiveNumbers);
        }
    }
    
    // Faccio l'output all'utente del risultato
    const result = `
    Hai indovinato ${correctNumbers.length} numeri.
    E sono ${correctNumbers}                                
    `
    alert(result);
}



