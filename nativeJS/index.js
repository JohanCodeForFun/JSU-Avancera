
// let filter = (array, func) => {
//   filterArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (func(array[i])) {
//       filterArray.push(array[i]);
//     }
//     return filterArray;
//   }
// }

  function filter (a, f) {
    let newArray = []
    for (let i = 0; i < a.length; i++) {
        if (f(a[i])) {
            newArray.push(a[i])
        }
    }
    return newArray
}






  // array.forEach((number) => {
  //   if (number > 5) {
  //     filterArray.push(number);
  //   }
  //   if (number % 2 === 0) {
  //   }
  // })
  
//   return filterArray
// }

// filter(array);

// // filter([5, 10, 15], value => value !== 5)
// console.log(filter([5, 10, 15], value => value !== 5))
// console.log(filter([2]))