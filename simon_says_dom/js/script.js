//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const cells = document.getElementById("answers-form")
const instruction = document.getElementById("instructions")
const numbersList = document.getElementById("numbers-list")
const countdown = document.getElementById("countdown")
let countdownTimer = 0
const formNumbers = document.getElementsByClassName("form-control")
const randomNumbers = []
const userNumbers =[]

// Generiamo 5 numeri casuali tra 1 - 50
for (let i = 0; i < 5; i++) {
    const number = Math.floor(Math.random(50, 1) * 50)
    randomNumbers.push(number)
}
console.log(randomNumbers)


// Creiamo la lista di numeri

for (let i = 0; i < randomNumbers.length; i++) {
    let numbers = randomNumbers[i]

    const liNumbers = document.createElement('li')
    liNumbers.innerHTML = numbers
    numbersList.append(liNumbers)
}

// Settiamo il countdown

//countdown.append(countdownTimer)
countdown.innerHTML = countdownTimer

const thirtySec =setInterval(countdownSetUp, 1000)

// Validazione

const send = document.getElementById("form-control")
send.addEventListener('submit', function (event) {

    event.preventDefault()

    console.log(send)

    userNumbers.push(send.value)
    console.log('ho cloccato')
    console.log(userNumbers)
})



// Funzioni

function countdownSetUp(time){
   
    countdown.innerHTML = countdownTimer
    
    countdownTimer = --countdownTimer

    if (countdownTimer === -2) {
        clearInterval(thirtySec)
        cells.classList.remove('d-none')
    instruction.innerHTML = 'Insersci i numeri visualizzati nella schermata precendete!'
        
    numbersList.classList.add('d-none')
    
    countdown.classList.add('d-none')

    //countdown.classList.add('d-none')
    }


    console.log(countdownTimer)
}

