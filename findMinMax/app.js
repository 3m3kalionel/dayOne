function findMinMax(arr) {
    var c, min, max;
    arr.sort( (a, b) => a - b );
    [min, max] = [Infinity, -Infinity];
    return arr.reduce( (element1, element2) => {
        min = element1 < min ? element1 : min;
        max = element2 > max ? element2 : max;
        c = [min, max];
        if(min === max) {
            c = [min];
        }
        return c;
    });
}

module.exports.findMinMax = findMinMax;