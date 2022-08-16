"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name.at(0))
      .join("");
  });
};
createUsernames(accounts);

const calDisplaySummary = function (movements) {
  const income = movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumIn.textContent = `${income}`;

  const outgoing = movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(outgoing)}`;
};

calDisplaySummary(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
XMLDocument;

/////////////////////////////////////////////////
/*
let arr = ["a", "b", "c", "d", "e", "f"];

// slice in array return a new array it doesn't mute older arrays

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// shallow copy we can even use the spread operator to make a shallow copy of an array
console.log(arr.slice());

// Splice :- splice method mute the orignal array it does not return the new array

console.log(arr.splice(2));
console.log(arr.splice(-1));

// In splice method the second argument is refered as number of element should be deleted form the arrays

console.log(arr.splice(1, 2));

// reverse :- This method mute the original method

arr = ["a", "b", "c", "d", "e", "f"];

const arr2 = ["j", "i", "h", "g", "j"];
console.log(arr2.reverse());

// concat

const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr], [...arr2]);

// Join Method

console.log(letters.join("-"));



//At method

const arr = [23, 11, 64];
console.log(arr.at(0));

// getting the last method

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);


// For Each Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movment of movements) {
  if (movment > 0) console.log(`You deposited ${movment}`);
  else {
    console.log(`You withdraw ${Math.abs(movment)}`);
  }
}

console.log("---------------------FOREACHLOOP-----------------------");
// ForEach loop's callback function has three parameters current value, index, and orginal Array
movements.forEach(function (movement, index) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
});




// ForEach method on the maps and set In this the callback function accept the aguments value,key, map

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

// For each for set

const currenciesUnique = new Set(["USD", "GBP", "EUR", "EUR"]);

currenciesUnique.forEach(function (value, value, map) {
  console.log(`${key}:${value}`);
});


// Map Method

const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => mov * eurToUsd);

movements.map((mov, i, arr) => {
  if (mov) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You Withdrwal ${Math.abs(mov)}`;
  }
});


const deposits = movements.filter(function (mov) {
  return mov > 0;
});

*/
// accumalator ->SHOWBALL
const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance);

// Max Value
const max = movements.reduce(
  (acc, curr) => (acc > curr ? acc : curr),
  movements[0]
);

console.log(max);
