/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 146:
/***/ (function(__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
if (window.location.pathname == '/blog.html') {
  const container = document.querySelector('.container__blog');
  const getData = async url => {
    const data = await fetch(url);
    return data.json();
  };
  const pageParams = new URLSearchParams(location.search);
  const postPage = pageParams.get('page');
  const {
    data,
    meta: {
      pagination
    }
  } = await getData(`https://gorest.co.in/public-api/posts?page=${postPage}`);
  const res = data.map((art, index) => {
    const li = document.createElement('li');
    li.classList.add('blog__item');
    li.innerHTML = `
      <img src="./image/blog/${index + 1}.jpg" alt="image" class="blog__img">
      <div class="blog__wrapper">
        <a href="https://gorest.co.in/public-api/posts/${art.id}" class="blog__link">
          <h2 class="blog__title">${art.title}</h2>
        </a>
        <p class="blog__text">22 октября 2021, 12:45</p>

        <div class="counter__wrapper">
          <div class="counter">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.257 11.462C21.731 12.082 21.731 12.919 21.257 13.538C19.764 15.487 16.182 19.5 12 19.5C7.81801 19.5 4.23601 15.487 2.74301 13.538C2.51239 13.2411 2.38721 12.8759 2.38721 12.5C2.38721 12.1241 2.51239 11.7589 2.74301 11.462C4.23601 9.513 7.81801 5.5 12 5.5C16.182 5.5 19.764 9.513 21.257 11.462V11.462Z"
                stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
                stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="counter__views">1.2k</span>
          </div>

          <div class="counter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z"
                fill="#8F8F8F" />
            </svg>
            <span class="counter__message">0</span>
          </div>
        </div>
      </div>
    `;
    return li;
  });
  const createBlog = () => {
    const ul = document.createElement('ul');
    ul.classList.add('blog__list');
    ul.append(...res);
    return ul;
  };
  container.append(createBlog());
  const paginationList = () => {
    const ul = document.querySelector('.pagination__list');
    ul.innerHTML = `
    <li class="pagination__item arrow">
    <a href="?page=${pagination.page - 1}" class="pagination__link arrow__left"></a>
    </li>
    <li class="pagination__item">
      <a href="?page=${pagination.page - 1}" class="pagination__link">${pagination.page - 1}</a>
    </li>
    <li class="pagination__item">
      <a href="?page=${pagination.page}" class="pagination__link">${pagination.page}</a>
    </li>
    <li class="pagination__item">
      <a href="?page=${pagination.page + 1}" class="pagination__link">${pagination.page + 1}</a>
    </li>
    <li class="pagination__item arrow">
      <a href="?page=${pagination.page + 1}" class="pagination__link arrow__rigth"></a>
    </li>
  `;
    return ul;
  };
  container.append(paginationList());
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 100:
/***/ (function() {

if (window.location.pathname == '/card.html') {
  const card = JSON.parse(localStorage.getItem('card'));
  console.log('card: ', card);
  const title = document.querySelector('.product__title');
  const image = document.querySelector('.product__image');
  const description = document.querySelector('.product__description__text');
  const newPrice = document.querySelector('.block__new-price');
  const oldPrice = document.querySelector('.block__old-price');
  const blockBtn = document.querySelector('.block__btn');
  title.innerHTML = card.title;
  image.src = 'https://vast-boom-utensil.glitch.me/' + card.image;
  description.innerHTML = card.description;
  newPrice.innerHTML = card.price;
  oldPrice.innerHTML = card.price;
  blockBtn.addEventListener('click', () => {
    const bascetItem = JSON.parse(localStorage.getItem('card'));
    const bascetCard = JSON.parse(localStorage.getItem('bascet')) || [];
    const id = bascetItem.id;
    if (!bascetCard.some(item => item.id == id)) {
      bascetCard.push(bascetItem);
      localStorage.setItem('bascet', JSON.stringify(bascetCard));
    }
  });
}
;

/***/ }),

/***/ 650:
/***/ (function(__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
const URL = 'https://vast-boom-utensil.glitch.me/api/goods/';
const response = await fetch(URL);
const data = await response.json();
const menu = document.querySelector('.menu__catalog__list');
const main = document.querySelector('.profitable__wrapper');
const arr = [];
const createCard = (item, index) => {
  main.insertAdjacentHTML('beforeend', `
    <div class="profitable__card">
            <div class="card__wrapper card${index + 1}">
              <div class="circle"> -30%</div>
            </div>
            <div class="card__price">
              <span class="new-price">${item.price}₽</span>
              <span class="old-price">890₽</span>
            </div>
            <div class="card__text">${item.title}</div>
          </div>
    `);
  const wrap = document.querySelector(`.card${index + 1}`);
  wrap.style.cssText = `
    background-image: url(${'https://vast-boom-utensil.glitch.me/'}${item.image});
    background-size: contain;
    `;
  wrap.id = `${index + 1}`;
};
const noProducts = () => {
  main.insertAdjacentHTML('beforeend', `
  <h1 class="no-products">Тут пока нет товаров</h1>
  `);
};
window.addEventListener('click', ({
  target
}) => {
  localStorage.removeItem('category');
  if (target.matches('.menu__catalog__link') || target.matches('.footer__catalog__link')) {
    data.forEach(item => {
      console.log(target.innerText);
      if (item.category === target.innerText) {
        arr.push(item);
      }
    });
  }
  localStorage.setItem('category', JSON.stringify(arr));
});
if (window.location.pathname == '/category.html') {
  const categoryArr = JSON.parse(localStorage.getItem('category'));
  if (categoryArr.length < 1) {
    noProducts();
  }
  categoryArr.forEach((elem, index) => {
    createCard(elem, index);
  });
  main.addEventListener('click', ({
    target
  }) => {
    if (target.matches('.card__wrapper')) {
      const cardId = target.id;
      localStorage.setItem('card', JSON.stringify(categoryArr[cardId - 1]));
      window.location.replace('/card.html');
    }
  });
}
;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 841:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cj: function() { return /* binding */ getTimeRemaining; },
/* harmony export */   R3: function() { return /* binding */ declination; },
/* harmony export */   fU: function() { return /* binding */ formatTime; }
/* harmony export */ });
const getTimeRemaining = () => {
  const timers = document.querySelector('.timer');
  timers.dataset.deadline = '2023/12/29 21:00';
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
const basketCount = document.querySelector('.basket__count');
basketCount.textContent = JSON.parse(localStorage.getItem('bascet')).length;
window.addEventListener('click', ({
  target
}) => {
  if (target.matches('.header__menu')) {
    console.log(target.matches('.header__menu'));
    menu.classList.toggle('menu__active');
  }
});

/***/ }),

/***/ 933:
/***/ (function() {

const list = document.querySelector('.footer__catalog__list');
const title = document.querySelector('.footer__catalog__title');
title.addEventListener('click', () => {
  if (document.documentElement.clientWidth < 321) {
    list.classList.toggle('footer__catalog__list-active');
    title.classList.toggle('footer__catalog__title-active');
    console.log(list);
  }
});

/***/ }),

/***/ 671:
/***/ (function(__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(158);
/* harmony import */ var _control_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(841);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(933);
/* harmony import */ var _blog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(146);
/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(650);
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(100);
/* harmony import */ var _shop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_blog_js__WEBPACK_IMPORTED_MODULE_2__, _category_js__WEBPACK_IMPORTED_MODULE_3__]);
([_blog_js__WEBPACK_IMPORTED_MODULE_2__, _category_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







if (window.location.pathname == '/index.html') {
  console.log('main.html');
  const timer = () => {
    const timerMain = document.querySelector('.timer');
    (0,_render_js__WEBPACK_IMPORTED_MODULE_6__/* .render */ .X)(timerMain);
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
      const timer = (0,_control_js__WEBPACK_IMPORTED_MODULE_0__/* .getTimeRemaining */ .Cj)();
      if (timer.day === 0) {
        itemDays.classList.add('hiden');
        itemseconds.classList.remove('hiden');
      } else {
        itemDays.classList.remove('hiden');
        itemseconds.classList.add('hiden');
      }
      textDays.textContent = (0,_control_js__WEBPACK_IMPORTED_MODULE_0__/* .declination */ .R3)(timer.day, ['день', 'дня', 'дней']);
      textHours.textContent = (0,_control_js__WEBPACK_IMPORTED_MODULE_0__/* .declination */ .R3)(timer.hour, ['час', 'часа', 'часов']);
      textMinutes.textContent = (0,_control_js__WEBPACK_IMPORTED_MODULE_0__/* .declination */ .R3)(timer.minutes, ['минута', 'минуты', 'минут']);
      textSeconds.textContent = (0,_control_js__WEBPACK_IMPORTED_MODULE_0__/* .declination */ .R3)(timer.seconds, ['секунда', 'секунды', 'секунд']);
      timeDays.textContent = (0,_control_js__WEBPACK_IMPORTED_MODULE_0__/* .formatTime */ .fU)(timer.day);
      timeHours.textContent = (0,_control_js__WEBPACK_IMPORTED_MODULE_0__/* .formatTime */ .fU)(timer.hour);
      timeMinutes.textContent = (0,_control_js__WEBPACK_IMPORTED_MODULE_0__/* .formatTime */ .fU)(timer.minutes);
      timeSeconds.textContent = (0,_control_js__WEBPACK_IMPORTED_MODULE_0__/* .formatTime */ .fU)(timer.seconds);
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
}
;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 158:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: function() { return /* binding */ render; }
});

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

/***/ }),

/***/ 554:
/***/ (function() {

if (window.location.pathname == '/shop.html') {
  const shop = JSON.parse(localStorage.getItem('bascet')) || [];
  console.log('shop: ', shop);
  const bascetWrapper = document.querySelector('.basket__wrapper');
  const bascetCount = document.querySelector('.basket__title-count');
  const bascetReset = document.querySelector('.basket__reset');
  const allGoods = document.querySelector('input[name="all-goods"]');
  const bascetImage = document.querySelector('.delivery__basket--image');
  bascetCount.textContent = shop.length;
  const cardGoods = item => {
    bascetWrapper.insertAdjacentHTML('beforeend', `
    <div class="basket-product__wrapper" data-id="${item.id}">
      <input type="checkbox" name="product" id="product">
      <img class="basket-product__img" src="${'https://vast-boom-utensil.glitch.me/'}${item.image}" alt="Фотография товара">
      <div class="basket-product__wrapper-goods">
        <div class="basket-product__wrapper-description">
          <h3 class="basket-product__title">${item.title}</h3>
          <div class="basket-product__description">
            <p class="basket-product__text">Цвет: черный</p>
            <p class="basket-product__text">Оперативная память: 16 ГБ</p>
          </div>
        </div>
        <div class="basket-product__count">
          <button class="count__btn-less">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="17.5" fill="white" stroke="#E8E8E8"/>
              <path d="M14.2 18.088H21.08V19.168H14.2V18.088Z" fill="#8F8F8F"/>
              </svg>
          </button>
          <span class="count-unit">1</span>
          <button class="count__btn-more">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="17.5" fill="white" stroke="#E8E8E8" />
              <path
                d="M21.48 19.168H18.216V22.608H17.056V19.168H13.808V18.088H17.056V14.672H18.216V18.088H21.48V19.168Z"
                fill="#2D2D2D" />
            </svg>
          </button>
        </div>
        <div class="basket-product__price">
          <div><span  class="basket-product__price-new">${item.price}</span>р</div>
          <div class="basket-product__price-old">140590р</div>
          <a href="#" class="basket-product__link">В кредит от 5600 ₽</a>
        </div>
      </div>
    </div>
    `);
  };
  const bascetImg = item => {
    bascetImage.insertAdjacentHTML('beforeend', `
    <img src="${'https://vast-boom-utensil.glitch.me/'}${item.image}" alt="Фотогравия товара в корзине" width="80" height="80">
    `);
  };
  shop.forEach(item => {
    cardGoods(item);
    bascetImg(item);
  });
  const getTotalPrice = () => {
    const productPrice = document.querySelectorAll('.basket-product__price-new');
    let sum = 0;
    productPrice.forEach(el => {
      sum += parseInt(el.textContent);
    });
    const totalSum = document.querySelector('.total__sum');
    totalSum.textContent = sum;
  };
  getTotalPrice();
  window.addEventListener('click', ({
    target
  }) => {
    //? не знаю как правильно посчитать

    if (target.closest('.count__btn-more')) {
      const productWrapper = target.closest('.basket-product__wrapper');
      const countUnit = productWrapper.querySelector('.count-unit');
      countUnit.textContent = ++countUnit.textContent;
      const productPrice = productWrapper.querySelector('.basket-product__price-new');
      const aaa = parseInt(productPrice.textContent);
      productPrice.textContent = aaa * countUnit.textContent;
      getTotalPrice();
    }
    if (target.closest('.count__btn-less')) {
      const productWrapper = target.closest('.basket-product__wrapper');
      const countUnit = productWrapper.querySelector('.count-unit');
      if (parseInt(countUnit.textContent) > 1) {
        const productPrice = productWrapper.querySelector('.basket-product__price-new');
        const aaa = parseInt(productPrice.textContent);
        productPrice.textContent = aaa / countUnit.textContent;
        countUnit.textContent = --countUnit.textContent;
      }
      getTotalPrice();
    }
    if (target.closest('.checkbox__all-goods')) {
      if (allGoods.checked) {
        const checkboxAll = document.querySelectorAll('#product');
        checkboxAll.forEach(el => {
          el.checked = true;
        });
      } else {
        const checkboxAll = document.querySelectorAll('#product');
        checkboxAll.forEach(el => {
          el.checked = false;
        });
      }
    }
  });
  bascetReset.addEventListener('click', () => {
    const bascetProductWrapper = document.querySelectorAll('.basket-product__wrapper');
    bascetProductWrapper.forEach(el => {
      if (el.querySelector('#product').checked) {
        el.remove();
        const id = el.dataset.id;
        const index = shop.map(x => x.id).indexOf(id);
        shop.splice(index, 1);
        localStorage.setItem('bascet', JSON.stringify(shop));
      }
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	!function() {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = function(queue) {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach(function(fn) { fn.r--; });
/******/ 				queue.forEach(function(fn) { fn.r-- ? fn.r++ : fn(); });
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = function(deps) { return deps.map(function(dep) {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then(function(r) {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, function(e) {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = function(fn) { fn(queue); };
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = function() {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}); };
/******/ 		__webpack_require__.a = function(module, body, hasAwait) {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise(function(resolve, rej) {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = function(fn) { queue && fn(queue), depQueues.forEach(fn), promise["catch"](function() {}); };
/******/ 			module.exports = promise;
/******/ 			body(function(deps) {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = function() { return currentDeps.map(function(d) {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}); }
/******/ 				var promise = new Promise(function(resolve) {
/******/ 					fn = function() { resolve(getResult); };
/******/ 					fn.r = 0;
/******/ 					var fnQueue = function(q) { q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))); };
/******/ 					currentDeps.map(function(dep) { dep[webpackQueues](fnQueue); });
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, function(err) { (err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue); });
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(671);
/******/ 	
/******/ })()
;