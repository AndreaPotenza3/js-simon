//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const cells = document.getElementById("answers-form")
const instruction = document.getElementById("instructions")
let countdown = 30
const randomNumbers = []

// Generiamo 5 numeri casuali tra 1 - 50
for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random(50, 1) * 50)
    randomNumbers.push(number)
}

console.log(randomNumbers)

// Settiamo il countdown
setTimeout(timer, 5000)
    
function timer(){
    cells.classList.remove("d-none")
    instruction.classList.add('d-none')
    
}




setInterval(countdownTimer, 1000)


function countdownTimer(time){
    countdown = --countdown

    console.log(countdown)
}

