
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //link

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

// object assign
const add = {
    d: 17,
    e: 20
};
// console.log(Object.assign(numbers,add));
const clone = Object.assign({}, add);

clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();

newArr[1] = "xzxz";
console.log(newArr);
console.log(oldArr);


const video = ['youtube', "vimeo", "rutube"],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {
    ...q
};
console.log()

//---------------------------------------------------------------------- practice


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const age = plan;
        const { languages } = plan.skills;

        let str = `I am ${age} years old and i speak languages: `;

        languages.forEach(function (lang) {
            str += `${lang.toUpperCase()}`;
        });
        return str;
    }

};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = '';

    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str += `Lang ${key} studied on ${programmingLangs[key]}\n`;
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

// -----------------------------------------------------------------------------practice_1

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Family is empty.' : str = 'Family consists of: ';

    arr.forEach(member => {
        str += `${member} `;
    });
    return str;
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}
standardizeStrings(favoriteCities);

// -----------------------------------------------------------------------------practice_2

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return "Error!";
    }
    // return str.split('').reverse().join('');
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = "";
    arr.length === 0 ? str = `No currencies available: ` : str = `Available currencies: \n`;

    // arr.forEach(function (curr, i) {
    //     if (curr !== missingCurr) {
    //         str += `${curr}\n`;
    //     }0
    // });
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] === missingCurr){
            continue;
        }
        str += `${arr[i]}\n`;
    }
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "RUB"));