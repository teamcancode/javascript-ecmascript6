const listFibonacci = n => {
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

    for (let i = 2; i < n; i++) {
        const currentValue = result[i - 1] + result[i - 2];
        result.push(currentValue);
    }

    return result;
};

let result = listFibonacci(10);
console.log(result);
