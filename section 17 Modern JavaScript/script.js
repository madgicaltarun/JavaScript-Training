// Importing module
// "use strict";
// import { addToCart, totalPrice as price, totoalQuantity } from "./shopingCart";
// ("./shopingCart.js");

// import * as ShoppingCart from "./shopingCart.js";
// console.log("Importing Module");

// ShoppingCart.addToCart("bread", 5);
// console.log(price, totoalQuantity);

// import add from "./shopingCart.js";

// add("bread", 5);
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");

// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// // Note aysnc function always return a promise
// const lastData = getLastPost();
// console.log(lastData);

// lastData.then((res) => console.log(res));

// // Top level await

// const lastData2 = await getLastPost();

// console.log(lastData2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totoalQuantity = 27;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(product, quantity);
  };
  const orderStock = function (product, quantity) {
    console.log("ordered from supplier");
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totoalQuantity,
  };
})();

console.log(ShoppingCart2);
