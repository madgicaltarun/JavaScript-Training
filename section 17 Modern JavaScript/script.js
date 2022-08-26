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

import add, { cart } from "./shopingCart.js";
add("pizza", 5);
add("bread", 5);
add("apples", 5);

console.log(cart);

// // Note aysnc function always return a promise
// const lastData = getLastPost();
// console.log(lastData);

// lastData.then((res) => console.log(res));

// // Top level await

// const lastData2 = await getLastPost();

// console.log(lastData2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totoalQuantity = 27;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(product, quantity);
//   };
//   const orderStock = function (product, quantity) {
//     console.log("ordered from supplier");
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totoalQuantity,
//   };
// })();

// console.log(ShoppingCart2);

import cloneDeep from "lodash-es";

const state = {
  cart: [{ product: "bread", qunatity: 5 }],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateCloneDeep);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = "hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting} ${this.name}`);
  }
}

const tarun = new Person("Tarun");
const cart1 = [2, 4, 5, 7, 8];

console.log(cart1.find((el) => el >= 2));
