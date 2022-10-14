"use strict";

let score = (deck) => {

  let result = 0;
  let aceCount = 0;
  
  for (let i = 0; i < deck.length; i++) {
    let value = deck[i].value;

    if (value === 1) {
      aceCount++;
    }

    switch (value) {
      case 1:
        value = 1;
        break;
      case 2:
        value = 2;
        break;
      case 3:
        value = 3;
        break;
      case 4:
        value = 4;
        break;
      case 5:
        value = 5;
        break;
      case 6:
        value = 6;
        break;
      case 7:
        value = 7;
        break;
      case 8:
        value = 8;
        break;
      case 9:
        value = 9;
        break;
      case 10:
        value = 10;
        break;
      case 11:
        value = 10;
        break;
      case 12:
        value = 10;
        break;
      case 13:
        value = 10;
        break;
    }

    result += value;
    // console.log(result);
  }
  if (result < 12 && aceCount >= 1) {
    result +=10
  }
  console.log(aceCount);
  return result;
};


console.log(score([{ suit: 'HEARTS', value: 1 }]));
console.log(score([{ suit: 'HEARTS', value: 11 }, { suit: 'HEARTS', value: 1 }]));
console.log(score([{ suit: 'HEARTS', value: 1 }, { suit: 'SPADES', value: 1 }, { suit: 'DIAMONDS', value: 1 }]) + ' << should equal, 13');
console.log(score([{ suit: 'HEARTS', value: 1 }, { suit: 'SPADES', value: 1 }, { suit: 'DIAMONDS', value: 1 }, { suit: 'CLUBS', value: 1 }]) + ' << should equal, 14');

// console.log(score([{ suit: 'HEARTS', value: 1 }]));
// console.log(score([{ suit: 'SPADES', value: 2 }]));
// console.log(score([{ suit: "SPADES", value: 1 }]));
// console.log(
//   score([
//     { suit: "HEARTS", value: 2 },
//     { suit: "HEARTS", value: 3 },
//     { suit: "HEARTS", value: 4 },
//   ])
// );

// score([{ suit: 'SPADES', value: 11 }])
// score([{ suit: 'SPADES', value: 2 }])

// let draw = (deck) => {
//   let card = deck[0];
//   deck.shift();
//   return card;
// }
// draw(deck);

// console.log(deck);

// shuffle a deck of cards
// let shuffle = (deck) => {
//   let count = deck.length;
//   while (count) {
//     deck.push(deck.splice(Math.floor(Math.random() * count), 1) [0]);
//     count -= 1;
//   }
// }

// shuffle(deck);

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
