const user = {
    name: 'Mihael',
    surname: 'Sin',
    brithday: "20/04/1987",
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

// console.log(user);
//--------------------------------------------------map
const userMap = new Map(Object.entries(user));
// console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

const shops = [
    { rise: 500 },
    { oil: 200 },
    { briad: 50 }
];
const budget = [5000, 1500, 2500];

const map = new Map([
    [{ peper: 400 }, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size();
// map.keys();

// console.log(map.keys());

// for (let shop of map.keys()) {
//     console.log(shop);
// }

// const goods = [];

// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }

// console.log(goods);

// for (let prise of map.values()) {
//     console.log(prise);
// }

// for (let [shop, prise] of map.entries()) {
//     console.log(prise, shop);
// }

map.forEach((value, key, map) => {
    console.log(key, value);
});






//--------------------------------------------------map

// for (const key in user) {
//     console.log(user[key]);
// }

// const arr = ['b', 'a', 'c'];

// Array.prototype.someMethod = function () { };

// console.dir(arr);

// for (const key of arr) {
//     console.log(key);
// }

// const str = 'Misha';

// for (const key in str) {
//     console.log(str[key]);
// }

//-----------------------------------------------integrable objects
// const salaries = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function () {
//         console.log("Hello!");
//     }
// };

// salaries[Symbol.iterator] = function () {
//     return {
//         current: this.john,
//         last: this.ann,
//         next() {
//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return { done: false, value: this.current };
//             } else {
//                 { done: true }
//             }
//         }
//     };
// };

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());

// for (let res of salaries) {
//     console.log(res);
// }

//-----------------------------------------------integrable objects








// Object.defineProperty(user, 'brithday', { writable: false });
// Object.defineProperty(user, 'brithday', { value: prompt('Date?'), enumerable: true, configurable: true });

// console.log(Object.getOwnPropertyDescriptor(user, 'brithday'));

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// Object.defineProperty(user, 'showMyPublicData', { enumerable: false });
// for (let key in user) console.log(key);

// Object.defineProperty(user, {
//     name: {writable: false},
//     surname:{writable: false}
// });

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'name', { writable: false });
// Object.defineProperty(user, 'gender', { value: 'male' });

// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// writable
// enumerable
// configurable