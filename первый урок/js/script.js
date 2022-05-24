"use strict";

let number0fFilms;

function start() {
    number0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert("Просмотренно довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function rememberMyFilms() {
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
}

rememberMyFilms();

function writeYourGenres (genres) {
    for (let i = 1; i <= 3; i++) {
        genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres (personalMovieDB.genres);

function showMyDB (hidden, obj) {
    if (!hidden) {
        console.log(obj);
    }
}

showMyDB (personalMovieDB.privat, personalMovieDB);


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

