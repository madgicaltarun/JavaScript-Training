"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekdays = ["mon", "tues", "wed", "thus", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivary({ starterIndex, time, address, mainIndex }) {
    console.log(starterIndex, time, address, mainIndex);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },

  orderPaste(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1} , ${ing2} , ${ing3}`
    );
  },

  openingHours,
};
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days`;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Properties Values

const values = Object.values(openingHours);

// Entier Objects

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
console.log(restaurant.openingHours.mon.open);

// With Optional Channing

console.log(restaurant.openingHours.mon?.open);

// Example

const days = ["mon", "tues", "wed", "thus", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open} `);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? "Method does not exists");

//Arrays

const users = [{ name: "tarun", email: "tarun@123" }];

console.log(users[0]?.name ?? "User is empty");

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

const arr = [7, 8, 9];
const badNewArray = [1, 2, 3, arr[1]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, "Cake"];
console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];

// Join Two Array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterable : arrays, string, map, sets, NOT Objects

const str = "Tarun";

const letters = [...str, "", "s"];
console.log(letters);

// real world examples

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// restaurant.orderPaste(...ingredients);

//objects

const newResturant = { ...restaurant, founder: "tarun" };
console.log(newResturant);


//Des
// Spread because of right side of assign operator
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4];

console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFoods);

// Objects

const { sat, ...othersDay } = restaurant.openingHours;

//functions

const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 3);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza("mushrooms", "onion", "olive", "spinach");
// Use any data Type , return any data Type  short circuiting

console.log("-------OR-----");

console.log(3 || "tarun");

console.log("" || "Hiii");

console.log(true || 0);

console.log(undefined || null);

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guest2 = restaurant.numGuests || 10;

console.log("-------AND------");

console.log(0 && "tarun");

console.log(7 && "Tarun");

//practical Example

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spainach");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom");

// Nullish values are null and undefined

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;

console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
const restaurant1 = {
  name: "capri",
  numGuests: 20,
};

const restaurant2 = {
  name: "La Piazza",
  owner: "tarun rai",
};

restaurant1.numGuests = restaurant1.numGuests || 10;
//  OR assignment Operator
// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;

// Logical Nullish assigmnent

restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;
restaurant1.owner = restaurant1.owner && "<Anonymous>";
restaurant2.owner = restaurant2.owner && "<Anonymous>";
restaurant2.numGuests = restaurant2.numGuests || 10;
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // we can use break and continue in this loop

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}`);
}
*/
