let firstCard = 6
let secondCard = 9
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack= false
let isAlive = true
let message=""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent ="Cards: " + cards[0] + " " + ards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Draw card?"
    } else if (sum === 21){
        message = "Blackjack!"
        hasBlackJack = true
    }else if (sum > 21) {
        message = "Lost!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    console.log("Pulling a new card from the deck!")

    let card = 9
    sum += card
    renderGame()


}



