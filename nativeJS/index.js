// return object: card, value & suit 
let card = (value, suit) => {
  return {
    value,
    suit
  }
}

console.log(card(2, 3));


//push hearths cards into array
let hearts = [];

// create push loop to fill hearts deck
for (let i = 1; i <= 13; i++) {
  hearts.push({ suit: 'HEARTS', value: i })
}

console.log(hearts);


// build deck assignment
let deck = [];

let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']

for (let i = 0; i < suits.length; i++) {

  // console.log(suits[i]);
  console.log(suits[i]);
}

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