"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timerTitle = exports.createWrapper = exports.createSeconds = exports.createMinutes = exports.createHours = exports.createDay = exports.banerTitle = void 0;
var banerTitle = function banerTitle() {
  var h1 = document.createElement('h1');
  h1.classList.add('banner__title');
  h1.textContent = '50% на все ноутбуки';
  return h1;
};
exports.banerTitle = banerTitle;
var createParagraf = function createParagraf() {
  var p = document.createElement('p');
  p.classList.add('timer__item');
  return p;
};
var createSpan = function createSpan() {
  var span = document.createElement('span');
  return span;
};
var createWrapper = function createWrapper() {
  var div = document.createElement('div');
  div.classList.add('timer__block');
  return div;
};
exports.createWrapper = createWrapper;
var timerTitle = function timerTitle() {
  var title = createParagraf();
  title.classList.remove('timer__item');
  title.classList.add('timer__title');
  title.textContent = 'До конца акции:';
  return title;
};
exports.timerTitle = timerTitle;
var createDay = function createDay() {
  var p = createParagraf();
  p.classList.add('timer__item_days');
  var spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_days');
  var spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_days');
  p.append(spanCount, spanUnits);
  return p;
};
exports.createDay = createDay;
var createHours = function createHours() {
  var p = createParagraf();
  p.classList.add('timer__item_hours');
  var spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_hours');
  var spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_hours');
  p.append(spanCount, spanUnits);
  return p;
};
exports.createHours = createHours;
var createMinutes = function createMinutes() {
  var p = createParagraf();
  p.classList.add('timer__item_minutes');
  var spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_minutes');
  var spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_minutes');
  p.append(spanCount, spanUnits);
  return p;
};
exports.createMinutes = createMinutes;
var createSeconds = function createSeconds() {
  var p = createParagraf();
  p.classList.add('timer__item_seconds');
  var spanCount = createSpan();
  spanCount.classList.add('timer__count', 'timer__count_seconds');
  var spanUnits = createSpan();
  spanUnits.classList.add('timer__units', 'timer__units_seconds');
  p.append(spanCount, spanUnits);
  return p;
};
exports.createSeconds = createSeconds;
//# sourceMappingURL=../maps/create.js.map
