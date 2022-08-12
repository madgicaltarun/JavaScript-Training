"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivary: function ({ starterIndex, time, address, mainIndex }) {
    console.log(starterIndex, time, address, mainIndex);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivary({
  time: "22:10",
  address: "Sre",
  mainIndex: 2,
  starterIndex: 2,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// Mutating Variables

let a = 111;
let b = 123;
const obj = { a: 23, b: 7, c: 13 };

({ a, b } = obj);

// Nested Objects

const {
  sat: { open: o, close: c },
} = restaurant.openingHours;

console.log(o, c);
/*

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // left side is know as destructuring

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
// Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(first, second);

//
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);

const nested = [2, 4, [5, 6]];

//const [i, , j] = nested;

// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);


//default values

const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);

*/
