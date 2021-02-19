/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания




'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

let personalMovieDB = {
    start: function ()  {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    count: '',
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            console.log("Вы киноман");
        } else {
            console.log('произошла ошибка !!!');
        }
    },
    rememberMyFimls: function () {
        for (let i = 0; i < 2;) {
            let a = prompt('Один из последних просмотренных фильмов?', '');
            let b = +prompt('На сколько оцените его?', '');
            if (a == '' || b == '' || a.count >= 50 || b.count >= 50 || a == null || b == null) {
                a = prompt('Один из последних просмотренных фильмов?', '');
                b = +prompt('На сколько оцените его?', '');
                i -= 1;
                console.log('error 1');
            } else {
                personalMovieDB.movies[a] = b;
            }
            
            i += 1;
        }
    },
    movies: {},
    favoriteActors: function() {

        let a;
        let b;
        for (let i=0; i < 3; ) {
            if (i == 0) {
            let a = prompt('Один из ваших любимых актеров?', '');
            let b = prompt(`и оценка ${a} ?`, '');
                    while (isNaN(b) || b == '' || b == null || a == '' || a == null) {
                    b = prompt(`и оценка ${a} ?`, '');
                    
                } // while end
                i++;
            personalMovieDB.actors[a] = b;
            } else if ( i == 1) {
                let a = prompt('Укажите ещё одного любимого актера?', '');
                let b = prompt(`и оценка ${a} ?`, '');
                    while (isNaN(b) || b == '' || b == null || a == '' || a == null) {
                        b = prompt(`и оценка ${a} ?`, '');
            
                    } //while end
                i++;
            personalMovieDB.actors[a] = b;
            } else if ( i == 2) {
                let a = prompt('Ну и последний актер?', '');
                let b = prompt(`Оценим ${a} в ?`, '');
                     while (isNaN(b) || b == '' || b == null || a == '' || a == null) {
                        b = prompt(`и отценка ${a} ?`, '');
                        
                    } //while end
                i++;
            personalMovieDB.actors[a] = b;
            } // end elseif
            
            } // end for
    
    
        }, //end function 
    actors : {},
    writeYourGenres: function() {

        for (let i=1; i < 4; ) {
            let genreQuest = prompt(`Ваш любимый жанр под номером ${i}.`);
            // personalMovieDB.genres.push(genreQuest);
            while (genreQuest == '' || genreQuest == null) {
                genreQuest = prompt(`Ваш любимый жанр под номером ${i}.`);
                // i--;
            }
            personalMovieDB.genres.push(genreQuest);
 
            i += 1;
        }
        personalMovieDB.genres.forEach(function(genre, n,) {
            n +=1;
            console.log(`Любимый жанр ${n} - это ${genre}`);
        });
    
    },
    genres : [],
    toggleVisibleMyDB : function () {
    
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('ошибка приватности обьекта');
        }
    },
    privat : true
};




// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFimls();
// personalMovieDB.favoriteActors();
// personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

// console.log(personalMovieDB);
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count > 30){
//         console.log("Вы киноман");
//     } else {
//         console.log('произошла ошибка !!!');
//     }
// }

// detectPersonalLevel();




// function rememberMyFimls() {
//     for (let i = 0; i < 2;) {
//         let a = prompt('Один из последних просмотренных фильмов?', '');
//         let b = +prompt('На сколько оцените его?', '');
//         if (a == '' || b == '' || a.count >= 50 || b.count >= 50 || a == null || b == null) {
//             a = prompt('Один из последних просмотренных фильмов?', '');
//             b = +prompt('На сколько оцените его?', '');
//             i -= 1;
//             console.log('error 1');
//         } else {
//             personalMovieDB.movies[a] = b;
//         }
        
//         i += 1;
//     }
// }

// rememberMyFimls();


// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('ошибка приватности обьекта');
//     }
// }

// showMyDB();

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// function writeYourGenres() {

//     for (let i=1; i < 4; ) {
//         let genreQuest = prompt(`Ваш любимый жанр под номером ${i}.`);
//         personalMovieDB.genres.push(genreQuest);
//         i += 1;
//     }

// }

// writeYourGenres();

// function favoriteActors() {

//     let a;
//     let b;
//     for (let i=0; i < 3; ) {
//         if (i == 0) {
//         let a = prompt('Один из ваших любимых актером?', '');
//         let b = prompt(`и оценка ${a} ?`, '');
//                 while (isNaN(b) || b == '' || b == null || a == '' || a == null) {
//                 b = prompt(`и оценка ${a} ?`, '');
                
//             } // while end
//             i++;
//         personalMovieDB.actors[a] = b;
//         } else if ( i == 1) {
//             let a = prompt('Укажите ещё одного любимого актера?', '');
//             let b = prompt(`и оценка ${a} ?`, '');
//                 while (isNaN(b) || b == '' || b == null || a == '' || a == null) {
//                     b = prompt(`и оценка ${a} ?`, '');
        
//                 } //while end
//             i++;
//         personalMovieDB.actors[a] = b;
//         } else if ( i == 2) {
//             let a = prompt('Ну и последний актер?', '');
//             let b = prompt(`Оценим ${a} в ?`, '');
//                  while (isNaN(b) || b == '' || b == null || a == '' || a == null) {
//                     b = prompt(`и отценка ${a} ?`, '');
                    
//                 } //while end
//             i++;
//         personalMovieDB.actors[a] = b;
//         } // end elseif
        
//         } // end for


//     } //end function

// favoriteActors();
// personalMovieDB.start();

// console.log(personalMovieDB);


