function getLargest(arrValue) {
    return Math.max.apply(null, arrValue);
}

let result = getLargest([1, 9, 5, 3, 4]);
console.log(result);
