'use strict';

// const box = document.getElementById("box");

// console.log(box);

// // const btns = document.getElementsByTagName("button")[1];
// // console.log(btns[1]);

// const btns = document.getElementsByTagName("button");

// console.log(btns[0]);
// // if we have only one button in the north - ( btns[0] )
// // because we still get an array And we must access it as an array

// const circles = document.getElementsByClassName("circle");
// console.log(circles);


// // Nowadays

// const hearts = document.querySelectorAll('.heart');
// // console.log(hearts);

// // callback function
// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

// // querySelector() - displays the first element on the page


const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

// console.dir(box);

box.style.backgroundColor = 'blue';
box.style.width = '500px';

// box.style.ccsText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = "100%";
btns[1].style.backgroundColor = 'red';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Hello world!!!');

div.classList.add('black');

// document.body.append(div);

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);

// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[2]);


// circles[0].remove();
// wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello!!!</h1>";

// div.textContent = 'Hello World!';

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');









