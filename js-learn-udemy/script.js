'use srtict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'brown';
box.style.width = '300px';

box.style.cssText = 'background-color: pink; width: 170px;';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});


const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

//новая версия
// wrapper.append(div); 
//старая версия
// wrapper.appendChild(div);


//новая версия
wrapper.prepend(div);
//старая версия
// wrapper.insertBefore(div, hearts[2]);

// hearts[0].before(div);
// hearts[0].after(div);


//новая версия
// circles[0].remove();
//старая версия
// wrapper.removeChild(hearts[1]);


//новая версия
// hearts[0].replaceWith(circles[0]);
//старая версия
// wrapper.replaceChild(circles[0], hearts[0]);


div.innerHTML = '<h1>hello world</h1>';

div.insertAdjacentHTML('', '<h2>HELLo</h2>')


// div.textContent = 'hello';