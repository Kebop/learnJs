"use strict";

const personalMovieDB = {
    count:  0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == '' || 
        personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            return(alert("Просмотренно довольно мало фильмов"));
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            return(alert("Вы классический зритель"));
        } else if (personalMovieDB.count >= 30) {
            return(alert("Вы киноман"));
        } else {
            return(alert("Произошла ошибка"));
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++){
            const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
            if (a != null && b != null && a.length != '' && b.length != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                alert('Вы оставили поле пустым, повторите попытку.');
                i--;
            }
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let str = prompt(`Ваш любимый жанр под номером ${i}`, "");
                while(str === '' || str === null){
                    alert('Вы ошиблись, повторите попытку');
                    str = prompt(`Ваш любимый жанр под номером ${i}`, "");
                }
                personalMovieDB.genres[i - 1] = str;
            }
            personalMovieDB.genres.forEach((item, index) => {
                console.log(`Любимый жанр #${index + 1} - это ${item}`);
            });
    },
    showMyDB: function(hidden, obj) {
        if (!hidden) {
            console.log(obj);
        }
    },
    toggleVisbleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for(let i = 0; i < 2; i++){
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");
//     if (a === null || a.length > 50 || a.length === 0) {
//         alert('Вы оставили поле пустым, повторите попытку.');
//         i--;
//     } else if (b === null || b.length > 50 || b.length === 0){
//         alert('Вы оставили поле пустым, повторите попытку.');
//         i--;
//     } else {
//     personalMovieDB.movies[a] = b;
//     }
// }
// let i = 0;
// while(i < 2){
//     a = prompt("Один из последних просмотренных фильмов?", "");
//     b = prompt("На сколько оцените его?", "");
//     if (a === null || a.length > 50 || a.length === 0) {
//         alert('Вы оставили поле пусстым, повторите попытку.');
//         i--;
//     } else if (b === null || b.length > 50 || b.length === 0){
//         alert('Вы оставили поле пусстым, повторите попытку.');
//         i--;
//     } else {
//     personalMovieDB.movies[a] = b;
//     }
//     i++;
// }
// do{
//     a = prompt("Один из последних просмотренных фильмов?", "");
//     b = prompt("На сколько оцените его?", "");
//     if (a === null || a.length > 50 || a.length === 0) {
//         alert('Вы оставили поле пусстым, повторите попытку.');
//         i--;
//     } else if (b === null || b.length > 50 || b.length === 0){
//         alert('Вы оставили поле пусстым, повторите попытку.');
//         i--;
//     } else {
//     personalMovieDB.movies[a] = b;
//     }
//     i++;
// }
// while(i < 2);

// console.log(personalMovieDB);

