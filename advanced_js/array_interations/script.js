

// ========= FILTER

// const names = ['Mihael', 'Cvetlana', 'Alex', 'Pavel','Daniel', 'Ema'];

// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });

// console.log(shortNames);

// ========= MAP

// const ansvers = ['IvAn', 'AnnA', 'Hello'];

// const result = ansvers.map(item => item.toLowerCase());

// console.log(result);

// ========= EVERY / SOME

// const some = [4, 'first', 'second'];

// console.log(some.some(item => typeof (item) === 'number'));
// console.log(some.every(item => typeof (item) === 'number'));

// ======== REDUSE

// const arr = [4, 5, 8, 3, 9, 1, 5, 8];

// // const resalt = arr.reduce((sum, current) => sum + current);
// const resalt = arr.reduce((sum, current) => sum + current, 10);

// console.log(resalt);

// const arr = ['IvAn', 'some', 'Hello'];

// const resalt = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(resalt);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    cat: 'animal',
    dog: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);