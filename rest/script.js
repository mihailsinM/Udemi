const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', "operator", 'usage');

function calcOrDouble(number, basis = 12546526) {

    // basis = basis || 10000;
    console.log(number * basis);
}
calcOrDouble(3);