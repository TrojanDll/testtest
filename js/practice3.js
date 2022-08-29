const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let numberOfFilms = '';

while (true) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    if (1 < numberOfFilms.length < 50) {
        personalMovieDB.count = numberOfFilms;
        break;
    } else {
        console.log("error");
    }
}

let i = 0;
while (true) {
    const lastFilm = prompt("Последний просмотренный фильм", "");
    const gradeFilm = prompt("Ваша оценка фильма", "");
    if (lastFilm != null && gradeFilm != null && 1 < lastFilm.length < 50 && 1 < gradeFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = gradeFilm;
        i++;
        if (i >= 2) {
            break;
        }
    } else {
        console.log("Неверное кол-во символов");
    }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("Мало");
} else if (10 < personalMovieDB.count < 30) {
    console.log("Норм");
} else if (personalMovieDB.count > 30) {
    console.log("Крутой");
} else {
    console.log("Еблан, хуйню ввёл");
}