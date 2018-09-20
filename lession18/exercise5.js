function reverseString(str) {
    const arr = str.split(' ');
    return arr.reverse().join(' ');
}

let result = reverseString('Nguyen Huu Binh');
console.log(result);
