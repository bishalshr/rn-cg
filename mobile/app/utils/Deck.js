import Card from './Card';
export default function Deck() {
  let deck = [];
  let cardsUsed = 0;

  for (let i = 0; i < 52; i++) {
    deck[i] = new Card();
  }


  this.newDeck = function () {
    let cardCount = 0;

    for (let suit = 1; suit <= 4; suit++) {
      for (let value = 1; value <= 13; value++) {
        deck[cardCount].setCard(value, suit, value + 13 * (suit - 1));
        cardCount++;
      }
    }
  }


  this.shuffle = function () {
    for (let i = deck.length - 1; i > 0; i--) {
      let rand = parseInt(Math.random() * (i + 1));
      let temp = new Card();

      temp = deck[i];
      deck[i] = deck[rand];
      deck[rand] = temp;
    }
  }


  this.dealCard = function () {
    if (cardsUsed === deck.length) {
      console.log('no cards left');
    }
    cardsUsed++;
    return deck[cardsUsed - 1];
  }
}
