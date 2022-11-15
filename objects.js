"use strict";
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function () {
        console.log("Test!");
    }
};
options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);


// let count = 0;
// for (let key in options) {

//     if (typeof (options[key]) === 'object') {

//         for (let i in options[key]) {
//             console.log(`Properties: ${i} has the meaning - ${options[key][i]}`);
//             count++;
//         }

//     } else {
//         console.log(`Properties: ${key} has the meaning - ${options[key]}`);
//         count++;
//     }
// }
// console.log(count);