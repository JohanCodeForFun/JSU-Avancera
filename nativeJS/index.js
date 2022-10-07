// function to use as second paramater, 
// for example: opening a prompt window.
let f = () => g();


// function to go through an array and 
// propmt user with the values.
function forEach(a, f) {
  for (let i = 0; i < a.length; i++) {
    f((a[i]));
  }
};

// forEach([1, 2, 3, 4, 5], console.log);

// old way
// let f = function() {
//   return g;
// };

// let g = function() {
//   return 'Hello World!'
// };