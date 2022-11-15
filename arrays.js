
const arr = [5, 2, 53, 5, 625, 9];

arr.sort(compareNum);
// arr.sort();
console.log(arr);
function compareNum(a, b){
    return a - b;
}
// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} inside an array ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let val of arr) {
//     console.log(val);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// // console.log(products);
// products.sort();
// console.log(products.join('; '));