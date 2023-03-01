setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

queueMicrotask(() => console.log('WOW'));

Promise.resolve()
    .then(() => console.log('promise'));


console.log('code');