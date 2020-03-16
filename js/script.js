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
round = 0  

console.log("Testing)")
playWar ()
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
console.log("Testing)")
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
        return "Player Two WINS the GAME!"}
  else return "Player One WINS the GAME!"}

function comparedCards () {{
  playground.player1card.push=(player1.hand.shift())
  playground.player2card.push=(player2.hand.shift())
  let cardPlayed1 = playground.player1card
  let cardPlayed2 = playground.player2card

  //announcing cards drawn:
  round=round+1;
  console.log("Round #"+round+". Player One draws a " + cardPlayed1.push.name+
              " & Player Two draws a " + cardPlayed2.push.name)

  //if Player One wins:
  if(cardPlayed1.push.score>cardPlayed2.push.score){
    console.log("Player One wins the round!")
    player1.hand.push(cardPlayed1.push)
    player1.hand.push(cardPlayed2.push)
    cardPlayed1=[]
    cardPlayed2=[]
    
    console.log("Cards Left for Player One("+player1.hand.length+") & Player Two("+player2.hand.length+")")
    playWar ()
    }

  //if Player Two wins:
  else if  (cardPlayed1.push.score<cardPlayed2.push.score){
    console.log("Player Two wins the round!")
    player2.hand.push(cardPlayed1.push)
    player2.hand.push(cardPlayed2.push)
    cardPlayed1=[]
    cardPlayed2=[]
    console.log("Cards Left for Player One("+player1.hand.length+") & Player Two("+player2.hand.length+")")
    playWar ()
    }
  else {goToWar()}}

  //if war/tie:
  function goToWar (){
    console.log("It's a tie! Let's go to WAR!")
    console.log("Testing)")
    //if (player1.hand.length<4){return "But...Player 1 doesn't have enough cards for war. Player 1 loses"}
    //else if (player2.hand.length<4){return "But... Player 2 doesn't have enough cards for war. Player 2 loses"}
    //else{
    //player 1 put down 4 cards including a warcard
 //   playground.player1card.push=(player1.hand.shift())
 //   playground.player1card.push=(player1.hand.shift())
 //   playground.player1card.push=(player1.hand.shift())
    warground.player1card.push=(player1.hand.shift())
    //player 2 put down 4 cards including a warcard
//    playground.player2card.push=(player2.hand.shift())
 //   playground.player2card.push=(player2.hand.shift())
  //  playground.player2card.push=(player2.hand.shift())
    warground.player2card.push=(player2.hand.shift())
    console.log("Player One warcard: "+warground.player1card.push.name)
    console.log("Player Two warcard: "+warground.player2card.push.name)
      //warEnd()

      function warEnd(){
      //if Player One wins WAR:
    if(warground.player1card.push.score>warground.player2card.push.score){
    console.log("Player One wins the round!");
    //return both war cards to winner
    player1.hand.push(warground.player2card.push);
    player1.hand.push(warground.player1card.push);
    //return player 1 cards
 //   player1.hand.push(playground.player1card.push)
 //   player1.hand.push(playground.player1card.push)
    player1.hand.push(playground.player1card.push);
  //  player1.hand.push(playground.player1card.push)
    //return player 2 cards to player 1
//    player1.hand.push(playground.player2card.push)
//    player1.hand.push(playground.player2card.push)
//    player1.hand.push(playground.player2card.push)
//    player1.hand.push(playground.player2card.push);
    cardPlayed1=[]; cardPlayed2=[];
    warground.player1card=[];     warground.player1card=[];
    console.log("Cards Left for Player One("+player1.hand.length+
    ") & Player Two("+player2.hand.length+")");
    x=player1.hand.length+player2.hand.length;
    console.log(x);

    playWar ()
    }

    //if Player Two wins WAR:
    if(warground.player1card.push.score<warground.player2card.push.score){
      console.log("Player Two wins the round!")
    //return both war cards to winner
    player2.hand.push(warground.player2card.push)
    player2.hand.push(warground.player1card.push)
    //return player 1 cards
    player2.hand.push(playground.player1card.push)
 //   player2.hand.push(playground.player1card.push)
//    player2.hand.push(playground.player1card.push)
    //return player 2 cards to player 1
 //   player2.hand.push(playground.player2card.push)
    player2.hand.push(playground.player2card.push)
//    player2.hand.push(playground.player2card.push)
    cardPlayed1=[]; cardPlayed2=[]
    warground.player1card=[];     warground.player1card=[];
    console.log("Cards Left for Player One("+player1.hand.length+
    ") & Player Two("+player2.hand.length+")")
    x=player1.hand.length+player2.hand.length

    console.log(x)
    playWar ()
    }

    else {
          console.log(
          "We've had enough war. It's peacetime!"+" Returning cards to their owners")
          //return both war cards to owners
          player2.hand.push(warground.player2card.push)
          player1.hand.push(warground.player1card.push)
          //return player 1 cards
          player1.hand.push(playground.player1card.push)
   //       player1.hand.push(playground.player1card.push)
   //       player1.hand.push(playground.player1card.push)
   //       player1.hand.push(playground.player1card.push)
          //return player 2 cards to player 2
          player2.hand.push(playground.player2card.push)
   //       player2.hand.push(playground.player2card.push)
   //       player2.hand.push(playground.player2card.push)
   //       player2.hand.push(playground.player2card.push)
          cardPlayed1=[]; cardPlayed2=[]
          warground.player1card=[];     warground.player1card=[];
          console.log("Cards Left for Player One("+player1.hand.length+
          ") & Player Two("+player2.hand.length+")")
          x=player1.hand.length+player2.hand.length

          console.log(x)
          playWar ()}
          
        }}
      }
playWar ()