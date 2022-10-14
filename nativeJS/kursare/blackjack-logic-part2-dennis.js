let suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];
let values = [
  { 1: 1 },
  { 2: 2 },
  { 3: 3 },
  { 4: 4 },
  { 5: 5 },
  { 6: 6 },
  { 7: 7 },
  { 8: 8 },
  { 9: 9 },
  { 10: 10 },
  { 11: 11 },
  { 12: 12 },
  { 13: 13 },
];

let fat = false;

function score(card) {
  let vector = [];
  for (let i = 0; i < card.length; i++) {
    if (card[i].value > 9) {
      vector.push(10);
    } else {
      vector.push(card[i].value);
    }
  }

  vector.sort((a, b) => b - a);
  console.log(vector);

  let sum = 0;
  for (let i = 0; i < vector.length; i++) {
    let remain = vector.length - i;
    if (vector[i] === 1) {
      if (sum > 11 - remain) {
        sum = sum + 1;
      } else {
        sum = sum + 11;
      }
    } else {
      sum = sum + vector[i];
    }
  }
  return sum;
}

function createDeck() {
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < 13; j++) {
      if (suits[i] === "HEARTS") {
        deck.push({ suit: suits[i], value: [j] });
      }
    }
  }
}
