"use strict";

let deck = [
  { suit: "HEARTS", value: 1 },
  { suit: "HEARTS", value: 2 },
  { suit: "HEARTS", value: 3 },
  { suit: "HEARTS", value: 4 },
  { suit: "HEARTS", value: 5 },
  { suit: "HEARTS", value: 6 },
  { suit: "HEARTS", value: 7 },
  { suit: "HEARTS", value: 8 },
  { suit: "HEARTS", value: 9 },
  { suit: "HEARTS", value: 10 },
  { suit: "HEARTS", value: 11 },
  { suit: "HEARTS", value: 12 },
  { suit: "HEARTS", value: 13 },
  // 1, 2, 3, 4, 5
];


// Here's a JavaScript implementation of the Durstenfeld shuffle, an optimized version of Fisher-Yates:
// function shuffleArray(deck) {
//   for (let i = deck.length -1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     var temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp
//   }
//   return deck
// }

// ES6 version
function shuffleArray(deck) {
  for (let i = deck.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to array.length

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck;  
}

console.log(shuffleArray(deck))

// working on shuffle solution...
// let shuffle = (deck) => {
//   let temp = [];
//   console.log(deck);

//   for (let i = 0; i < deck.length; i++) {

//     // skapa funktion för att få ett random number
//     // med deck.length som max value, och -1 för att array startar från 0.

//     console.log("Loop count: " +i);
//     let RandomArrayValue = Math.floor(Math.random() * (deck.length -1));
//     temp.push(RandomArrayValue);
//     // deck.pop();


    // console.log(RandomArrayValue);
    // let shuffledCard = deck[RandomArrayValue];
    // temp.push(shuffledCard);
    // console.log(shuffledCard);
    // temp.push(shuffledCard);
    // let pushCard = deck[RandomArrayValue];
    // deck[RandomArrayValue].pop();
    // temp.push(pushCard);
    
//   }
//   return temp;
// };

// console.log(shuffle(deck));
