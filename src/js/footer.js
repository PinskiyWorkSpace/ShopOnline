const list = document.querySelector('.footer__catalog__list');
const title = document.querySelector('.footer__catalog__title');

title.addEventListener('click', () => {
  if (document.documentElement.clientWidth < 321) {
    list.classList.toggle('footer__catalog__list-active');
    title.classList.toggle('footer__catalog__title-active');
    console.log(list);
  }
})



