const factorial = function(num) {
    return (num === 0 || num === 1) ? 1 : num * factorial(num - 1);
};

// factorialize with for loop
// const factorial = function(num) {
//     let result = 1;

//     for (let i = num; i > 0; i--) {
//         result *= i;
//     }
//     return result;
// }

// function with if statement
// function factorialize(num) {

//     if(num===0){
//       return 1;
//     }
//     else{
//       return num*factorialize(num-1);
//     }
//   }