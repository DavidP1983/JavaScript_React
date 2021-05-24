/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// task#1
const advertising = document.querySelectorAll('img');
console.dir(advertising);
for (let i = 1; i < advertising.length; i++) {
    advertising[i].remove();

}
/*
Solution:
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item =>{
item.remove();
});
*/


// task#2
const genre = document.getElementsByClassName('promo__genre');
console.log(genre);
genre[0].textContent = 'ДРАМА';


// task#3
const promo = document.getElementsByClassName('promo__bg');
console.log(promo);
let photo = '../img/bg.jpg';
let photo2 = "center center/cover no-repeat";
promo[0].style.background = `url(${photo})${photo2}`;
promo[0].style['background-position'] = 'top';
/*
Second and third task we will do together because  selector ('promo__genre') is inside
("promo__bg");

const promo = document.querySelectorAll('.promo__bg'),
      genre = poster.querySelector('.promo__genre');

      genre.textContent = 'ДРАМА'; //task #2

      promo.style.backgroundImage = 'url("img/bg.jpg")';

*/ 

//Task#4
const addmovies = document.querySelector('.promo__interactive-list');
console.log(addmovies);

addmovies.innerHTML = ""; // delete all content of the <ul> element i.e <li>
movieDB.movies.sort();

movieDB.movies.forEach(function (item, i) {
    addmovies.innerHTML +=
        `<li class="promo__interactive-item">${i+1}. ${item} 
        <div class="delete"></div> 
        </li>`;
// here we are creating  a new <li> elements in <ul>
// sign '+' we use to add each time a new element
});