
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

personalMovieDB.count = numberOfFilms;

const lastFilm1 = prompt("Последний просмотренный фильм", "");
const gradeFilm1 = prompt("Ваша оценка фильма", "");
const lastFilm2 = prompt("Последний просмотренный фильм", "");
const gradeFilm2 = prompt("Ваша оценка фильма", "");

personalMovieDB.movies[lastFilm1] = gradeFilm1;
personalMovieDB.movies[lastFilm2] = gradeFilm2;

console.log(personalMovieDB);