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
*/
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
