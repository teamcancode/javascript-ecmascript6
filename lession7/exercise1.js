function getLargest(value1, ...values) {
    let result = value1;

    for (let value of values) {
        if (value > result) {
            result = value;
        }
    }

    return result;
}

let result = getLargest(1, 9, 5, 3, 4);
console.log(result);
