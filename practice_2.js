let numOfFilms;

function start() {
    numOfFilms = +prompt("How many films have you watched", "");
    while (numOfFilms == "" || numOfFilms == null || isNaN(numOfFilms)) {
        numOfFilms = +prompt("How many films have you watched", "");
    }
}
// start();

const personalMovieDb = {
    count: numOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Last film have you watched?", ""),
            b = prompt("What rating would you give?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log("Done!");
        } else {
            console.log("Error!");
            i--;
        }
    }
}
// rememberMyFilms();

function detectMyPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log("You watch very few films!")
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log("You are a good viewer!");
    } else if (personalMovieDb.count >= 30) {
        console.log("You are kinnaman!");
    } else {
        console.log("Something went wrong!");
    }
}
// detectMyPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

// showMyDb(personalMovieDb.privat);

function writeYourGrneres() {
    for (let i = 1; i <= 3; i++) {
        // const genere = prompt(`your favorite genre is ${i}`);
        // personalMovieDb.genres[i - 1] = genere;
        personalMovieDb.genres[i - 1] = prompt(`your favorite genre is ${i}`);
    }
}
// writeYourGrneres();

//------------------------------------------------------------------------

// Место для первой задачи
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
        return "Error!";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    area = 6 * (length * length);

    return `Cube volume: ${volume}, total surface area: ${area}.`;
}

// Место для второй задачи
function getCoupeNumber(setNumber) {
    if (typeof (setNumber) !== 'number' || setNumber < 1 || setNumber >= 36 || !Number.isInteger(setNumber)) {
        return "Error!";
    }
    return Math.ceil(setNumber / 4);
}
// console.log(getCoupeNumber(6));

//--------------------------------------------------------------------------------------

// Место для первой задачи
function getTimeFromMinutes(minutesTotal) {
    if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Error...";
    }
    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    return `[${hours} hh : ${minutes} mm.]`;
}

// console.log(getTimeFromMinutes(600));

// Место для второй задачи
// function findMaxNumber() {
//     let min_num = 0;
//     for (let i = 0; i < 4; i++) {
//         let nums = prompt(`Enter ${i + 1} number.`);
//         if (min_num < nums) {
//             min_num = nums;
//         }
//     }
// return min_num;
// }

// console.log(findMaxNumber(0));

function fib(num) {
    if (typeof (num) !== "number" || num <= 0 || !Number.isInteger(num)) {
        return "Err...";
    }
    let result = "";
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first}`;
        }
        let trhrid = first + second;
        first = second;
        second = trhrid;
    }
    return result;
}

console.log(fib(7));