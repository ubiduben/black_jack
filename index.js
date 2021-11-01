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
   for (var i = 2; i <= 14; i++) {
       deck.push(i,i,i,i)
   }
}

let cardNames = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
function getCardName(cardVal) {
    return cardNames[cardVal - 2]
}

let cardValues = [2,3,4,5,6,7,8,9,10,10,10,10,11]
function getCardPoints(cardVal) {
    return cardValues[cardVal - 2]
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

    if(hasBlackJack) {
        console.log("You've already won")
        return null
    }

    let index = Math.floor(Math.random()*deck.length)
    let value = deck[index]
    console.log("drew a: " + getCardName(value) + " worth " + getCardPoints(value))
    deck.splice(Math.floor(Math.random()*deck.length), 1);
    cards.push(value)
    return value;

}

function renderGame() {
    // render out firstCard and secondCard
    let cardString = "Cards: "
    cardSum = 0
    for (var i = 0; i < cards.length; i++) {
        let card = cards[i]
        cardString += getCardName(card) + " "
        cardSum += getCardPoints(card)
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
    if (isAlive){
    drawCard()
    renderGame()}
    else {
        console.log("you need to start the game first.")
    }
}
