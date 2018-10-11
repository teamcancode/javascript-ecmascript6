const listFibonacci = n => {
    if (!Number.isInteger(n) || n < 3) {
        return [];
    }

    switch (n) {
        case 1:
            return [1];
        case 2:
            return [1, 1];
    }

    const result = [1, 1];
    // let last1Value = 1, last2Value = 1;

    for (let i = 2; i < n; i++) {
        //Cach 1
        const currentValue = result[i - 1] + result[i - 2];
        result.push(currentValue);

        //Cach 2
        // const currentValue = last1Value + last2Value;
        // result.push(currentValue);
        // last2Value = last1Value;
        // last1Value = currentValue;
    }

    return result;
};

console.time('getListFibonacci');
const result = listFibonacci(100);
console.timeEnd('getListFibonacci');

// console.log(result);
