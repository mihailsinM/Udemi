
// const arr = [1, 1, 2, 2, 3, 4, 5, 6, 5];
const arr = ['Alex', 'Anna', "Oleg", 'Alex'];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));

// const set = new Set(arr);

// set.add('Ivan')
//     .add('Anna');

// console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size();


// for (let value of set) {
//     console.log(value);
// }

// set.forEach((value, valueAgeing, set) => {
//     console.log(value, valueAgeing);
// });

// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());


