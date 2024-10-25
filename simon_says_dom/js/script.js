//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const cells = document.getElementById("answers-form")
const instruction = document.getElementById("instructions")
const numbersList = document.getElementById("numbers-list")
const countdown = document.getElementById("countdown")
let countdownTimer = 1
const formNumbers = document.getElementsByClassName("form-control")
const randomNumbers = []
const userNumbers =[]
const inputsElement = document.querySelectorAll('input')
const messageElement = document.getElementById('message')

// Generiamo 5 numeri casuali tra 1 - 50
////for (let i = 0; i < 5; i++) {
    ////const number = Math.floor(Math.random(50, 1) * 50)
    ////randomNumbers.push(number)
//}
////console.log(randomNumbers)

// while

while(randomNumbers.length < 5) {
    const number = Math.floor(Math.random(50, 1) * 50) +1
    if (!randomNumbers.includes(number)) {
        randomNumbers.push(number)
    }
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

countdown.innerText = countdownTimer

const thirtySec =setInterval(function () {

    countdownTimer = --countdownTimer 

    countdown.innerText = countdownTimer

    if (countdownTimer === 0) {

        clearInterval(thirtySec)

    cells.classList.remove('d-none')

    instruction.innerText = 'Insersci i numeri visualizzati nella schermata precendete!'
        
    numbersList.classList.add('d-none')
    
    countdown.classList.add('d-none')
}
},1000)




// Validazione


cells.addEventListener('submit', function (event) {

    event.preventDefault()

    let currentCount = 0

    for (let i = 0; i < inputsElement.length; i++) {
        const inputsNum = parseInt(inputsElement[i].value);

        console.log(inputsNum)

        if(!isNaN(inputsNum) && inputsNum >= 1 && inputsNum <= 50 && !userNumbers.includes(inputsNum)) {
            console.log('pusho')
        }

        //if(tCount++randomNumbers.includes(inputsNum)) {
            //curren
        //}
        userNumbers.push(inputsNum)
        //messageElement.textContent = `Hai indovinato ${currentCount} numeri su 5`
    }

    for (let i = 0; i < userNumbers.length; i++) {

        const userNumbersElement = userNumbers[i];

         if(randomNumbers.includes(userNumbersElement)) {
            currentCount++
        }
        
    }
    messageElement.textContent = `Hai indovinato ${currentCount} numeri su 5`
})




// Funzioni


