const regex = /^(http|https):\/\/.+(jpg|jpeg|png|gif)/gim;
const str = `
https://google.com
https://officience.com/img.jpg
https://officience.com/img.jpeg
https://officience.com/img.png
http://officience.com/img.gif
`;

console.log(str.match(regex));
