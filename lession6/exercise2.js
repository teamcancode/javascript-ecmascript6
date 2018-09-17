function getLarger1(value1, value2) {
    if (value1 > value2) {
        return value1;
    } else {
        return value2;
    }
}

function getLarger2(value1, value2) {
    return value1 > value2 ? value1 : value2;
}

let result1 = getLarger1(2, 3);
let result2 = getLarger2(6, 5);
console.log(result1, result2);
