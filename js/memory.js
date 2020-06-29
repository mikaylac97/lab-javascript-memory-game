class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed =  0;
  }

  shuffleCards() {
    for(let i = 0; i <= this.cards.length -2; i++){
      const j = Math.floor(Math.random() * this.cards.length);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    console.log(this.cards)
  }
//  console.log(this.cards);
  
//         for (var i = this.cards.length - 1; i >= 0; i--) {
//             var j = Math.floor(Math.random() * (i+1));
//             var temp = this.cards[i];
//             this.cards[i] = this.cards[j];
//             this.cards[j] = temp;

//         }
//          return this.cards;
    


  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    } return false;
  }
  isFinished() {
    if(this.pairsGuessed >= this.cards.length / 2){
      return true;
    } return false;
     
  }
}