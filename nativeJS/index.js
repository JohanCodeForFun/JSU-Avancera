let sum = function (...numbers) {
  let sumNumbers = 0;

  for (const arg of numbers) {
    sumNumbers += arg;
  }
  return sumNumbers;
};
