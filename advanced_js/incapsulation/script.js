// function User(name, age) {
//     this.name = name;
//     let userAge = age;
//     // this.age = age;

//     this.say = function () {
//         console.log(`User name ${this.name}, age ${userAge}`);
//     };

//     this.getAge = function () {
//         return userAge;
//     };

//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('error!');
//         }
//     };
// }
// const miha = new User('Misha', 35);

// console.log(miha.name);
// // console.log(miha.userAge);
// console.log(miha.getAge());

// // miha.name = 'Ivan';
// // miha.userAge = 40;
// miha.setAge(30);
// miha.setAge(300);

// miha.say();

class User {
    constractor(name, age) {
        this.name = name;
        this._age = age;
    }
    #surname = 'Sin';

    say = () => {
        console.log(`User name ${this.name}${this.#surname}, age ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('error!');
        }
    }
}
const miha = new User('Misha', 35);
// console.log(miha.age);
console.log(miha.surname);
// miha.age = 99;
// console.log(miha.age);
miha.say();