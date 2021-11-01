let cards = [] // array - ordered list of items
let cardSum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let deck = []

function startGame() {
    populateDeck()
    cards = []
    isAlive = true
    hasBlackJack = false
    drawCard()
    drawCard()
    renderGame()
}

function populateDeck() {
   for (var i = 2; i <= 11; i++) {
       deck.push(i,i,i,i)
   }
   // Add the royals (J/Q/K)
   for (var i = 1; i <= 3; i++) {
       deck.push(10,10,10,10)
   }
   console.log(deck)
}

function drawCard() {
    if(deck.length === 0) {
        console.log("Deck is empty!")
        return null
    }

    if(!isAlive) {
        console.log("You're already busted")
        return null
    }

    let index = Math.floor(Math.random()*deck.length)
    let value = deck[index]
    console.log("foo " + index + " " + value)
    deck.splice(Math.floor(Math.random()*deck.length), 1);
    cards.push(value)
    return value;

}

function renderGame() {
    // render out firstCard and secondCard
    let cardString = "Cards: "
    cardSum = 0
    for (var i = 0; i < cards.length; i++) {
        cardString += cards[i] + " "
        cardSum += cards[i]
    }

    cardsEl.textContent = cardString
    // render out ALL the cards we have
    sumEl.textContent = cardSum
    if (cardSum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (cardSum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    drawCard()
    renderGame()
}
