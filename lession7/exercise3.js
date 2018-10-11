const getFibonacci1 = n => {
    if (!Number.isInteger(n) || n < 3) {
        return 1;
    }

    let last1Value = 1, last2Value = 1, currentValue;

    for (let i = n - 2; i--; i > 0) {
        currentValue = last1Value + last2Value;
        last2Value = last1Value;
        last1Value = currentValue;
    }

    return currentValue;
};

const getFibonacci2 = n => {
    if (!Number.isInteger(n) || n < 3) {
        return 1;
    }

    return getFibonacci2(n - 2) + getFibonacci2(n - 1);
};

let result1, result2;

console.time('getListFibonacci');
result1 = getFibonacci1(20);
// result2 = getFibonacci2(20);
console.timeEnd('getListFibonacci');

console.log(result1, result2);
