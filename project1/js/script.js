'use strict';

document.addEventListener('DOMContentLoaded', () => {   // загружаются все элементы DOM, только потом скрипт

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'), // поиск элементов
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'), 
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'), // поиск form с классом add
          addInput = addForm.querySelector('.adding__input'), 
          checkbox = addForm.querySelector('[type="checkbox"]'); // поиск галочки через addForm

    addForm.addEventListener('submit', (event) => { //назначаем обработчик события, создаём коллбэк функцию с объектом события 
        event.preventDefault(); // отмена привычного поведения браузера (когда нажмём кнопку отправить, страничка не будет перезагружаться)

        const newFilm = addInput.value; // обращаемся к addInput с которым взаимодействовал пользователь и проверяем его значение (проверяем что ввёл пользователь)
        const favorite = checkbox.checked; // обращаемся к галочке, которая может быть отмечена, либо не отмечена (получаем булиновое значение благодаря методу checked)

        movieDB.movies.push(newFilm); // обращаемся к базе данных (фильмов) и используем метод push с значением newFilm для записи в список фильмов введённый новый фильм от пользователя
        sortArr(movieDB.movies); // сортируем список фильмов по алфавиту

        createMovieList(movieDB.movies, movieList); // вызов функции для создания movieList (списка фильмов), чтобы они отразились на страничке (создание новых элементов на страничке)

        event.target.reset(); // сбрасываем нашу форму используя объект события event
    });
    
    const deleteAdv = (arr) => { // передаём аргумент arr, который будет только в момент вызова функции
        arr.forEach(item => { // удаление элементов arr (удаление элементов adv (.promo__adv img))
            item.remove();
        });    
    };   
    
    const makeChanges = () => { // объединение действий на страничке в функцию 
        genre.textContent = 'ДРАМА'; // Замена 'КОМЕДИЯ' на 'ДРАМА' (текст)
    
        poster.style.backgroundImage = "url('img/bg.jpg')"; // Замена фоновой картинки
    };

    const sortArr = (arr) => { // создание функции сортировки массива фильмов
        arr.sort(); // сортирование списка фильмов по алфавиту
    };
    
    function createMovieList(films, parent) { // создание функции с аргументами films (использует movieDB.movies ) и parent (использует movieList)
        parent.innerHTML = ''; // очистка списка фильмов на странице (очистка родительского элемента)
        
        films.forEach((film, i) => { // создание новых элементов на основании базы данных фильмов (movieDB.movies) с нумерацией              
            parent.innerHTML += `                                      
                <li class="promo__interactive-item">${i + 1} ${film} 
                    <div class="delete"></div>
                </li>
            `; // помещаем в родительский элемент наши фильмы
        });
    }

    deleteAdv(adv); // вызов функции для удаления элементов adv
    makeChanges(); // вызов функции действий на страничке
    sortArr(movieDB.movies); // вызов функции сортировки массива фильмов
    createMovieList(movieDB.movies, movieList); // вызов функции для создания movieList (списка фильмов), чтобы они отразились на страничке

});