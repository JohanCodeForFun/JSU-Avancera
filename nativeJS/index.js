let average = function(array) {
    let result = 0;

    if (array.length === 0) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    result /= array.length;
    return result;
}