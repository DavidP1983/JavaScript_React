"use strict";

// Exe 1
/*const numberOfFilms = +prompt("How many films have you already seen?", "");
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


console.log(personalMovieDB);*/


//*******************************************************************************************//

//Exe 2 Loop

var numberOfFilms = +prompt("How many films have you already seen?", "");
console.log(numberOfFilms);


var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
if (!personalMovieDB.count) {
    alert("Произошла ошибка");
} else if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
}
// Solution #1
/*var questions = [
    "One of the last film you saw?",
    "Tell us your review?",
    "One of the last film you saw?",
    "Tell us your review?"
];
for (var i = 0; i < questions.length; i++) {
    var lastFilm1 = prompt(questions[i]);
    if (!lastFilm1 || lastFilm1.length > 50) {
        break;
    }
    i++;

    var review1 = +prompt(questions[i]);
    personalMovieDB.movies[lastFilm1] = review1;

}*/

// Solution #2

for (let a = 0; a < 2; a++) {
    const lastFilm1 = prompt("One of the last film you saw?", ''),
          review1 = +prompt("Tell us your review?", '');

          if(lastFilm1 !=null && review1 !=null && lastFilm1 != '' && review1 != '' && lastFilm1.length < 50 ){
            personalMovieDB.movies[lastFilm1] = review1;
            console.log("done");
          }else{
              console.log('Error');
              a--;
          }
}


console.log(personalMovieDB);