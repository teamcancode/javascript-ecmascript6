function getLarge2nd(arrValue) {
    const length = arrValue.length;
    const sum = arrValue.reduce((result, value) => result + value);
    return sum / length;
}

let result = getLarge2nd([1, 9, 5, 3, 4]);
console.log(result);
