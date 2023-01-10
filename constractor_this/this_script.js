'use strict';

// function showThis() {
//     console.log(this);
// }
// showThis();

// 1)

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(2, 5);

// 2)

// const obj = {
//     a: 5,
//     b: 9,
//     sum: function () {
//         // console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// 3)

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);

// 4)

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'Mihael'
};

sayName.call(user, 'Sin');
sayName.apply(user, ['Sin']);

function count(num) {
    return this * num;
}

const double = count.bind(2);

console.log(double(3));
console.log(double(16));

// 1) regular function: this = window, but if 'use strict' => undefined.
// 2) the context of an object method is the object itself
// 3) this in constructors and classes it is a new object instance
// 4) manual binding this : call, apply, bind