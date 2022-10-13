let filter = (arr, f) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      newArray.push(arr[i])
    };
  };
  return newArray;
};
