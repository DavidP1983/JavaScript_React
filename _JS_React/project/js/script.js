/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ],
    };


    const adv = document.querySelectorAll('.promo__adv img'),
        promo = document.querySelector('.promo__bg'),
        genre = promo.querySelector('.promo__genre');

    // task #1
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    // task #2
    const makeChages = () => {
        genre.textContent = 'ДРАМА';
        promo.style.backgroundImage = 'url("img/bg.jpg")';

    };


    const sortArr = (arr) => {
        arr.sort();

    };


    const addmovies = document.querySelector(".promo__interactive-list");
    // const deleteMov = document.querySelectorAll('.delete');


    // task #3 
    function creatMoviesList(films, parent) {

        sortArr(films);
        parent.innerHTML = "";

        films.forEach(function (item, i) {
            parent.innerHTML +=
                `<li class="promo__interactive-item">${i + 1}. ${item} 
                <div class="delete"></div> 
             </li>`;
        });

        // delete movies

        document.querySelectorAll('.delete').forEach((bin, i) => {
            // console.log(bin);
            bin.addEventListener('click', () => {

                bin.parentElement.remove();
                movieDB.movies.splice(i, 1);
                //  console.log(movieDB);

                //we are colling the function in itself to organize counting 
                creatMoviesList(movieDB.movies, addmovies);
                // creatMoviesList(films, parent); the same  


            });

        });
    }


    // Add Movies

    const addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        check = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = check.checked;

        if (newFilm) { //if it false i.e (" "), dont execute else ->

            if (newFilm.length > 10) {
                newFilm = `${newFilm.substr(0, 11)}...`;
            }
            if (favorite) {
                alert("New film has been added");
                console.log("New film has been added");
            }

            movieDB.movies.push(newFilm);
            // sortArr(movieDB.movies);

            creatMoviesList(movieDB.movies, addmovies);

        }

        //  movieDB.movies.push(newFilm);
        //  sortArr(movieDB.movies);   
        // creatMoviesList(movieDB.movies, addmovies);

        event.target.reset(); // clean the form i.e clean input field and checkbox


    });


    creatMoviesList(movieDB.movies, addmovies); //inside this fucntion we are also sorting the films
    // addmovies.innerHTML = ""; 
    // movieDB.movies.forEach(function (item, i) {
    //     addmovies.innerHTML += `<li class="promo__interactive-item">${
    //   i + 1
    // }. ${item} 
    //     <div class="delete"></div> 
    //     </li>`;
    // });

    deleteAdv(adv);
    // adv.forEach(item =>{
    // item.remove();
    // });


    makeChages();
    // const promo = document.querySelector('.promo__bg'),
    // genre = promo.querySelector('.promo__genre');

    // genre.textContent = 'ДРАМА'; //task #2

    // promo.style.backgroundImage = 'url("img/bg.jpg")';

    sortArr(movieDB.movies);
    // movieDB.movies.sort();

});