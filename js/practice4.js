function start() {
    while (true) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
        if (numberOfFilms == null || isNaN(numberOfFilms)) {
            console.log("error");
        } else if (1 < numberOfFilms.length < 50) {
            personalMovieDB.count = numberOfFilms;
            break;
        }
    }
}

function rememberMyFilms() {
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
}

function detectPersonalLvl() {
    if (personalMovieDB.count < 10) {
        console.log("Мало");
    } else if (10 < personalMovieDB.count && personalMovieDB < 30) {
        console.log("Норм");
    } else if (personalMovieDB.count > 30) {
        console.log("Крутой");
    } else {
        console.log("Еблан, хуйню ввёл");
    }
}

function showMyDB ({personalMovieDB}) {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log("База приватна!");
    }
}

function writeYourGenres({personalMovieDB}) {
    for (let i = 0; i < 3; i++) {
        const a = prompt(`Ваш любимый жанр номер ${i + 1}`, "");
        personalMovieDB.genres[i] = a;
    }
}

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let numberOfFilms = '';

start();
rememberMyFilms();
writeYourGenres({personalMovieDB});
detectPersonalLvl();
showMyDB({personalMovieDB});
