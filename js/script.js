require('es6-promise-polyfill').Promise;

import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import timer from './modules/timer';
import forms from './modules/forms';
import slider from './modules/slider';
import cards from './modules/cards';
import exp from './modules/exp';

import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerId);
  calc();
  timer('.timer', '2023-02-13');
  forms('form', modalTimerId);
  slider({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
  }); 
  cards();

}); // -- DOMContentLoaded