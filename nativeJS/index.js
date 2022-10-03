let average = function(array) {
    let result = 0;

    if (array.length === 0) {
        return null;
    }

    array.forEach(function(item) {
    result += item;        
    });
    return result / array.length;
}