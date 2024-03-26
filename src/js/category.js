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
    `

  wrap.id = `${index + 1}`;
}

const noProducts = () => {
  main.insertAdjacentHTML('beforeend', `
  <h1 class="no-products">Тут пока нет товаров</h1>
  `);
}

window.addEventListener('click', ({ target }) => {

  localStorage.removeItem('category');

  if (target.matches('.menu__catalog__link') || target.matches('.footer__catalog__link')) {
    data.forEach(item => {
      console.log(target.innerText);
      if (item.category === target.innerText) {
        arr.push(item);
      }
    })

  }

  localStorage.setItem('category', JSON.stringify(arr));
});


if (window.location.pathname.includes('category')) {

  const categoryArr = JSON.parse(localStorage.getItem('category'));

  if (categoryArr.length < 1) {
    noProducts();
  }

  categoryArr.forEach((elem, index) => {
    createCard(elem, index);
  })

  main.addEventListener('click', ({ target }) => {
    if (target.matches('.card__wrapper')) {
      const cardId = target.id;
      localStorage.setItem('card', JSON.stringify(categoryArr[cardId - 1]));
      window.location.replace('/card.html')
    }
  });

};

