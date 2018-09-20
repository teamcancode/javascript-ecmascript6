function findGmail(arrValue) {
    return arrValue.filter(email => email.endsWith('@gmail.com'));
}

let result = findGmail([
    'test1@gmail.com',
    'test2@gmail.com',
    'test@officience.com',
    'test@teamcancode.com',
]);
console.log(result);
