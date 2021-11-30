// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numbers = [ 2, 7, 6, 11, 17 ];

let numberArray;
for (let i = 0; i < numbers.length; i++) {
    numberArray = numbers[i];
    alert(numberArray);
}

setTimeout(userInput, 3000);


let userNumber;
function userInput() {
    let userArray = [];
    for (let i = 0; i < 5 ; i++) {
        userNumber = parseInt(prompt('Scivi il Primo numero'));

        userArray.push(userNumber);
    }

    let theFiveNumbers;
    for (let i = 0; i < userArray.length; i++) {
        theFiveNumbers = userArray[i];
        if ( numberArray === theFiveNumbers ) {
            alert('Hai indovinato il numero!')
        }
    
    }
    console.log(userArray);
    console.log(theFiveNumbers);
}



