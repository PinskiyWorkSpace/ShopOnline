if (window.location.pathname.includes('shop')) {

  const shop = JSON.parse(localStorage.getItem('bascet')) || [];

  const bascetWrapper = document.querySelector('.basket__wrapper');
  const bascetCountTitle = document.querySelector('.basket__title-count');
  const bascetCount = document.querySelector('.basket__count');
  const bascetReset = document.querySelector('.basket__reset');
  const allGoods = document.querySelector('input[name="all-goods"]');
  const bascetImage = document.querySelector('.delivery__basket--image');

  const totalQuantity = document.querySelector('.total__quantity');
  const totalResult = document.querySelector('.total__text-result');
  const totalDiscount = document.querySelector('.total__text-discount');

  bascetCountTitle.textContent = shop.length;
  totalQuantity.textContent = shop.length;

  const cardGoods = (item) => {
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
          <div><span  class="basket-product__price-new">${item.price - item.discount}</span>р</div>
          <div class="basket-product__price-old">${item.price}р</div>
          <a href="#" class="basket-product__link">В кредит от 5600 ₽</a>
        </div>
      </div>
    </div>
    `)
  }

  const getDiscount = () => {
    let sum = 0;
    shop.forEach(el => {
      sum += +el.discount;
    })
    totalDiscount.textContent = sum;
  }

  const getResult = () => {
    console.log(shop);
    let sum = 0;
    shop.forEach(el => {
      sum += +el.price;
    })
    totalResult.textContent = sum;
  }

  const bascetImg = (item) => {
    bascetImage.insertAdjacentHTML('beforeend', `
    <img src="${'https://vast-boom-utensil.glitch.me/'}${item.image}" alt="Фотогравия товара в корзине" width="80" height="80">
    `);
  }

  shop.forEach(item => {
    cardGoods(item);
    bascetImg(item);
  });

  const getTotalPrice = () => {
    const productPrice = document.querySelectorAll('.basket-product__price-new');
    let sum = 0;
    productPrice.forEach(el => {
      sum += parseInt(el.textContent);
    })

    const totalSum = document.querySelector('.total__sum');
    totalSum.textContent = sum;
  };

  getTotalPrice();
  getResult()
  getDiscount();

  window.addEventListener('click', ({ target }) => {

    if (target.closest('.count__btn-more')) {
      const productWrapper = target.closest('.basket-product__wrapper');
      const countUnit = productWrapper.querySelector('.count-unit');
      const productPrice = productWrapper.querySelector('.basket-product__price-new');

      ++countUnit.textContent;
      ++totalQuantity.textContent;
      ++bascetCountTitle.textContent;
      ++bascetCount.textContent;

      shop.forEach(el => {
        if (el.id == productWrapper.dataset.id) {
          const sum = el.price - el.discount;
          productPrice.textContent = sum * countUnit.textContent;
          totalDiscount.textContent = +totalDiscount.textContent + +el.discount;
          totalResult.textContent = +totalResult.textContent + +el.price;
        }
      });


      getTotalPrice();
    }


    if (target.closest('.count__btn-less')) {
      const productWrapper = target.closest('.basket-product__wrapper');
      const countUnit = productWrapper.querySelector('.count-unit');

      if (parseInt(countUnit.textContent) > 1) {
        const productPrice = productWrapper.querySelector('.basket-product__price-new');

        --countUnit.textContent;
        --totalQuantity.textContent;
        --bascetCountTitle.textContent;
        --bascetCount.textContent;

        shop.forEach(el => {
          if (el.id == productWrapper.dataset.id) {
            const sum = el.price - el.discount;
            productPrice.textContent = sum * countUnit.textContent;
            totalDiscount.textContent = +totalDiscount.textContent - +el.discount;
            totalResult.textContent = +totalResult.textContent - +el.price;
          }
        });
      }

      getTotalPrice();
    }


    if (target.closest('.checkbox__all-goods')) {
      if (allGoods.checked) {
        const checkboxAll = document.querySelectorAll('#product');
        checkboxAll.forEach(el => {
          el.checked = true;
        })
      }
      else {
        const checkboxAll = document.querySelectorAll('#product');
        checkboxAll.forEach(el => {
          el.checked = false;
        })
      }
    }

  });

  bascetReset.addEventListener('click', () => {
    const bascetProductWrapper = document.querySelectorAll('.basket-product__wrapper');
    bascetProductWrapper.forEach(el => {
      if (el.querySelector('#product').checked) {
        el.remove()

        const id = el.dataset.id;

        const index = shop.map(x => x.id).indexOf(id);
        shop.splice(index, 1);

        localStorage.setItem('bascet', JSON.stringify(shop));
      }
    })

  })

}





