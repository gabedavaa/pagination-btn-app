"use strict";
///////////////////////////////////
const pagBtnContainer = document.querySelector(".a-container");
const productsCont = document.querySelector(".products");
///////////////////////////////////
///////////////////////////////////
let paginationParameters = {
  total: 100,
  limit: 10,
  skip: 0,
  currentPage: 0,
};

const pagBtns = function () {
  let pageNumbers = paginationParameters.total / paginationParameters.limit;
  // console.log(pageNumbers);
  for (let i = 1; i <= pageNumbers; i++) {
    const htmlBtn = `<a class="a-pags" href="#">${i}</a>`;
    // console.log(btnArr[i]);

    pagBtnContainer.insertAdjacentHTML("beforeend", htmlBtn);
  }
};
pagBtns();
// const pageNumbers = (total, max, current) => {
//   const half = Math.round(max / 2);
//   let to = max;
//   // console.log(to);

//   if (current + half >= total) {
//     to = total;
//   } else if (current > half) {
//     to = current + half;
//   }
//   // console.log(to);

//   let from = to - max;
//   // console.log(from);
//   return Array.from({ length: max }, (_, i) => i + 1 + from);
// };

// /////////////////////////////
// ////////////////////////////
// function PaginationButtons(totalPages, maxPagesVisible = 10, currentPage = 1) {
//   let pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
//   let currentPageBtn = null;

//   this.render = (container = document.body) => {};
// }

// const paginationButtons = new PaginationButtons(100);

/////////////////////////////////
///////////////////////////////
////////////////////////////////
const getProducts = async function (lim, skp) {
  try {
    const API_URL = `https://dummyjson.com/products?limit=${lim}&skip=${skp}`;

    const res = await fetch(API_URL);
    const result = await res.json();
    // console.log(result.products);
    const productsArr = result.products;
    // const id = result.products[0].total;
    ///////////////////////////////
    productsArr.forEach((el, i) => {
      // console.log(el.thumbnail);
      console.log(el);
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
    ///
    // const API_URL_ID = `https://dummyjson.com/products/${id}`;

    // const resID = await fetch(API_URL_ID);
    // const resultID = await resID.json();
    // console.log(resultID);

    // console.log(id10);
    // console.log(pageNumbers(id10, 10, 18));

    // const btnArr = pageNumbers(id, 10, 18);

    // console.log(btnArr);
  } catch (error) {
    console.log(error);
  }
};
getProducts(10, 0);

///////////////////////////////
const aPaginations = document.querySelectorAll(".a-pags");
///////////////////////////////
aPaginations.forEach((el, i) => {
  // console.log(el);
  el.addEventListener("click", function (e) {
    console.log(e.originalTarget.innerHTML);
    const pageNum = +e.originalTarget.innerHTML;
    paginationParameters.skip = pageNum;
    productsCont.innerHTML = "";
    getProducts(10, paginationParameters.skip);
  });
});
