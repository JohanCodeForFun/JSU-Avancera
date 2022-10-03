let average = function(array) {
    let result = 0;

    if (array.length === 0) {
        return null;
    }

    // for (let i = 0; i < array.length; i++) {
    //     result += array[i];
    // }
    array.forEach(function(item) {
    result += item;        
    });
    // result /= array.length;
    return result / array.length;
}