"use strict";
// let deck = [
//   { suit: "HEARTS", value: 1 },
//   { suit: "HEARTS", value: 2 },
//   { suit: "HEARTS", value: 3 },
//   { suit: "HEARTS", value: 4 },
//   { suit: "HEARTS", value: 5 },
//   { suit: "HEARTS", value: 6 },
//   { suit: "HEARTS", value: 7 },
//   { suit: "HEARTS", value: 8 },
//   { suit: "HEARTS", value: 9 },
//   { suit: "HEARTS", value: 10 },
//   { suit: "HEARTS", value: 11 },
//   { suit: "HEARTS", value: 12 },
//   { suit: "HEARTS", value: 13 },
// ];

let score = (deck) => {
  // console.log(deck[0].value);

  // hur kommer jag åt kortet value i array object?
  // genom att ange array name, 'deck', sedan position [0],
  // för att slutligen komma åt object key, value.

  // GODKÄND! 
  // Efter att lyckat kommit åt input value, kämpade jag med att
  // hur jag skulle kunna komma åt efterkommande input från deck array.
  // vilket tog mig längre tid än väntat, då input är en array,
  // och lätt går att loopa igenom array position med i,
  // ex,   let value = deck[i].value;


  // console.log(deck.length);
  let result = 0;
  
  for (let i = 0; i < deck.length; i++) {
    let value = deck[i].value;

    switch (value) {
      case 1:
        value = 11;
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
  return result;
};

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
