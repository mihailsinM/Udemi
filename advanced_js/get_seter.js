const persone = {
    name:'Alex',
    age: 25,

    getUserAge(){
        return this.age;
    },

    set userAge(num){
        this.age = num;
    }
};

console.log(persone.userAge = 30);
console.log(persone.age);