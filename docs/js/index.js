/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/create.js
const banerTitle = () => {
  const h1 = document.createElement('h1');
  h1.classList.add('banner__title');
  h1.textContent = '50% на все ноутбуки';
  return h1;
};
const createParagraf = () => {
  const p = document.createElement('p');
  p.classList.add('timer__item');
  return p;
};
const createSpan = () => {
  const span = document.createElement('span');
  return span;
};
const createWrapper = () => {
  const div = document.createElement('div');
  div.classList.add('timer__block');
  return div;
};
const timerTitle = () => {
  const title = createParagraf();
  title.classList.remove('timer__item');
  title.classList.add('timer__title');
  title.textContent = 'До конца акции:';
  return title;
};
const createDay = () => {
  const p = createParagraf();
  p.classList.add('timer__item_days');
  const spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_days');
  const spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_days');
  p.append(spanCount, spanUnits);
  return p;
};
const createHours = () => {
  const p = createParagraf();
  p.classList.add('timer__item_hours');
  const spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_hours');
  const spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_hours');
  p.append(spanCount, spanUnits);
  return p;
};
const createMinutes = () => {
  const p = createParagraf();
  p.classList.add('timer__item_minutes');
  const spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_minutes');
  const spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_minutes');
  p.append(spanCount, spanUnits);
  return p;
};
const createSeconds = () => {
  const p = createParagraf();
  p.classList.add('timer__item_seconds');
  const spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_seconds');
  const spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_seconds');
  p.append(spanCount, spanUnits);
  return p;
};
;// CONCATENATED MODULE: ./src/js/render.js

const render = timer => {
  const baner = banerTitle();
  const wrapper = createWrapper();
  const title = timerTitle();
  const day = createDay();
  const hour = createHours();
  const minute = createMinutes();
  const second = createSeconds();
  wrapper.append(day, hour, minute, second);
  timer.append(baner, title, wrapper);
  return timer;
};
;// CONCATENATED MODULE: ./src/js/control.js
const getTimeRemaining = () => {
  const timers = document.querySelector('.timer');
  timers.dataset.deadline = '2023/09/01 21:00';
  const dateStop = new Date(timers.dataset.deadline).getTime();
  const dateNow = Date.now();
  const timeRemaining = dateStop - dateNow;
  const day = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
  const hour = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
  const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
  const seconds = Math.floor(timeRemaining / 1000 % 60);
  return {
    timeRemaining,
    day,
    hour,
    minutes,
    seconds
  };
};
const formatTime = elem => elem < 10 ? `0${elem}` : elem;
const declination = (num, arr) => {
  if (num % 100 >= 5 && num % 100 <= 20) {
    return arr[2];
  }
  if (num % 10 === 1) {
    return arr[0];
  }
  if (num % 10 >= 2 && num % 10 <= 4) {
    return arr[1];
  }
  return arr[2];
};
const menu = document.querySelector('.menu__wrapper');
const menuBtn = document.querySelector('.header__menu');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__active');
});
;// CONCATENATED MODULE: ./src/js/footer.js
const list = document.querySelector('.footer__catalog__list');
const title = document.querySelector('.footer__catalog__title');
title.addEventListener('click', () => {
  if (document.documentElement.clientWidth < 321) {
    list.classList.toggle('footer__catalog__list-active');
    title.classList.toggle('footer__catalog__title-active');
    console.log(list);
  }
});
;// CONCATENATED MODULE: ./src/js/main.js



const timer = () => {
  const timerMain = document.querySelector('.timer');
  render(timerMain);
  const timerTitle = document.querySelector('.timer__title');
  const timerItem = document.querySelectorAll('.timer__item ');
  const itemDays = document.querySelector('.timer__item_days');
  const timeDays = document.querySelector('.timer__count_days');
  const textDays = document.querySelector('.timer__units_days');
  const timeHours = document.querySelector('.timer__count_hours');
  const textHours = document.querySelector('.timer__units_hours');
  const timeMinutes = document.querySelector('.timer__count_minutes');
  const textMinutes = document.querySelector('.timer__units_minutes');
  const itemseconds = document.querySelector('.timer__item_seconds');
  const timeSeconds = document.querySelector('.timer__count_seconds');
  const textSeconds = document.querySelector('.timer__units_seconds');
  const start = () => {
    const timer = getTimeRemaining();
    if (timer.day === 0) {
      itemDays.classList.add('hiden');
      itemseconds.classList.remove('hiden');
    } else {
      itemDays.classList.remove('hiden');
      itemseconds.classList.add('hiden');
    }
    textDays.textContent = declination(timer.day, ['день', 'дня', 'дней']);
    textHours.textContent = declination(timer.hour, ['час', 'часа', 'часов']);
    textMinutes.textContent = declination(timer.minutes, ['минута', 'минуты', 'минут']);
    textSeconds.textContent = declination(timer.seconds, ['секунда', 'секунды', 'секунд']);
    timeDays.textContent = formatTime(timer.day);
    timeHours.textContent = formatTime(timer.hour);
    timeMinutes.textContent = formatTime(timer.minutes);
    timeSeconds.textContent = formatTime(timer.seconds);
    const intervalId = setTimeout(start, 1000);
    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerTitle.remove();
      timerItem.forEach(el => {
        el.remove();
      });
    }
  };
  start();
};
timer();
/******/ })()
;