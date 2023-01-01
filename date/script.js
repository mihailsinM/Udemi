

// const now = new Date('2023-01-01');
// const now = new Date(2023, 0, 1, 20);
// const now = new Date(-9999999);
// const now = new Date(0);

// new Date.parse('2023-01-01');

const now = new Date();

console.log(now.setHours(15, 50));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getUTCHours());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Loop completed in ${end - start} milliseconds`);