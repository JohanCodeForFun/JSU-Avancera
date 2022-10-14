// 'use strict';

let shuffle = (deck) => {
    let count = deck.length;
    while (count) {
      deck.push(deck.splice(Math.floor(Math.random() * count), 1) [0]);
      count -= 1;
    }
  }
  
  // shuffle(deck);
  
  // let deck = [
  //   { suit: 'HEARTS', value: 1 },
  //   { suit: 'HEARTS', value: 2 },
  //   { suit: 'HEARTS', value: 3 },
  //   { suit: 'HEARTS', value: 4 },
  //   { suit: 'HEARTS', value: 5 },
  //   { suit: 'HEARTS', value: 6 },
  //   { suit: 'HEARTS', value: 7 },
  //   { suit: 'HEARTS', value: 8 },
  //   { suit: 'HEARTS', value: 9 },
  //   { suit: 'HEARTS', value: 10 },
  //   { suit: 'HEARTS', value: 11 },
  //   { suit: 'HEARTS', value: 12 },
  //   { suit: 'HEARTS', value: 13 }
  // ]
  
  
  
  
  
  // Ingen ny array behöver skapas i shuffle-funktionen – värdena ska byta plats i array:en som skickas in som ett argument till createDeck.
  
  
  // let draw = (deck) => {
  //   let card = deck[0];
  //   deck.shift();
  //   return card;
  // }
  // draw(deck);
  
  // console.log(deck);
  
  
  
  
  
  
  // Blackjack Logic, Function return a deck of cards
  // let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']
  
  // function createDeck() {
  //   // let deck = [];
    
  //   for (let i = 0; i < suits.length; i++) {
  //     for (let j = 0; j < 13; j++) {
  //       deck.push({ suit: suits[i], value: j + 1 })
  //     }
  //   }
  //   console.log(deck);
  //   return deck;
  // }
  
  
  // console.log(createDeck().length);
  // createDeck();