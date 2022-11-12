
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    // num = 10;
    console.log(num);
}

showFirstMessage("Hello world!");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(1, 5));

function ret() {
    let num = 50;
    //

    return num;
}

const anotherNam = ret();
console.log(anotherNam);

const logger = function () {
    console.log("Hello!");
};

logger();

// const calc = (a, b) => a + b;
const calc = (a, b) => {
    console.log("Hello!");
    return a + b;
};

console.log(calc(2, 5));


const usdCurr = 28;
const eurCurr = 28;

function convert(amount, corr){
    console.log(corr * amount);
}

convert(500, usdCurr);