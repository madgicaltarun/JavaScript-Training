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

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.replaceAll("_", " ").trim()} ${from
    .slice(0, 3)
    .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(
    ":",
    "h"
  )})`;
  console.log(output);
}
/*

console.log("a+very+nice+string".split("+"));
console.log("Tarun rai".split(" "));

const [first, lastName] = "Tarun rai".split(" ");

const nameString = ["MR.", first, lastName.toUpperCase()].join(" ");
console.log(nameString);
const captizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};
const passenger = "jessica ann smith devis";

captizeName(passenger);

//padding

const message = "Go to gate 23";
console.log(message.padStart(25, "+").padEnd(10, "+"));

const maskCreditCard = function (number) {
  const string = number + "";
  const last = string.slice(-4);
  return last.padStart(string.length, "*");
};
console.log(maskCreditCard(4433333784848478));

const message2 = "Bad wearther...all departure delayed";
console.log(message2.repeat(5));
const airline = "TAP Air portugal";
console.log(airline.toLowerCase());

//Fix capitilization in name\

const passenger = "jOnUs";

const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing Email

const email = "hello@jonus.io";

const loginEmail = "    Hello@Jonus.Io   \n";

const lowerEmail = loginEmail.toLowerCase();

const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();

// Replacing

const priceGB = "288,77P";
const priceUS = priceGB.replace("P", "D").replace(",", ".");
console.log(priceUS);

const announcment = "All passengers come to boarding door 23, Boarding door 23";

console.log(announcment.replaceAll("door", "gate"));

//Boolean includes.startWith, endsWith

const plane = "A320neo";
console.log(plane.includes("A320"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("neo"));

// Practice exercise

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome to the board");
  }
};
checkBaggage(" I have a laptop, some food and a pocket knife");
checkBaggage("Socks and camera");
const airline = "Air India";
const plane = "A320";
console.log(plane.at(0));

console.log(airline.length);
console.log(airline.indexOf("I"));
console.log(airline.lastIndexOf("i"));

console.log(airline.slice(4)); // always return a new String

console.log(airline.slice(1, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-1));

console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are the middle seat
  if (seat.slice(-1) === "E" || seat.slice(-1) === "B") {
    console.log("Seat is middle");
  } else {
    console.log("Seat is not a middle seat");
  }
};

checkMiddleSeat("118");
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);

console.log(question);
// Converting Object into map
console.log(Object.entries(openingHours));

const hourMap = new Map(Object.entries(openingHours));

console.log(hourMap);

console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
}

const answer = Number(prompt("your Answer"));

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log(...question);
const rest = new Map();

rest.set("name", "Tarun Rai");
rest.set(1, "saharanpur");
rest.set(2, "India");

rest
  .set("categories", ["India", "Pakistan", "Butan"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open ");

const time = 21;
console.log(
  rest.get(rest.get(time > rest.get("open") && time < rest.get("close")))
);

console.log(rest.has("categories"));
console.log(rest);
rest.delete(2);
console.log(rest);

rest.set(document.querySelector("h1"), "heading");
const arr = [1, 2];

rest.set(arr, "Tests");
console.log(rest.get(arr));
const orderset = new Set(["pasta", "pizza", "pizza", "Rissoto", "Pizza"]);

console.log(orderset.size);
orderset.add("Cake");
orderset.delete("Cake");

for (const order of orderset) {
  console.log(order);
}

// Example

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];

const staffUnique = new Set(staff);
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
