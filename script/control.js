
export const getTimeRemaining = () => {
  const timers = document.querySelector('.timer');
  timers.dataset.deadline = '2023/02/28 11:55';

  const dateStop = new Date(timers.dataset.deadline).getTime();
  const dateNow = Date.now();
  const timeRemaining = dateStop - dateNow;

  const day = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
  const hour = Math.floor(timeRemaining / 1000 / 60 / 60 % 24 );
  const minutes = Math.floor(timeRemaining / 1000 / 60 % 60 );
  const seconds = Math.floor(timeRemaining / 1000  % 60 );

  return {timeRemaining, day, hour, minutes, seconds};
};

export const formatTime = (elem) => {
  if (elem < 10) {
    return '0' + elem;
  } else {
    return elem;
  }
};

export const declination = (num, arr) => {

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

