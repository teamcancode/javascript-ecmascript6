function getLarge2nd(arrValue) {
    const largest = Math.max.apply(null, arrValue);
    return Math.max.apply(null, arrValue.filter(x => x !== largest));
}

let result = getLarge2nd([1, 9, 5, 3, 4]);
console.log(result);
