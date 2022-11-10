
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i + ' Zzz');
}

// cycle within a cycle

for (let i = 0; i < 3; i++) {
    console.log("first" + i);
    for (let j = 0; j < 3; j++) {
        console.log("second" + j);
    }
}

let result = "";
const length = 7;


for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);


first: for (let i = 0; i < 3; i++) {
    console.log(`first lvel: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let l = 0; l < 3; l++) {
            if (l === 2) break first;
            // if (l === 2) continue first;
            console.log(`trird level: ${l}`);
        }
    }
}


function firstTask() {

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    return result;
}
firstTask();


function secondTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) === "number") {
            data[i] = data[i] * 2;
        } else if (typeof (data[i]) === "string") {
            data[i] = `${data[i]} - "done"`;
        }
    }
    console.log(data);
    return data;
}

secondTask();

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    let count = 0;
    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }
    console.log(result);
    return result;
}

thirdTask();

function fourTask() {
    const lines = 5;
    let result = '';

    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            result += ' ';
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += '*';
        }
        result += '\n';
    }
    console.log(result);
}
fourTask();

