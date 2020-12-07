// выбор нужного эелемента
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var mainNavHead = document.querySelector('.main-nav__head');

navMain.classList.remove('main-nav--nojs');
// navMain.classList.toggle('main-nav--opened');
// navMain.classList.toggle('main-nav--closed');
// ивент который срабатывает когда кликнули
navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {// если закрыта
    navMain.classList.remove('main-nav--closed');// удалить класс закрыто для выбранного выше эелеемнта
    navMain.classList.add('main-nav--opened');// добавить класс открыто длы выбранного выше элемента
    mainNavHead.classList.add('main-nav__head--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    mainNavHead.classList.remove('main-nav__head--opened');
  }
});
