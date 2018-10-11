function getListFibonacci(n) {
    if (!Number.isInteger(n) || n < 1) {
        return [];
    }

    switch (n) {
        case 1:
            return [1];
        case 2:
            return [1, 1];
    }

    const result = [1, 1];
    let last1Value = 1, last2Value = 1;

    for (let i = n - 2; i--; i > 0) {
        const currentValue = last1Value + last2Value;

        result.push(currentValue);
        [last2Value, last1Value] = [last1Value, currentValue];
    }

    return result;
}

let result = getListFibonacci(10);
console.log(result);
