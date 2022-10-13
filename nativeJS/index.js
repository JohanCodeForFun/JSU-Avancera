"use strict";

// build deck assignment
// let deck = [];

// let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']

// for (let i = 0; i < suits.length; i++) {
//   for (let j = 0; j < 13; j++) {
//     deck.push({ suit: suits[i], value: j + 1 })
//   }
// }

// console.log(deck);



function filter (a, f) {
  let newArray = []
  for (let i = 0; i < a.length; i++) {
      if (f(a[i])) {
          newArray.push(a[i])
      }
  }
  return newArray
}

// Learning experiences that made it possible to complete assignment:

// return object: card, value & suit 
// let card = (value, suit) => {
//   return {
//     value,
//     suit
//   }
// }

// console.log(card(2, 3));


//push hearths cards into array
// let hearts = [];

// // create push loop to fill hearts deck
// for (let i = 1; i <= 13; i++) {
//   hearts.push({ suit: 'HEARTS', value: i })
// }

// console.log(hearts);


// create push loop to fill deck of cards
// for (let i = 0; i < suits.length; i++) {
//   for (let j = 1; i < 13; j++) {
//   deck.push({ suit: suits[i], value: i })
//   }
// }

// hearts.push({  })
// hearts.push({ suit: 'HEARTS', value: 1 })

// desired outcome:
// let hearts = [
//     { suit: 'HEARTS', value: 1 },
//     { suit: 'HEARTS', value: 2 },
//     { suit: 'HEARTS', value: 3 },
//     { suit: 'HEARTS', value: 4 },
//     { suit: 'HEARTS', value: 5 },
//     { suit: 'HEARTS', value: 6 },
//     { suit: 'HEARTS', value: 7 },
//     { suit: 'HEARTS', value: 8 },
//     { suit: 'HEARTS', value: 9 },
//     { suit: 'HEARTS', value: 10 },
//     { suit: 'HEARTS', value: 11 },
//     { suit: 'HEARTS', value: 12 },
//     { suit: 'HEARTS', value: 13 }
// ];





// function find(array) {
//   return (array);
// };

// console.log(find([5, 300, 10, 15, 600]));







// let cykelmodell = ["crecesent"];

// console.log(cykelmodell);

// let cyklarLager = [...cykelmodell];

// console.log(cyklarLager);

// function addera(num1, num2, ...arg) {
//   return num1 + num2 + arg;
// }

// console.log(addera(3, 2, 14, 6))






// let array = [5, 10, 15];

// let find = function (array, f) {
//   for (let i = 0; i < array.length; i++) {
//     f()     array[i];
//     return array[i];
//   }
// };


// console.log(find([5, 10, 15], ))








// let repeat = function (string, number) {
//   let result = [];

//   for (let i = 0; i < number; i++) {
//     result.push(string);
//   }
//   return result
// };

// console.log(repeat('test', 3));

// let repeat2 = function(string, num) {
//   let repeatedString = [];

//   if (num > 0) {
//       for(let i = 0; i < num; i++) {
//           repeatedString.push(string);
//       }
//       return repeatedString;
//   }
// }

// console.log(repeat2('test', 3));

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
// console.log("hej: " + deck[0].value);

// let score = (deck) => {
//   // console.log(deck[0].value);

//   // hur kommer jag åt kortet value i array object?
//   // genom att ange array name, 'deck', sedan position [0],
//   // för att slutligen komma åt object key, value.

//   // GODKÄND!
//   // Efter att lyckat kommit åt input value, kämpade jag med att
//   // hur jag skulle kunna komma åt efterkommande input från deck array.
//   // vilket tog mig längre tid än väntat, då input är en array,
//   // och lätt går att loopa igenom array position med i,
//   // ex,   let value = deck[i].value;

//   // console.log(deck.length);
//   let result = 0;

//   for (let i = 0; i < deck.length; i++) {
//     let value = deck[i].value;

//     switch (value) {
//       case 1:
//         value = 11;
//         break;
//       case 2:
//         value = 2;
//         break;
//       case 3:
//         value = 3;
//         break;
//       case 4:
//         value = 4;
//         break;
//       case 5:
//         value = 5;
//         break;
//       case 6:
//         value = 6;
//         break;
//       case 7:
//         value = 7;
//         break;
//       case 8:
//         value = 8;
//         break;
//       case 9:
//         value = 9;
//         break;
//       case 10:
//         value = 10;
//         break;
//       case 11:
//         value = 10;
//         break;
//       case 12:
//         value = 10;
//         break;
//       case 13:
//         value = 10;
//         break;
//     }

//     result += value;
//     // console.log(result);
//   }
//   return result;
// };

// console.log(score([{ suit: 'HEARTS', value: 1 }]));
// console.log(score([{ suit: 'SPADES', value: 2 }]));
// console.log(score([{ suit: "SPADES", value: 1 }]));
// // console.log(
// //   score([
// //     { suit: "HEARTS", value: 2 },
// //     { suit: "HEARTS", value: 3 },
// //     { suit: "HEARTS", value: 4 },
// //   ])
// // );

// // score([{ suit: 'SPADES', value: 11 }])
// // score([{ suit: 'SPADES', value: 2 }])

// // let draw = (deck) => {
// //   let card = deck[0];
// //   deck.shift();
// //   return card;
// // }
// // draw(deck);

// // console.log(deck);

// // shuffle a deck of cards
// // let shuffle = (deck) => {
// //   let count = deck.length;
// //   while (count) {
// //     deck.push(deck.splice(Math.floor(Math.random() * count), 1) [0]);
// //     count -= 1;
// //   }
// // }

// // shuffle(deck);

// // Blackjack Logic, Function return a deck of cards
// // let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']

// // function createDeck() {
// //   // let deck = [];

// //   for (let i = 0; i < suits.length; i++) {
// //     for (let j = 0; j < 13; j++) {
// //       deck.push({ suit: suits[i], value: j + 1 })
// //     }
// //   }
// //   console.log(deck);
// //   return deck;
// // }

// // console.log(createDeck().length);
// // createDeck();
