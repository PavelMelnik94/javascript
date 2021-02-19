
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

const del = document.querySelectorAll('.promo__adv>img'),
      comedyToDrama = document.querySelector('.promo__genre'), 
      changeBackground = document.querySelector('.promo__bg'),
      list = document.querySelector('ul.promo__interactive-list'),
      listItem = list.querySelectorAll('.promo__interactive-item'),
      deleteButton = list.querySelectorAll('.delete'),
      newFilmForm = document.querySelector('.add'),
      newFilmInput = newFilmForm.querySelector('.adding__input'),
      chekboxForm = newFilmForm.querySelector('input[type="checkbox"'),
      confirmButton = newFilmForm.querySelector('button');




const delAD = (arr) => {
    arr.forEach(img => { 
        img.remove();
    });
};
delAD(del);



const makeChanges = () => {
    comedyToDrama.innerHTML = '<h2>Драма</h2>'; 
    changeBackground.style.background = 'url("img/bg.jpg") center center/cover no-repeat';
    
};
makeChanges();



function removeList() {
    // listItem.forEach(li => { //перебор и удаление лист-айтемовю
    //     li.remove();
    // });
    list.innerHTML = '';
}
removeList();


function addMovies() {
    movieDB.movies.forEach((item, i) => {
        sortArr(movieDB.movies); 
        list.innerHTML += `
        <li class='promo__interactive-item'>
        ${i+1} ${item}
        <div class='delete'></div>
        </li>
    
    `;
    });
}


let newFilmText;
function newFilmAdd() {
    confirmButton.addEventListener('click', (e) => {
        e.preventDefault();
        
    newFilmText = newFilmInput.value;
        if (newFilmText) {
            if (newFilmText.length > 21) {
                newFilmText = newFilmText.slice(0, 21) + '...'; 
            }
        } else {
            console.log('Напишите название фильма...');
        }

        if (chekboxForm.checked) {
            console.log('Любимый фильм добавлен');
        } else {
            console.log('Фильм добавлен');
        }
        movieDB.movies.push(newFilmText);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, list);
        newFilmForm.reset();
        
    });
}
newFilmAdd();




const sortArr = (arr) => {
    arr.sort();
};
sortArr(movieDB.movies);




function createMovieList(film, parent) {
    sortArr(film);
    parent.innerHTML = '';
    film.forEach((item, i) => {
        
        parent.innerHTML += `
        <li class='promo__interactive-item'>
        ${i+1} ${item}
        <div class='delete'></div>
        </li>
    
    `;
    });

    deleteBtn();

}
createMovieList(movieDB.movies, list);




function deleteBtn () {
    document.querySelectorAll('.delete').forEach((item, i) => {
        item.addEventListener('click', () => {
            console.log('hello');
            item.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(movieDB.movies, list);
        });
    });

console.log(deleteBtn);
}
deleteBtn();