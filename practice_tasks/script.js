
function amountOfPages(summary) {
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
        result += i;
        console.log(result);
        if (result.length === summary) {
            n = i;
            break;
        }
    }
    return n;
}

// console.log(amountOfPages(25));

// function isPangram(str) {
//     str = str.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split('').every(function (x) {
//         return str.indexOf(x) !== -1;
//     });
// }

function isPangram(str) {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => str.toLowerCase().includes(x));
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// console.log(isPangram('Hello world'));