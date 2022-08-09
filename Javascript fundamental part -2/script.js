"use strict";
/*
let hasDriversLicense = false;

const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

function logger() {
  console.log("My name is Tarun Rai");
}

// calling / running / invoking

logger();
logger();
logger();

function foodProcessors(apples, oranges) {
  // parameters
  const juice = `Juice With ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = foodProcessors(5, 0); //arguments

console.log(appleJuice);

const appleOrangeJuice = foodProcessors(2, 4);

console.log(appleOrangeJuice);


function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAge1(2001);

console.log("Function declaration", age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991); // function expression return a value
console.log("Function Expression", age2);

//Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;
  return `${firstName} retires in ${retirment} years`;
};

console.log(yearsUntilRetirement(1991, "Tarun"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessors(apples, oranges) {
  const applepieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  // parameters
  const juice = `Juice With  ${applepieces} pieces of apples and ${orangePieces} of oranges`;
  return juice;
}

console.log(fruitProcessors(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const retirment = 65 - calcAge(birthYear);
  if (retirment > 0) {
    return `${firstName} retires in ${retirment} years`;
  } else {
    return "Already retired";
  }
};
console.log(yearsUntilRetirement(1991, "Tarun"));

//challenge 1

const calcAvg = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAvg(44, 23, 71);
const scoreKolas = calcAvg(65, 54, 49);

const checWinner = (scoreA, scoreB) => {
  if (scoreA >= scoreB * 2) {
    console.log("Dolphis win the match");
  } else if (scoreB > scoreA * 2) {
    console.log("Kolas win the match");
  } else {
    console.log("No one wins the tropy");
  }
};

checWinner(scoreDolphins, scoreKolas);

const frined1 = "Tarun";
const frined2 = "Rai";

const friends = ["tarun", "abhinav", "shivam"];
console.log(friends);

const years = new Array(1991, 1984, 1999);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

const tarun = ["tarun", "rai", 2037 - 1991, "teacher", friends];
console.log(tarun);
// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

const friends = ["tarun", "abhinav", "shivam"];

//Add Elements
friends.push("Rajat");

friends.unshift("John");

//Remove elements

friends.pop(); //last
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("tarun"));

console.log(friends.includes("tarun"));

if (friends.includes("tarun")) {
  console.log("You have a friend tarun");
}

// Challenge 2
const calcTip = function (bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1].bills[2] + tips[2]];

console.log(tarun.firstName);
console.log(tarun["lastName"]);

const nameKey = "Name";

console.log(tarun["first" + nameKey]);

const intersetIn = prompt(
  "what do you want to know? Choose between firstName,lastName,age, job, friends"
);

if (tarun[intersetIn]) {
  console.log(tarun[intersetIn]);
} else {
  console.log("Wrong Option");
}

tarun.location = "Saharanpur";
tarun["msg"] = "My name is Tarun Rai";

//

console.log(
  `${tarun.firstName} has ${tarun.friends.length} friends, and his best friend is called ${tarun.friends[0]}`
  );

  
  const tarun = {
    // key is also know as property
    firstName: "Tarun",
    lastName: "Rai",
    birthYear: 1991,
    job: "Programmer",
    friends: ["Tarun", "Abhinav", "Shivam"],
    hasDriversLicense: true,
    //   calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    //   },
    //   calcAge: function () {
    //     return 2037 - this.birthYear;
    //   },
    calcAge: function (birthYear) {
      this.age = 2037 - this.birthYear;
      return this.age;
    },
  
    getSummary: function () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${
        this.job
      }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's licence `;
    },
  };
  
  // console.log(tarun.calcAge());
  // console.log(tarun.age);
  // console.log(tarun.age);
  // console.log(tarun.age);
  
  //challenge
  
  console.log(tarun.getSummary());

  
  //challenge 3
  
  const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    },
  };
  const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    },
  };
  
  mark.calcBMI();
  john.calcBMI();
  console.log(mark.bmi);
  
  if (mark.bmi > john.bmi) {
    console.log(
      `${mark.fullName}'s BMI (${mark.bmi}) is higher than (${john.bmi})`
    );
  } else {
    console.log(
      `${john.fullName}'s BMI (${john.bmi}) is higher than (${mark.bmi})`
    );
  }


  for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting wieghts repetition ${rep}`);
  }
  const types = [];
  
  const tarunArray = [
    "Tarun",
    "Rai",
    2037 - 1997,
    "programmer",
    ["Tarun", "Abhinav", "shivam"],
  ];
  
  for (let i = 0; i < tarunArray.length; i++) {
    console.log(tarunArray[i], typeof tarunArray[i]);
  
    types[i] = typeof tarunArray[i];
    types.push(typeof tarunArray[i]);
  }
  
  const years = [1991, 2007, 1969, 2020];
  
  const ages = [];
  
  for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
  }
  
  // continue and break
  
  console.log("-----------------------------------------------------------");
  
  for (let i = 0; i < tarunArray.length; i++) {
    if (typeof tarunArray[i] !== "string") continue;
    console.log(tarunArray[i], typeof tarunArray[i]);
  }
  
  for (let i = 0; i < tarunArray.length; i++) {
    if (typeof tarunArray[i] === "number") break;
    console.log(tarunArray[i], typeof tarunArray[i]);
  }
  const tarunArray = [
    "Tarun",
    "Rai",
    2037 - 1997,
    "programmer",
    ["Tarun", "Abhinav", "shivam"],
  ];
  
  for (let i = tarunArray.length - 1; i >= 0; i--) {
    console.log(tarunArray[i]);
  }
  
  for (let exercise = 1; exercise < 4; i++) {
    console.log(`------------starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
      console.log(`Lifting weight repetation ${rep}`);
    }
  }
  // for (let rep = 1; rep <= 10; rep++) {
  //   console.log(`Lifting weight repetation ${rep}`);
  // }
  let rep = 1;
  while (rep <= 10) {
    console.log(`Lifting weight repetation ${rep}`);
    rep++;
  }
  
  let dice = Math.trunc(Math.random() * 6) + 1;
  
  while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
  }

  
  const calcTips = function (bill) {
    return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
  };
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  
  const tips = [];
  
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTips(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  const calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum / arr.length;
  };
  
  console.log(calcAvg([2, 3, 4]));
*/
