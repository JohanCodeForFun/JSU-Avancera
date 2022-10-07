// function to use as second paramater, 
// for example: opening a prompt window.

const array1 = [1, 2, 3, 4, 5];

// loopa igenom med for loop
// funktion 
// få fram högsta värdet i arrayn
// inne i loopen, if sats, 
// // ta reda på när F är true
// // när nyckeln i loopen är true, return true nyckel värde
// returnera värdet

function filter(value) {
  console.log(array1.filter(value => value > 2));

}

filter(13);



// let f = () => includes();
// console.log(f([]))

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