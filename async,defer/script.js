

const p = document.querySelectorAll('p');
console.log(p);


function loadSkript(src){
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadSkript('test.js');
loadSkript('some.js');