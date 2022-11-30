// function pow(x, n) {
//     let resalt = 1;

//     for (let i = 0; i < n; i++) {
//         resalt *= x;
//     }
//     return resalt;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 1));
// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));
// console.log(pow(2, 5));

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Masha',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        //if we run this "--getTotalProgressByInteration(data)--" function it will not work because it is built to a certain structure
        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByInteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let sabCourse of Object.values(course)) {
                students += sabCourse.length;

                for (let i = 0; i < sabCourse.length; i++) {
                    total += sabCourse[i].progress;
                }
            }
        }
    }
    return total / students;
}

// console.log(getTotalProgressByInteration(students));

function getTotalProgressByRecurtion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecurtion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const resalt = getTotalProgressByRecurtion(students);

// console.log(resalt[0] / resalt[1]);

function factorial(number) {
    let fact = 0;

    if (typeof (number) !== 'number' || !Number.isInteger(number) || number <= 0) {

        console.log('error!!!');

    } 
    return (number != 1) ? number * factorial(number - 1) : 1;
}

console.log(factorial('kjkjn'));