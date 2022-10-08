// create a function that takes in an array,
// and return the max value in that array.
// Example, index.js defines find such that it returns 15 
// when called with find([5, 10, 15], n => n === 15).

function find(a) {
  return Math.max(...a);
};

// console.log(find([5, 10, 15]));