const getLargest = (...values) => {
    return values.reduce((result, value) => {
        return value > result ? value : result;
    });
};

console.log(getLargest(1, 9, 5, 3, 4));
