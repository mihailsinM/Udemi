

// new RegExp('pattern', 'flags');

// /pattern/f;

// const ans = prompt('Enter your name.');

// const reg = /n/ig;

// i
// g
// m

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));
// console.log(pass.replace(/\./g, "*"));
// console.log('13-654-5452'.replace(/-/g, ':'));

// const ans = prompt('Enter your name.');

// // const reg = /n/ig;
// // const reg = / /ig;
// // const reg = /\d/;
// const reg = /\d/g;

// // console.log(reg.test(ans));
// console.log(ans.match(reg));
//classes

// \d
// \w
// \s

const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i));
// console.log(str.match(/\W/i));
// console.log(str.match(/\W/ig));
console.log(str.match(/\D/ig));

// \D
// \W