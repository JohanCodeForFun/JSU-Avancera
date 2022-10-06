let card = (value, suit) => {
  return {
    value,
    suit
  }
}


const prettyCard = function (card) {
let suit = card.suit;
let value = card.value;

  switch (value) {
    case 1:
      value = "A";
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
      value = "T";
      break;
    case 11:
      value = "J";
      break;
    case 12:
      value = "Q";
      break;
    case 13:
      value = "K";
      break;
  
    default:
      break;
  }
  
  switch (suit) {
    case 'HEARTS':
      suit = "♥";
      break;
    case 'SPADES':
      suit = "♠";
      break;
    case 'DIAMONDS':
      suit = "♦";
      break;
    case 'CLUBS':
      suit = "♣";
      break;
  
    default:
      break;
  }

  return value + suit
}



// console.log(prettyCard('HEARTS', 1));
// console.log(prettyCard('SPADES', 2));
// console.log(prettyCard('DIAMONDS', 10));
// console.log(prettyCard('CLUBS', 11));

// test case,
// console.log(prettyCard({ suit: 'HEARTS', value: 1 }), 'A♥')
// console.log(prettyCard({ suit: 'SPADES', value: 2 }), '2♠')
// console.log(prettyCard({ suit: 'DIAMONDS', value: 10 }), 'T♦')
console.log(prettyCard({ suit: 'CLUBS', value: 11 }))
console.log(prettyCard({ suit: 'HEARTS', value: 1 }))
console.log(prettyCard({ suit: 'SPADES', value: 2 }))
console.log(prettyCard({ suit: 'DIAMONDS', value: 10 }))
console.log(prettyCard({ suit: 'CLUBS', value: 11 }))