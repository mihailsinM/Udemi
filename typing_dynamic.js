
//To string

// 1)
console.log(typeof (String(null)));
console.log(typeof (String(4)));
console.log(String(null));

// 2)
console.log(typeof (5 + ""));
console.log(typeof (null + ""));

const num = 5;

console.log("http://vk.com/catalog/" + num);

const fontSize = 25 + "px";

// To number

// 1)

console.log(typeof (Number("5")));

// 2) plus unary

console.log(typeof (+"5"));

// 3)

console.log(typeof (parseInt("15", 10)));

let answer = +prompt("Hello!!!", "");

// To boolean

// 0, "", null, undefined, NaN => falce;

let switcher = null;

if (switcher) {
    console.log("First Working...");
} 
switcher = 1;

if (switcher) {
    console.log("Second Working...");
}

// 2)

console.log(typeof(Boolean("55")));

// 3)
console.log(typeof(!!"489549"));