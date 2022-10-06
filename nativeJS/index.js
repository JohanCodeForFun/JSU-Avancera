const prettyCard = function (card) {
  let suit, value

  switch (suit) {
    case 'HEARTS':
      "&hearts";
      break;
    case 'SPADES':
      "&spades";
      break;
    case 'DIAMONDS':
      "&diams";
      break;
    case 'CLUBS':
      "&clubs";
      break;
  
    default:
      break;
  }

  switch (value) {
    case "A":
      1
      break;
    case 2:
      2
      break;
  
    default:
      break;
  }

  return value + suit
}

// test case,
// console.log(prettyCard({ suit: 'HEARTS', value: 1 }), 'A♥')
// console.log(prettyCard({ suit: 'SPADES', value: 2 }), '2♠')
// console.log(prettyCard({ suit: 'DIAMONDS', value: 10 }), 'T♦')
// console.log(prettyCard({ suit: 'CLUBS', value: 11 }), 'J♣')