// const obj = {
//     'name': 'Test'
// };

// let id = Symbol("id");
// let id2 = Symbol("id");

// console.log(id == id2);

// obj[id] = 1;

// console.log(obj[id]);

// let id = Symbol("id");

// const obj = {
//     'name': 'Test',
//     // [Symbol('id')]: 1
//     [id]: 1,

//     getId: function () {
//         return this[id];
//     }
// };

// console.log(obj);
// // console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) {
//     console.log(value);
// }

const myAwesomeDb = {
    movies: [],
    actors: [],
    // id: 123
    // [Symbol('id')]: 123
    [Symbol.for('id')]: 123
};

myAwesomeDb.id = '32316541';

console.log(myAwesomeDb['id']);
console.log(myAwesomeDb[Symbol.for('id')]);
console.log(myAwesomeDb);