Array.prototype.average = function () {
    const max = this.length;

    if (max <= 0) {
        return 0;
    }

    const sum = this.reduce((result, x) => result + x);
    return sum / max;
};

const arr = [1, 2, 3, 4, 5];
const avg = arr.average();
console.log(avg);
