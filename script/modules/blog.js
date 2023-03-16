const container = document.querySelector('.container__blog');

const getData = async url => {
  const data = await fetch(url);

  return data.json();
};

const pageParams = new URLSearchParams(location.search);
const postPage = pageParams.get('page');

const {data,meta: {pagination}} = await getData(`https://gorest.co.in/public-api/posts?page=${postPage}`);


const res = data.map((art, index) => {
  const li = document.createElement('li');
  li.classList.add('blog__item');

  li.innerHTML = `
      <img src="./image/blog/${index + 1}.jpg" alt="image" class="blog__img">
      <div class="blog__wrapper">
        <a href="#" class="blog__link">
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

