'use strict';

document.addEventListener('DOMContentLoaded', () => {

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const   promoBg = document.querySelector('.promo__bg'),
        promoGenre = promoBg.querySelector('.promo__genre'),
        promoInteractiveList = document.querySelector('.promo__interactive-list'),
        somePicture = document.querySelectorAll('.promo__adv img'),
        add = document.querySelector('.add'),
        input = add.querySelector('.adding__input'),
        check = add.querySelector('[type="checkbox"]');

    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());
    };

    const makeChanges = () => {
        promoGenre.textContent = 'Драма';

        promoBg.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function filmsAndReplase(films, filmsJS) {
        films.innerHTML = '';
        sortArr(filmsJS);

        filmsJS.forEach((item, index) => {
                films.innerHTML += `
                <li class="promo__interactive-item">${++index} ${item}
                    <div class="delete"></div>
                </li>
                \n`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
            btn.parentElement.remove();
            filmsJS.splice(i, 1);

            filmsAndReplase(films, filmsJS);
        });
    });
}

const addFilms = (e) => {
        e.preventDefault();

        if (input.value.length > 21) {
            input.value = `${input.value.substring(0, 22)}...`;
        }

        if(input.value) {
            if(check.checked) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(input.value);
            sortArr(movieDB.movies);
            filmsAndReplase(promoInteractiveList, movieDB.movies);
            e.target.reset();
        }
        
    };

// function deleteButton (e) {
//     if(e.target.className === 'delete') {
//         let name = e.target.parentElement.innerText.slice(2),
//             i;
//         movieDB.movies.forEach((item, index) => {
//             if(item.toUpperCase() === name) {
//                 i = index;
//             }
//         });
//         movieDB.movies.splice(i, 1);
//         sortArr(movieDB.movies);
//         filmsAndReplase(promoInteractiveList, movieDB.movies);
//     }
// }

    // promoInteractiveList.addEventListener('click', deleteButton);

    add.addEventListener('submit', addFilms);

    filmsAndReplase(promoInteractiveList, movieDB.movies);
    makeChanges();
    deleteAdv(somePicture);
});