function getListFibonacci1(n) {
    if (typeof n !== 'number' || n < 1) {
        return [];
    }

    switch (n) {
        case 1:
            return [1];
        case 2:
            return [1, 1];
    }

    const result = [1, 1];
    let currentValue = 1,
        lastValue = 1;

    for (let i = 2; i < n; i++) {
        const nextValue = currentValue + lastValue;
        result.push(nextValue);

        lastValue = currentValue;
        currentValue = nextValue;
    }

    return result;
}

function getListFibonacci2(n) {
    if (typeof n !== 'number' || n < 1) {
        return [];
    }

    switch (n) {
        case 1:
            return [1];
        case 2:
            return [1, 1];
    }

    const result = [1, 1];

    for (let i = 2; i < n; i++) {
        const nextValue = result[i - 1] + result[i - 2];
        result.push(nextValue);
    }

    return result;
}

console.time('getListFibonacci');
// const result = getListFibonacci1(10000);
const result = getListFibonacci2(10000);
console.timeEnd('getListFibonacci');

// console.log(result);
