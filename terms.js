

if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Not!");
}

const num = 50;

if (num < 49) {
    console.log("Error!");
} else if (num > 100) {
    console.log("(!num > 100)");
} else {
    console.log("Ok!");
}

//ternary 
(num === 50) ? console.log("Ok!") : console.log("ERR!");

switch (num) {
    case 49:
        console.log("Not 49");
        break;
    case 100:
        console.log("Not 100");
        break;
    case 50:
        console.log("Ok!");
        break;
    default:
        console.log("Not to day!");
        break;
}

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log("I am full!");
// }
// console.log((hamburger && fries));

const hamburger = 3;
const fries = 1;
const colla = 0;

console.log(hamburger === 3 && fries && colla);
console.log(hamburger === 3 || fries && colla);

if (hamburger === 3 && fries && colla) {
    console.log("Everyone am full!");
} else {
    console.log("We're leaving");
}

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "zzzz");


let jonReport, alexReport, mashaReport, mariyaReport = "Done!";
console.log(jonReport || alexReport || mashaReport || mariyaReport);