console.log("Welcome to WAR");

var cardRank = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
var cardSuit = ["Hearts","Spades","Clubs", "Diamonds"]
var maximumCardValue = 12 
var player1 = "Player 1"
var player2 = "Player 2"
var playground = []
player1.hand=[]
player2.hand=[]


// I'm starting at 2 as Index=0, so it's value will be 0
// and the Ace value will be highest at 12.

class Card {
    constructor(suit,rank,score,name) {
           this.suit = suit,
           this.rank = rank,
           this.score = score,
           this.name = name
    }
 }

class Deck {
   constructor() {
          this.cards = []
          this.cards.length = 0
          //generate deck using 0-12 as the values for ranks 2-Ace
          //with it going through suit by suit, with ranks in each suit
       for(let suitValue in cardSuit){
           for(let i=-1; i<maximumCardValue; i++) {
                let score = i+1;
                let rank = cardRank[i+1];
                let suit = cardSuit[suitValue];
                let name = (rank)+" of "+(suit);
                let card = new Card(suit,rank,score,name)
                this.cards.push(card);
           }

        }
    }
}

let newDeck = new Deck()
fullDeck = newDeck.cards

//shuffle deck with fisher-yates algorithm
//used started code from https://www.frankmitchell.org/2015/01/fisher-yates/

function shuffleDeck (x) {
    var i = 0
      , j = 0
      , temp = null
    for (let i = x.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = x[i]
      x[i] = x[j]
      x[j] = temp
    }
  }

let shuffledDeck = shuffleDeck(fullDeck)
shuffledDeck
console.log(newDeck)

//split deck in half
//player 1 first
console.log(newDeck);
function pullCard1 (){
    player1.hand.push(newDeck.cards)}

pullCard1()

console.log(pullCard1())

///execution of pulling the top card from each player //
