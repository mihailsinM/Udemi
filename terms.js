

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