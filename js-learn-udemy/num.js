'use strict';

//===================//
//  старые способы  //
//=================//

// один элемент один элемент по айдишнику
const box = document.getElementById('box');

// все элементы по тэг-нейму
const btns = document.getElementsByTagName('button');

// все элементы по тэг-нейму, но достать только второй(первый будет index:0) из коллекции(всевдомассива)
// const btns = document.getElementsByTagName('button')[1];

// по классу
const circles = document.getElementsByClassName('circle');


//===================//
//   новые способы  //
//=================//


// получить любой элемент-ы по любому признаку. Нужно указывать префиксы (шарп - у айди, или точку у класса.)
const hearts = document.querySelectorAll('.heart');

// получить доступ к ПЕРВОМУ элементу по любому признаку.
const oneHeart = document.querySelector('.heart');