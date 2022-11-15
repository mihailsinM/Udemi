
function first() {

    //do something

    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

// learnJS("JavaScript", function(){
//     console.log("I learned this lesson!");
// });

function done() {
    console.log("I learned this lesson!");
}

learnJS("JavaScript", done);