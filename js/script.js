"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const presonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

presonalMovieDB.movies[a] = b;
presonalMovieDB.movies[c] = d;

console.log(presonalMovieDB);