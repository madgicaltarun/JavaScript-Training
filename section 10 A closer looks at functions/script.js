"use strict";
/*
const bookings = [];

const createbooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //ES5
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  bookings.push(booking);
};

createbooking("LH123");
createbooking("LH123", undefined, 1000);
const flight = "LH234";
const tarun = {
  name: "Tarun Rai",
  passport: 23456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH1111";
  passenger.name = "Mr. Tarun Rai";

  if (passenger.passport === 23456789) {
    alert("CheckIn");
  } else {
    alert("Worng passport");
  }
};

checkIn(flight, tarun);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(tarun);
checkIn(flight, tarun);
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...otherWord] = str.split(" ");
  return [first.toUpperCase(), ...otherWord].join(" ");
};

const transformer = function (str, fun) {
  console.log(`Original String`);
  console.log(`Transform String ${fun(str)}`);

  console.log(`transForm By ${fun.name}`);
};
transformer("JavaScript is the best", upperFirstWord);
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greet("Hey");
greetingHey("Tarun");

greet("hello")("rajput");

//challenge

const greet1 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet1("hIIIII")("Tarun");


const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Tarun Rai");

const eurowing = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;
//Does not work
//book(23, "Paras");
// Call Method
book.call(eurowing, 23, "Tarun Rajput");
console.log(eurowing);

book.call(lufthansa, 22, "Rai Tarun");

// Apply method

const flightData = [583, "George Cooper"];

book.apply(eurowing, flightData);

book.call(lufthansa, ...flightData);

// Bind Method

const bookEW = book.bind(eurowing);
const bookLH = book.bind(lufthansa);

bookEW(11, "Hii");

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 23);
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

const runOnce = function () {
  console.log(" This will never run");
};

(function () {
  console.log("It will neveerrrrr again");
})();

*/
// closures

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
