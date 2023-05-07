// "use strict";
// ///////////////////////////////////
// const pagBtnContainer = document.querySelector(".a-container");
// const productsCont = document.querySelector(".products");
// ///////////////////////////////////
// ///////////////////////////////////
// let paginationParameters = {
//   total: 100,
//   limit: 10,
//   skip: 0,
//   currentPage: 0,
// };

// const pagBtns = function () {
//   let pageNumbers = paginationParameters.total / paginationParameters.limit;
//   // console.log(pageNumbers);
//   for (let i = 1; i <= pageNumbers; i++) {
//     const htmlBtn = `<a class="a-pags " href="#">${i}</a>`;
//     // console.log(btnArr[i]);

//     pagBtnContainer.insertAdjacentHTML("beforeend", htmlBtn);
//   }
// };
// pagBtns();

// const pageNumbers = (total, max, current) => {
//   const half = Math.round(max / 2);
//   let pagBTNs = Math.ceil(total / max);
//   // console.log(pagBTNs);
//   let to = max;

//   if (current + half >= pagBTNs) {
//     to = pagBTNs;
//   } else if (current > half) {
//     to = current + half;
//   }

//   let from = 0;

//   if (to - max < 1) {
//     from = 0;
//     // console.log(from);
//   } else {
//     from = to - max;
//   }
//   console.log(to);
//   if (pagBTNs < max) max = pagBTNs;
//   console.log(from);
//   return Array.from({ length: max }, (_, i) => i + 1 + from);
// };
// // const pageNumbers = (total, current) => {
// //   const half = Math.round(total / 2);
// //   let to = total;
// //   // console.log(to);

// //   if (current + half >= total) {
// //     to = total;
// //   } else if (current > half) {
// //     to = current + half;
// //   }
// //   console.log(to);

// //   let from = to - total;
// //   console.log(from);
// //   // console.log(from);
// //   return Array.from({ length: total }, (_, i) => i + 1 + from);
// // };
// console.log(pageNumbers(199, 10, 8));
// // /////////////////////////////
// // ////////////////////////////
// // function PaginationButtons(totalPages, maxPagesVisible = 10, currentPage = 1) {
// //   let pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
// //   let currentPageBtn = null;

// //   this.render = (container = document.body) => {};
// // }

// // const paginationButtons = new PaginationButtons(100);

// /////////////////////////////////
// ///////////////////////////////
// ////////////////////////////////
// const getProducts = async function (lim, skp) {
//   try {
//     const API_URL = `https://dummyjson.com/products?limit=${lim}&skip=${skp}`;

//     const res = await fetch(API_URL);
//     const result = await res.json();

//     const productsArr = result.products;
//     ///////////////////////////////
//     productsArr.forEach((el, i) => {
//       // console.log(el.thumbnail);
//       let html = `
//         <div class="product">
//           <img src="${el.thumbnail}" alt="" srcset="" />
//           <div>
//             <h2>${el.title}</h2>
//             <h3>Price: ${el.price} $</h3>
//             <h3>Brand: ${el.brand}</h3>
//             <h3>Rating: ${el.rating}</h3>
//             <h3>Stock: ${el.stock}</h3>
//             <p>${el.description}</p>
//           </div>
//         </div>`;
//       aPaginations[0].classList.add("page--current");
//       productsCont.insertAdjacentHTML("beforeend", html);
//     });
//     ///
//     // const API_URL_ID = `https://dummyjson.com/products/${id}`;

//     // const resID = await fetch(API_URL_ID);
//     // const resultID = await resID.json();
//     // console.log(resultID);

//     // console.log(id10);
//     // console.log(pageNumbers(id10, 10, 18));

//     // const btnArr = pageNumbers(id, 10, 18);

//     // console.log(btnArr);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getProducts(10, 0);

// ///////////////////////////////
// const aPaginations = document.querySelectorAll(".a-pags");
// ///////////////////////////////
// aPaginations.forEach((el, i) => {
//   // document.querySelector(".page--current").classList.remove("page--current");
//   // console.log(aPaginations[i]);
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     // console.log(aPaginations[i]);
//     // document.querySelector(".page--current").classList.remove("page--current");

//     aPaginations[i].classList.toggle("page--current");

//     // console.log(e.originalTarget.innerHTML);
//     const pageNum = +e.originalTarget.innerHTML;
//     paginationParameters.skip = pageNum;
//     productsCont.innerHTML = "";
//     getProducts(10, paginationParameters.skip);
//   });
// });

/**/ ///////////////////////// */
/**/ ///////////////////////// */
/**/ ///////////////////////// */
/**/ ///////////////////////// */

"use strict";
///////////////////////////////////
const pagBtnContainer = document.querySelector(".a-container");
const productsCont = document.querySelector(".products");
///////////////////////////////////

let paginationParameters = {
  total: 100,
  limit: 10,
  currentPage: 0,
  pageArr: [],
};
///////////////////////////////////

///////////////////////////////
///////////////////////////////////
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
///////////////////////////////////

///////////////////////////////////

const pagBtns = function () {
  const arr = paginationParameters.pageArr;

  arr.forEach((element, i) => {
    console.log(element);
    const htmlBtn = `<span class="a-pags ${
      paginationParameters.currentPage === element ? "page--current" : ""
    }" data-page="${element}">${element}</span>`;

    pagBtnContainer.insertAdjacentHTML("beforeend", htmlBtn);
  });

  const aPaginations = document.querySelectorAll(".a-pags");

  aPaginations.forEach((pagination) => {
    pagination.addEventListener("click", (e) => {
      e.preventDefault();

      console.log(e);
      paginationParameters.currentPage = +pagination.dataset.page;
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
      current === parseInt(element.dataset.page) ? "page--current" : ""
    }" data-page="${element.dataset.page}">${element.dataset.page}</span>`;
    element.outerHTML = htmlBtn;
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

    const productsArr = result.products;
    console.log(productsArr);
    ///////////////////////////////
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
        </div>
      `;
      productsCont.insertAdjacentHTML("beforeend", html);
    });
    ///
  } catch (error) {
    console.log(error);
  }
};

paginationParameters.currentPage = 1;
getProducts(paginationParameters.limit, 0);
