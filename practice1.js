// Место для первой задачи
function sayHello(name) {
    return `Hello, ${name}!`;
}
sayHello('Alex');
console.log(sayHello('Alex'));

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
returnNeighboringNumbers(5);

// Место для третьей задачи
function getMathResult(num, times) {
    if (typeof(times) !== "number" || times <= 0) {
        return num;
    }
    let str = "";

    for (let i = 0; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    return str;
}

getMathResult(5, 3);
console.log(getMathResult(2, 5));