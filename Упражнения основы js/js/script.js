function calculateVolumeAndArea(a) {
    if (typeof a != 'string' && Math.round(a) == a && a > 0) {
       let obem = a * a * a,
           plochad = 6 * (a * a);
           return(`Объем куба: ${obem}, площадь всей поверхности: ${plochad}`);
   } else {
       return("При вычислении произошла ошибка");
   }
}

calculateVolumeAndArea(1);

function getCoupeNumber(a) {
    
    if(typeof a == 'string' || Math.round(a) != a || a < 0) {
        // console.log('Ошибка. Проверьте правильность введенного номера места');
        return ('Ошибка. Проверьте правильность введенного номера места');
    } else if (a === 0 || a > 36) {
        // console.log('Таких мест в вагоне не существует');
        return ('Таких мест в вагоне не существует');
    }

    let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12],
            [13, 14, 15, 16], [17, 18, 19, 20], [21, 22, 23, 24],
            [25, 26, 27, 28], [29, 30, 31, 32], [33, 34, 35, 36]];

    for (let i = 0; i < 10; i++) {
        if(arr[i].indexOf(a) != -1) {
            return ++i;
        }
    }
}

console.log(getCoupeNumber(1.3));


function getTimeFromMinutes(a) {

    if (typeof a == 'string' || a < 0 || Math.round(a) != a) {
        // console.log('Ошибка, проверьте данные');
        return;
    }
    let time = 60, i = 0, str;
    for ( ; time <= a; time = time + 60) {
        i++;
    }
    time = a - (time - 60);
    
    i = Math.abs(i) % 100;
    let i1 = i % 10;
    if (i > 10 && i < 20) {
        str = 'часов';
    } else if (i1 > 1 && i1 < 5) {
        str = 'часа';
    } else if (i1 == 1) {
        str = 'час';
    } else {
        str = 'часов';
    }
    // console.log(`Это ${i} ${str} и ${time} минут`);
    return(`Это ${i} ${str} и ${time} минут`);
}

getTimeFromMinutes(18.1);


function findMaxNumber(a, b, c, d) {

    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number' || typeof d != 'number') {
        console.log(0);
        return(0);
    }

    let arr = [a, b, c, d];
    arr.sort((one, two) => one - two);
    console.log(arr.pop());
    return arr;
}

findMaxNumber(1, 5, 4.4);


function fib(a) {
    if (typeof a != 'number' || !Number.isInteger(a)) {
        return('');
    }
    let str = '',
        b = 0,
        c = 0,
        d = 0;
    for (let i = 0; i < a; i++) {
        if (i === 0) {
            str += b;
            b++;
        } else {
            c = d;
            str += ` ${b}`;
            d = b;
            b = c + b;
        }
    }
    return(str);
}

console.log(fib('7'));


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        let languages = plan.skills.languages.join(' ').toUpperCase(),
            age = plan.age;
        return(`Мне ${age} и я владею языками: ${languages}`);
    }
};

function showExperience(plan) {
    const {languages, programmingLangs, exp} = plan.skills;
    return(exp);
}

function showProgrammingLangs(plan) {
    const {languages, programmingLangs, exp} = plan.skills;
    let str = '',
        i = 1;
        const keys = Object.keys(programmingLangs).length;
    for (let key in programmingLangs) {
        if (i === keys) {
            str += `Язык ${key} изучен на ${programmingLangs[key]}`;
        } else {
            str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
            i++;
        }
    }
    return(str);
}

console.log(showProgrammingLangs(personalPlanPeter));


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));