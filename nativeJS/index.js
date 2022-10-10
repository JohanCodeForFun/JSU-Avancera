// deck = [1, 2, 3, 4, 5]
// console.log(deck);

let draw = (deck) => {
  let card = deck[0];
  deck.shift();
  return card;
}
// draw(deck);

// console.log(deck);