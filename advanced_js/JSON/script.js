
const persone = {
    name: 'Mihael',
    tel: '+05251523262',
    parents: {
        mom: 'Olya',
        dad: 'Vasya'
    }
};

// console.log(JSON.stringify(persone));
// console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);