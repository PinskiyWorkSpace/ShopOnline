export const banerTitle = () => {
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

export const createWrapper = () => {
  const div = document.createElement('div');
  div.classList.add('timer__block');
  return div;
};

export const timerTitle = () => {
  const title = createParagraf();
  title.classList.remove('timer__item');
  title.classList.add('timer__title');
  title.textContent = 'До конца акции:';
  return title;
};

export const createDay = () => {
  const p = createParagraf();
  p.classList.add('timer__item_days');

  const spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_days');

  const spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_days');

  p.append(spanCount, spanUnits);

  return p;
};

export const createHours = () => {
  const p = createParagraf();
  p.classList.add('timer__item_hours');

  const spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_hours');

  const spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_hours');

  p.append(spanCount, spanUnits);

  return p;
};

export const createMinutes = () => {
  const p = createParagraf();
  p.classList.add('timer__item_minutes');

  const spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_minutes');

  const spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_minutes');

  p.append(spanCount, spanUnits);

  return p;
};

export const createSeconds = () => {
  const p = createParagraf();
  p.classList.add('timer__item_seconds');

  const spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_seconds');

  const spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_seconds');

  p.append(spanCount, spanUnits);

  return p;
};











