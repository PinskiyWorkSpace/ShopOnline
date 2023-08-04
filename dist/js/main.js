import {render} from "./render.js";
import {
  getTimeRemaining,
  formatTime,
  declination
} from "./control.js";



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

//# sourceMappingURL=../maps/main.js.map
