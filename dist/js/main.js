"use strict";

var _render = require("./render.js");
var _control = require("./control.js");
var timer = function timer() {
  var timerMain = document.querySelector('.timer');
  (0, _render.render)(timerMain);
  var timerTitle = document.querySelector('.timer__title');
  var timerItem = document.querySelectorAll('.timer__item ');
  var itemDays = document.querySelector('.timer__item_days');
  var timeDays = document.querySelector('.timer__count_days');
  var textDays = document.querySelector('.timer__units_days');
  var timeHours = document.querySelector('.timer__count_hours');
  var textHours = document.querySelector('.timer__units_hours');
  var timeMinutes = document.querySelector('.timer__count_minutes');
  var textMinutes = document.querySelector('.timer__units_minutes');
  var itemseconds = document.querySelector('.timer__item_seconds');
  var timeSeconds = document.querySelector('.timer__count_seconds');
  var textSeconds = document.querySelector('.timer__units_seconds');
  var start = function start() {
    var timer = (0, _control.getTimeRemaining)();
    if (timer.day === 0) {
      itemDays.classList.add('hiden');
      itemseconds.classList.remove('hiden');
    } else {
      itemDays.classList.remove('hiden');
      itemseconds.classList.add('hiden');
    }
    textDays.textContent = (0, _control.declination)(timer.day, ['день', 'дня', 'дней']);
    textHours.textContent = (0, _control.declination)(timer.hour, ['час', 'часа', 'часов']);
    textMinutes.textContent = (0, _control.declination)(timer.minutes, ['минута', 'минуты', 'минут']);
    textSeconds.textContent = (0, _control.declination)(timer.seconds, ['секунда', 'секунды', 'секунд']);
    timeDays.textContent = (0, _control.formatTime)(timer.day);
    timeHours.textContent = (0, _control.formatTime)(timer.hour);
    timeMinutes.textContent = (0, _control.formatTime)(timer.minutes);
    timeSeconds.textContent = (0, _control.formatTime)(timer.seconds);
    var intervalId = setTimeout(start, 1000);
    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerTitle.remove();
      timerItem.forEach(function (el) {
        el.remove();
      });
    }
  };
  start();
};
timer();
//# sourceMappingURL=../maps/main.js.map
