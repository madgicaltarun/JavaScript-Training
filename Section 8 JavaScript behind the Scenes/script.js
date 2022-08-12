"use strict";
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var tarun = true;
      const str = `Oh, you are a millenial ${firstName}`;
      function add(a, b) {
        console.log(a + b);
        return a + b;
      }
    }

    // add(2, 3);

    console.log(tarun);
  }
  printAge();
  return age;
}

const firstName = "Tarun";
calcAge(1991);

console.log(me);
console.log(job);
console.log(year);

var me = "Tarun";
let job = "teacher";
const year = 1997;

// function

console.log(addDec(1, 2));
console.log(addexp(2, 3));
console.log(addArrow(1, 3));

function addDec(a, b) {
  return a + b;
}

const addexp = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;


if (!numberProduct) deleteProduct();

var numberProduct = 10;

function deleteProduct() {
  console.log("All product is deleted");
}

let x = 1;
const y = 2;
var z = 3;
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const tarun = {
    year: 1991,
    calcAge: function () {
      console.log(this);
    },
  };

tarun.calcAge();

const vinni = {
  year: 1222,
};

vinni.calcAge = tarun.calcAge;

vinni.calcAge();


// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

let firstName = "tarun Rai";

const tarun = {
  firstName: "Tarun",
  year: 1991,
  calcAge: function () {
    console.log(this);

    //solution 1
    const self = this;

    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    //solution 2 using arrow funtion
    isMillenial();
  },
  greet: () => console.log(`Hey #${this.firstName}`),
};
tarun.greet();



const addexp = function (a, b) {
  console.log(arguments);
  return a + b;
};

addexp(5, 6);

const addArrow = (a, b) => {
  console.log(arguments);
};

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: "Tarun",
  age: 31,
};

const frined = me;
frined.age = 39;

console.log("Friend", frined);
console.log("Me", me);

let lastName = "Rai";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  fistName: "jessica",
  lastName: "Rai",
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = "Davis";

console.log("Before Marriage", jessica);
console.log("After Marriage", marriedJessica);
*/

//copying Object

const jessica2 = {
  firstName: "Tarun",
  lastName: "Rao",
  age: 25,
  family: ["Alice", "Tarun"],
};

const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = "Davis";
console.log("Before Marriage:", jessica2);
console.log("Ater Marriage:", jessicaCopy);

//Oject.assign is created only shallow Copy not a deep copy
