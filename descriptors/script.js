const user = {
    name: 'Mihael',
    surname: 'Sin',
    // brithday: "20/04/1987",
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Object.defineProperty(user, 'brithday', { writable: false });
// Object.defineProperty(user, 'brithday', { value: prompt('Date?'), enumerable: true, configurable: true });

// console.log(Object.getOwnPropertyDescriptor(user, 'brithday'));

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData', { enumerable: false });
for (let key in user) console.log(key);

Object.defineProperty(user, {
    name: {writable: false},
    surname:{writable: false}
});



// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'name', { writable: false });
// Object.defineProperty(user, 'gender', { value: 'male' });

// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// writable
// enumerable
// configurable