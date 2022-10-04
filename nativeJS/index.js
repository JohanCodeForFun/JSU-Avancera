// let arr = [1, 2, 3, 4, 5];

let reverse = function(arr) {
    let reverseArray = [];
    for(let i = arr.length; i > 0; i--) {
        reverseArray.push(arr[i-1]);
    }
    return reverseArray;
};

// reverse();