const regex = /^[a-z]+([\w.]*[a-z0-9]+)*@\w+(\.[a-z]+)+$/i;

console.log(regex.test('huubinhnguyen'));
console.log(regex.test('huubinh.nguyen123'));
console.log(regex.test('huubinh@nguyen123@officience.com'));
console.log(regex.test('huubinh*nguyen123@officience.com'));
console.log(regex.test('123huubinh.nguyen@officience.com'));
console.log(regex.test('huubinhnguyen.@officience.com'));
console.log(regex.test('huubinhnguyen_@officience.com'));
console.log(regex.test());
console.log(regex.test('huubinh.nguyen123@officience.com.vn'));
