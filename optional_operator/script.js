'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// console.log(block?.textContent);

// block?.textContent = '1322';

// if(block){
//     console.log(block.textContent);
// }

console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function () {
        console.log('Hello!');
    }
}

userData.say();
userData.hey?.();

// if(userData && userData.skills && userData.skills.js){
//     console.log(userData.skills.js);
// }

// console.log(userData.skills.js);

console.log(userData?.skills?.js);