function filter (arr, f) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
      if (f(arr[i])) {
          newArray.push(arr[i])
      }
  }
  return newArray
}


// // testing filter and forEach together
let arr = [5, 10, 15];

let filter2 = (arr, f) => {
  let newArray = [];
  f();

  arr.forEach((number) => {
    if (number > 5) {
      newArray.push(number)
    }
  })
  console.log(filter([5, 10, 15]));
}



// working filter2 arrow function with forEach
const numbers = [1, 3, 5, 8, 13, 21]

let filter3 = (arr) => {
  let modulus2 = [];

  numbers.forEach((fibo) => {
    // console.log(fibo);
    if (fibo % 2 === 0) {
      modulus2.push(fibo);
    }
  })
  // console.log(numbers);
  // console.log(modulus2);
  return modulus2
}

filter3();
console.log(filter3([1, 3, 5, 8, 13, 21]))



// arrow function with forEach
// const words = ['one', 'two', 'three', 'four']
// words.forEach((word) => {
//   console.log(word);
// })
// console.log(words);
  
// let arr = [5, 10, 15];

// let filter2 = (arr) => {
//   let newArray = [];
//   arr.forEach((number) => {
//     console.log(number);
//     newArray = arr.push(number);
//   })
//   console.log(newArray);
// }

// filter2([4, 5, 7]);


// function expression (right definition ?)
// function filter (arr, f) {
//   let newArray = []
//   for (let i = 0; i < arr.length; i++) {
//       if (f(arr[i])) {
//           newArray.push(arr[i])
//       }
//   }
//   return newArray
// }

