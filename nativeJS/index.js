"use strict";
let deck = [
  // { suit: "HEARTS", value: 1 },
  // { suit: "HEARTS", value: 2 },
  // { suit: "HEARTS", value: 3 },
  // { suit: "HEARTS", value: 4 },
  // { suit: "HEARTS", value: 5 },
  // { suit: "HEARTS", value: 6 },
  // { suit: "HEARTS", value: 7 },
  // { suit: "HEARTS", value: 8 },
  // { suit: "HEARTS", value: 9 },
  // { suit: "HEARTS", value: 10 },
  // { suit: "HEARTS", value: 11 },
  // { suit: "HEARTS", value: 12 },
  // { suit: "HEARTS", value: 13 },
  1, 2, 3, 4, 5
];

let shuffle = (deck) => {
  let temp = [];
  console.log(deck);

  for (let i = 0; i < deck.length; i++) {

    // skapa funktion för att få ett random number
    // med deck.length som max value, och -1 för att array startar från 0.

    let RandomArrayValue = Math.floor(Math.random() * (deck.length -1));
    // console.log(RandomArrayValue);
    let shuffledCard = deck[RandomArrayValue];
    temp.push(shuffledCard);
    console.log(shuffledCard);
    // temp.push(shuffledCard);
    // let pushCard = deck[RandomArrayValue];
    // deck[RandomArrayValue].pop();
    // temp.push(pushCard);
    
  }
  return temp;
};

console.log(shuffle(deck));
