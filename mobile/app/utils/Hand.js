function Hand() {
  let hand = [];
  let newHand = [];


  this.addCard = function(card){
    hand.push(card);
  }


  this.getCard = function(position) {
    if (position < 0 || position >= hand.length){
      console.log('wrong card see code');
    }
    return hand[position];
  }


  this.getPosition = function(card){
    return hand.indexOf(card);
  }


  this.removePlayerCard = function(card){
    hand[hand.indexOf(card)] = null;
  }


  this.getCardCount = function() {
    return hand.length;
  }


  this.sortByValue = function() {
    while (hand.length > 0) {
      let pos = 0;  // Position of minimal card.
      let c = hand[0];  // Minimal card.
      for (let i = 1; i < hand.length; i++) {
        let c1 = hand[i];

        if (c1.getSuit() < c.getSuit() || (c1.getSuit() === c.getSuit() && c1.getValue() < c.getValue()) ) {
          pos = i;
          c = c1;
        }
      }
      hand.splice(pos, 1);
      newHand.push(c);
    }
    hand = newHand;
  }
}
