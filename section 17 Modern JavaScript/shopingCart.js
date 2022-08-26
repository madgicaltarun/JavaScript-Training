// Exporting Module
console.log("Exporting Module");

//Blocking code

console.log("Start Fetching Results");

// await fetch("https://jsonplaceholder.typicode.com/users");

console.log("Finishing Fetching");

const shopingCart = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(product, quantity);
};

const totalPrice = 1000;
const totoalQuantity = 330;

export { totalPrice, totoalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(product, quantity);
}
