const fibonacci1 = n => {
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

const fibonacci2 = n => {
    if (!Number.isInteger(n) || n < 3) {
        return 1;
    }

    return fibonacci2(n - 2) + fibonacci2(n - 1);
};

console.time('getListFibonacci');
const result = fibonacci1(10);
// const result = fibonacci2(10);
console.timeEnd('getListFibonacci');

console.log(result);
