const getMax = (max, ...values) => {
    for (let value of values) {
        if (max < value) {
            max = value;
        }
    }

    return max;
};

function getMax2() {
    var values = Array.prototype.slice.call(arguments),
        max = values.length,
        result = values[0],
        i;

    for (i = 1; i < max; i++) {
        if (values[i] > result) {
            result = values[i];
        }
    }

    return result;
}


console.log(getMax(1, 2, 3));
console.log(getMax2(1, 2, 3));
