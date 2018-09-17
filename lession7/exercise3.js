function getFibonacci1(n) {
    if (typeof n !== 'number' || n < 3) {
        return 1;
    }

    let currentValue = 1,
        lastValue = 1,
        nextValue;

    for (let i = n - 2; i--; i > 0) {
        nextValue = currentValue + lastValue;
        lastValue = currentValue;
        currentValue = nextValue;
    }

    return nextValue;
}

function getFibonacci2(n) {
    switch (n) {
        case 0:
        case 1:
        case 2:
            return 1;
        default:
            return getFibonacci2(n - 2) + getFibonacci1(n - 1);
    }
}

let result1 = getFibonacci1(10);
let result2 = getFibonacci2(10);
console.log(result1, result2);
