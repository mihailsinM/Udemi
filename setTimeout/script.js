const btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');
let pos = 0;


// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);

// const timerId = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'Hello!!');

// const timerId_1 = setTimeout(logger, 4000);


// setTimeout(logger, 3000);

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     // timerId = setTimeout(logger,2000);
//     timerId = setInterval(logger, 2000);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Text from logger');
//     i++;
// }