"use strict";
///////////////////////////////////
const getProducts = async function (lim, skp) {
  try {
    const API_URL = `https://dummyjson.com/products?limit=${lim}&skip=${skp}`;

    const res = await fetch(API_URL);
    const result = await res.json();

    console.log(result);
    const id = result.products[0].id;
    ///
    const API_URL_ID = `https://dummyjson.com/products/${id}`;

    const resID = await fetch(API_URL_ID);
    const resultID = await resID.json();

    // console.log(resultID);
    for (let i = skp + 1; i < skp + lim + 1; i++) {
      console.log(i);
    }
  } catch (error) {
    console.log(error);
  }
};
getProducts(10, 0);
