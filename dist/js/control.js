"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimeRemaining = exports.formatTime = exports.declination = void 0;
var getTimeRemaining = function getTimeRemaining() {
  var timers = document.querySelector('.timer');
  timers.dataset.deadline = '2023/09/01 21:00';
  var dateStop = new Date(timers.dataset.deadline).getTime();
  var dateNow = Date.now();
  var timeRemaining = dateStop - dateNow;
  var day = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
  var hour = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
  var minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
  var seconds = Math.floor(timeRemaining / 1000 % 60);
  return {
    timeRemaining: timeRemaining,
    day: day,
    hour: hour,
    minutes: minutes,
    seconds: seconds
  };
};
exports.getTimeRemaining = getTimeRemaining;
var formatTime = function formatTime(elem) {
  return elem < 10 ? "0".concat(elem) : elem;
};
exports.formatTime = formatTime;
var declination = function declination(num, arr) {
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
exports.declination = declination;
var menu = document.querySelector('.menu__wrapper');
var menuBtn = document.querySelector('.header__menu');
menuBtn.addEventListener('click', function () {
  menu.classList.toggle('menu__active');
});
//# sourceMappingURL=../maps/control.js.map
