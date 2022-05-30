"use strict";
// function calculateVolumeAndArea(a) {
//     if (typeof a != 'string' && Math.round(a) == a && a > 0) {
//        let obem = a * a * a,
//            plochad = 6 * (a * a);
//            return(`Объем куба: ${obem}, площадь всей поверхности: ${plochad}`);
//    } else {
//        return("При вычислении произошла ошибка");
//    }
// }

// calculateVolumeAndArea(1);

// function getCoupeNumber(a) {
    
//     if(typeof a == 'string' || Math.round(a) != a || a < 0) {
//         // console.log('Ошибка. Проверьте правильность введенного номера места');
//         return ('Ошибка. Проверьте правильность введенного номера места');
//     } else if (a === 0 || a > 36) {
//         // console.log('Таких мест в вагоне не существует');
//         return ('Таких мест в вагоне не существует');
//     }

//     let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12],
//             [13, 14, 15, 16], [17, 18, 19, 20], [21, 22, 23, 24],
//             [25, 26, 27, 28], [29, 30, 31, 32], [33, 34, 35, 36]];

//     for (let i = 0; i < 10; i++) {
//         if(arr[i].indexOf(a) != -1) {
//             return ++i;
//         }
//     }
// }

// console.log(getCoupeNumber(1.3));


// function getTimeFromMinutes(a) {

//     if (typeof a == 'string' || a < 0 || Math.round(a) != a) {
//         // console.log('Ошибка, проверьте данные');
//         return;
//     }
//     let time = 60, i = 0, str;
//     for ( ; time <= a; time = time + 60) {
//         i++;
//     }
//     time = a - (time - 60);
    
//     i = Math.abs(i) % 100;
//     let i1 = i % 10;
//     if (i > 10 && i < 20) {
//         str = 'часов';
//     } else if (i1 > 1 && i1 < 5) {
//         str = 'часа';
//     } else if (i1 == 1) {
//         str = 'час';
//     } else {
//         str = 'часов';
//     }
//     // console.log(`Это ${i} ${str} и ${time} минут`);
//     return(`Это ${i} ${str} и ${time} минут`);
// }

// getTimeFromMinutes(18.1);


// function findMaxNumber(a, b, c, d) {

//     if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number' || typeof d != 'number') {
//         console.log(0);
//         return(0);
//     }

//     let arr = [a, b, c, d];
//     arr.sort((one, two) => one - two);
//     console.log(arr.pop());
//     return arr;
// }

// findMaxNumber(1, 5, 4.4);


// function fib(a) {
//     if (typeof a != 'number' || !Number.isInteger(a)) {
//         return('');
//     }
//     let str = '',
//         b = 0,
//         c = 0,
//         d = 0;
//     for (let i = 0; i < a; i++) {
//         if (i === 0) {
//             str += b;
//             b++;
//         } else {
//             c = d;
//             str += ` ${b}`;
//             d = b;
//             b = c + b;
//         }
//     }
//     return(str);
// }

// console.log(fib('7'));


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         let languages = plan.skills.languages.join(' ').toUpperCase(),
//             age = plan.age;
//         return(`Мне ${age} и я владею языками: ${languages}`);
//     }
// };

// function showExperience(plan) {
//     const {languages, programmingLangs, exp} = plan.skills;
//     return(exp);
// }

// function showProgrammingLangs(plan) {
//     const {languages, programmingLangs, exp} = plan.skills;
//     let str = '',
//         i = 1;
//         const keys = Object.keys(programmingLangs).length;
//     for (let key in programmingLangs) {
//         if (i === keys) {
//             str += `Язык ${key} изучен на ${programmingLangs[key]}`;
//         } else {
//             str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//             i++;
//         }
//     }
//     return(str);
// }

// console.log(showProgrammingLangs(personalPlanPeter));


// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (arr.length === 0) {
//         return(`Семья пуста`);
//     } else {
//         return (`Семья состоит из: ${arr.join(' ')}`);
//     }
// }

// console.log(showFamily(family));


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     return (arr.join('\n').toLowerCase());
// }

// console.log(standardizeStrings(favoriteCities));

// const someString = 'This is some strange string';

// function reverse(str) {
//     return(str.split('').reverse().join(''));
// }


// console.log(reverse(someString));



// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0) {return(`Нет доступных валют`);}
//     arr.forEach((element, index, arr) => {
//         if (element === missingCurr) {
//             arr = arr.splice(index, 1);
//         }
//     });
//     return(`Доступные валюты:\n${arr.join('\n')}`);
// }


// console.log(availableCurr(baseCurrencies.concat(additionalCurrencies), 'UAH'));



// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let Chek,
//         str = [];
//     for (let key of data.shops) {
//         str.push(key.length*key.width);
//     }
//     Chek = str.reduce((a, b) =>  a + b) * data.height * data.moneyPer1m3;
//     // shop = str.reduce((a, b) =>  a + b); ///// 1 часть площадь магазинов
//     // str = data.height * shop; ///// 2 часть объем ТЦ
//     // Chek = str * data.moneyPer1m3; ////3 часть сумма затрат
//     return ((Chek > data.budget) ? 'Бюджета недостаточно' : 'Бюджета достаточно'); // final задача
// }

// console.log(isBudgetEnough(shoppingMallData));


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// // function sortStudentsByGroups(arr) {
// //     let newArr = [],
// //         i = 3,
// //         b = 0,
// //         miniArr = [];
// //     arr.sort();

// //     arr.forEach((item, index) => {
// //         if(i == index) {
// //             newArr.push(miniArr);
// //             i += 3;
// //             b = 0;
// //             miniArr = [];
// //             miniArr[b] = item;
// //             b++;
// //         } else {
// //             miniArr[b] = item;
// //             b++;
// //         }
// //     });
// //     i = 3;
// //     if(i === miniArr.length) {
// //         newArr.push(miniArr);
// //         miniArr = [];
// //     }
// //     let str = miniArr.join(', ');
// //     if(str.trim() == '') {
// //         newArr.push(`Оставшиеся студенты: -`);
// //     } else {
// //         newArr.push(`Оставшиеся студенты: ${str}`);
// //     }

// //     return(newArr);
// // }

// function sortStudentsByGroups(arr) {
//     arr.sort();
// 	let resArr = [],
//         copyArr = [...arr],
// 		pplCount = 3,
// 		text = `Оставшиеся студенты: `;
// 	while (arr.length >= pplCount) {
// 		resArr.push(arr.splice(0, pplCount));
// 	}
// 	if (arr.length > 0) {
// 		text += `${arr.join(', ')}`;
// 		resArr.push(text);
// 	} else {
// 		text += `-`;
// 		resArr.push(text);
// 	}

// 	return resArr;
// }

// console.log(sortStudentsByGroups(students));




const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = {
        waitors: {}
    };
    copy.waitors = Object.assign({}, data.waitors);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);


function factorial(a) {
    if(typeof a != 'number' || !Number.isInteger(a)) {
        return ('Данные введены не корректно! Попробуйте еще раз, введено должно быть целое число!');
    } else if(a === 0 || a < 0) {
        return 1;
    }
    if (a === 1) {
        return a;
    } else {
        return a * factorial(--a);
    }
}

console.log(factorial(7));