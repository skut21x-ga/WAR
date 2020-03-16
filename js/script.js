console.log("Welcome to WAR");

var cardRank = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
var cardSuit = ["Hearts","Spades","Clubs", "Diamonds"]
var maximumCardValue = 12 
var player1 = []
var player2 = []
var playground = []
var warground = []
player1.hand=[]
player2.hand=[]
playground.player1card=[]
playground.player2card=[]
let i=0;
warground.player1card=[]
warground.player2card=[]


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

//console.log("Deck generated and shuffled:")

//split deck in half 
function pullCard (){
while(i<26)
  {player1.hand.push(newDeck.cards.shift());
   player2.hand.push(newDeck.cards.shift())
   i++}
}

pullCard()

///execution of pulling the top card from each player //

function playWar (){
  if ((player1.hand.length>0) && (player1.hand.length<52)){
    comparedCards()
  }
  else if (player1.hand.length==0){
        console.log("Player 2 WINS!")}
  else {console.log("Player 1 WINS!")}

function comparedCards () {{
  playground.player1card.push=(player1.hand.shift())
  playground.player2card.push=(player2.hand.shift())
  let cardPlayed1 = playground.player1card
  let cardPlayed2 = playground.player2card

  //announcing cards drawn:
  console.log("Player 1 draws a " + cardPlayed1.push.name+
              " & Player 2 draws a " + cardPlayed2.push.name)

  //if player 1 wins:
  if(cardPlayed1.push.score>cardPlayed2.push.score){
    console.log("Player 1 wins the round!")
    player1.hand.push(cardPlayed1.push)
    player1.hand.push(cardPlayed2.push)
    cardPlayed1=[]
    cardPlayed2=[]
    console.log("Cards Left for Player 1("+player1.hand.length+") & Player 2("+player2.hand.length+")")
    playWar ()
    }

  //if player 2 wins:
  else if  (cardPlayed1.push.score<cardPlayed2.push.score){
    console.log("Player 2 wins the round!")
    player2.hand.push(cardPlayed1.push)
    player2.hand.push(cardPlayed2.push)
    cardPlayed1=[]
    cardPlayed2=[]
    console.log("Cards Left for Player 1("+player1.hand.length+") & Player 2("+player2.hand.length+")")
    playWar ()
    }
  else {goToWar()}

  //if war/tie:
  function goToWar (){
    console.log("It's a tie! Let's go to WAR!")
    playground.player1card.push=(player1.hand.shift())
    playground.player1card.push=(player1.hand.shift())
    playground.player1card.push=(player1.hand.shift())
    warground.player1card.push=(player1.hand.shift())
    playground.player2card.push=(player2.hand.shift())
    playground.player2card.push=(player2.hand.shift())
    playground.player2card.push=(player2.hand.shift())
    warground.player2card.push=(player2.hand.shift())
    warcardPlayed1 = warground.player1card
    warcardPlayed2 = warground.player2card
    console.log("player1 warhand:"); console.log(warground.player1card)
    console.log("player2 warhand:"); console.log(warground.player2card)
    console.log("WAR: Player 1 draws a " + warcardPlayed1.push.name+
      " & Player 2 draws a " + warcardPlayed2.push.name)

      //if player 1 wins WAR:
    if(warcardPlayed1.push.score>warcardPlayed2.push.score){
    console.log("Player 1 wins the round!")
    player1.hand.push(warcardPlayed1.push)
    player1.hand.push(warcardPlayed2.push)
    player1.hand.push(cardPlayed1.push)
    player1.hand.push(cardPlayed2.push)
    cardPlayed1=[]; cardPlayed2=[]
    warground.player1card=[];     warground.player1card=[];
    console.log("Cards Left for Player 1("+player1.hand.length+
    ") & Player 2("+player2.hand.length+")")
    playWar ()
    }

    //if player 2 wins WAR:
    if(cardPlayed1.push.score<cardPlayed2.push.score){
      console.log("Player 2 wins the round!")
    player2.hand.push(cardPlayed1.push)
    player2.hand.push(cardPlayed2.push)
    player2.hand.push(warcardPlayed1.push)
    player2.hand.push(warcardPlayed2.push)
    cardPlayed1=[]; cardPlayed2=[]
    warground.player1card=[];     warground.player1card=[];
    console.log("Cards Left for Player 1("+player1.hand.length+
    ") & Player 2("+player2.hand.length+")")
    playWar ()
    }
    
    else {goToWar()}
  }}}}

playWar ()