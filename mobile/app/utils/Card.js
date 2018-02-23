export default function Card() {
  let suit;
  let value;
  let imgValue;


  this.setCard = function(theValue, theSuit, theImgValue){
    value = theValue;
    suit = theSuit;
    imgValue = theImgValue;
  };


  this.getSuit = function() {
    return suit;
  };


  this.getImgValue = function() {
    return imgValue;
  };


  this.getValue = function() {
    return value;
  }
}
