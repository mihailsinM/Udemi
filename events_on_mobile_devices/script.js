// touchstart
//touchmove
//touchend

//touchenter

//touchleave

//touchcancel


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    // touchstart

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start!');
        // console.log(e.touches);
        console.log(e.targetTouches);
    });

    //touchmove

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
        // console.log('Move!');
    });

    //touchend

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End!');
    });
});

// touches
// targetTouches
// changedTouches
