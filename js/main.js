"use strict";

const pagBtnContainer = document.querySelector(".a-container");
const productsCont = document.querySelector(".products");

let paginationParameters = {
  total: 100,
  limit: 10,
  currentPage: 1,
  pageArr: [],
};

const pageNumbers = (total = 100, max = 10, current = 1) => {
  const half = Math.round(max / 2);
  let pagBTNs = Math.ceil(total / max);
  let to = max;

  if (current + half >= pagBTNs) {
    to = pagBTNs;
  } else if (current > half) {
    to = current + half;
  }

  let from = 0;

  if (to - max < 1) {
    from = 0;
  } else {
    from = to - max;
  }

  if (pagBTNs < max) max = pagBTNs;

  paginationParameters.pageArr = Array.from(
    { length: max },
    (_, i) => i + 1 + from
  );

  return paginationParameters.pageArr;
};

pageNumbers(
  paginationParameters.total,
  paginationParameters.limit,
  paginationParameters.currentPage
);

const pagBtns = function () {
  const arr = paginationParameters.pageArr;
  arr.forEach((element, i) => {
    const htmlBtn = `<span class="a-pags ${
      paginationParameters.currentPage === element ? "page--current" : ""
    }" data-page="${element}">${element}</span>`;
    console.log(htmlBtn);
    pagBtnContainer.insertAdjacentHTML("beforeend", htmlBtn);
  });

  const aPaginations = document.querySelectorAll(".a-pags");

  aPaginations.forEach((pagination) => {
    pagination.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e);
      paginationParameters.currentPage = parseInt(pagination.dataset.page);

      console.log(paginationParameters.currentPage);

      productsCont.innerHTML = "";
      getProducts(
        paginationParameters.limit,
        (paginationParameters.currentPage - 1) * paginationParameters.limit
      );
      updatePagination();
    });
  });
};

const updatePaginationButtons = function () {
  const aPaginations = document.querySelectorAll(".a-pags");
  const arr = paginationParameters.pageArr;

  aPaginations.forEach((element, i) => {
    console.log(element);
    const current = paginationParameters.currentPage;
    const htmlBtn = `<span class="a-pags ${
      current === +element.dataset.page ? "page--current" : ""
    }"  data-page="${arr[i]}">${arr[i]}</span>`;

    element.outerHTML = htmlBtn;
  });

  const newPaginations = document.querySelectorAll(".a-pags");

  newPaginations.forEach((pagination) => {
    pagination.addEventListener("click", (e) => {
      e.preventDefault();
      productsCont.innerHTML = "";
      getProducts(
        paginationParameters.limit,
        (paginationParameters.currentPage - 1) * paginationParameters.limit
      );
      updatePagination();
    });
  });
};

const updatePagination = function () {
  updatePaginationButtons();
};

pagBtns();
const getProducts = async function (lim, skp) {
  try {
    const API_URL = `https://dummyjson.com/products?limit=${lim}&skip=${skp}`;

    const res = await fetch(API_URL);
    const result = await res.json();

    paginationParameters.total = result.total;
    const productsArr = result.products;
    productsArr.forEach((el, i) => {
      let html = `
        <div class="product">
          <img src="${el.thumbnail}" alt="" srcset="" />
          <div>
            <h2>${el.title}</h2>
            <h3>Price: ${el.price} $</h3>
            <h3>Brand: ${el.brand}</h3>
            <h3>Rating: ${el.rating}</h3>
            <h3>Stock: ${el.stock}</h3>
            <p>${el.description}</p>
          </div>
        </div>`;
      productsCont.insertAdjacentHTML("beforeend", html);
    });
  } catch (error) {
    console.log(error);
  }
};

paginationParameters.currentPage = 1;
getProducts(paginationParameters.limit, 0);
