"use strict";


const numberOfFilms = +prompt("How many films have you already seen?", "");
console.log(numberOfFilms);

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


const lastFilm1 = prompt("One of the last film you saw?",''),

 review1 = +prompt("Tell us your review?",''),
 lastFilm2 = prompt("One of the last film you saw?",''),
 review2 = +prompt("Tell us your review?",'');



personalMovieDB.movies[lastFilm1] = review1;
personalMovieDB.movies[lastFilm2] = review2;


console.log(personalMovieDB);

// var movies = {
//     [answer1]: answer2
// };

// console.log(movies);
