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
  const  bascetItem = JSON.parse(localStorage.getItem('card'));
  const  bascetCard = JSON.parse(localStorage.getItem('bascet')) || [];

  const id = bascetItem.id;

  if (!bascetCard.some(item => item.id == id)) {
    bascetCard.push(bascetItem);

    localStorage.setItem('bascet', JSON.stringify(bascetCard));
  }

})
};














