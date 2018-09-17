function getListFibonacci(n) {
    if (typeof n !== 'number' || n < 0) {
        n = 0;
    }

    switch (n) {
        case 0:
            return [];
        case 1:
            return [1];
        case 2:
            return [1, 1];
    }

    const result = [1, 1];
    let currentValue = 1,
        lastValue = 1;

    for (let i = n - 2; i--; i > 0) {
        const nextValue = currentValue + lastValue;
        result.push(nextValue);

        lastValue = currentValue;
        currentValue = nextValue;
    }

    return result;
}

let result = getListFibonacci(10);
console.log(result);
