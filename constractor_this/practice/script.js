
const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'white';
// });

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'white';
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

const double = a => a * 2;

console.log(double(4));
