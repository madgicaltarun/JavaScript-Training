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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
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

const calDisplaySummary = function (acc) {
  const { movements, interestRate } = acc;
  const income = movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumIn.textContent = `${income}`;

  const outgoing = movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(outgoing)}`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}`;
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

// Event Handlers

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;
    //Clear fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calDisplaySummary(acc);
};

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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


// accumalator ->SHOWBALL
const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance);

// Max Value
const max = movements.reduce(
  (acc, curr) => (acc > curr ? acc : curr),
  movements[0]
);

console.log(max);


// chaining Methods
const eurToUsd = 1.1;

const totalDepositSUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, curr) => acc + curr, 0);
  
  


const firstWithdrawal = movements.find((mov) => mov < 0);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);


// EQUALITY
console.log(movements.includes(-130));
// Some :- Condition
const anyDeposits = movements.some((mov) => mov > 0);

// Every :- Condition

console.log(movements.every((mov) => mov > 0));

// Seprate Callback

const deposit = (mov = mov > 0);



// FLat and FlatMap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat());

const arrDeeper = [[[1, 2], 3], [4, [5, 6]], 7, 8];

console.log(arrDeeper.flat(2));

// Flat
const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);

// FlatMap

const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);


// Sort also mute the array
const owners = ["Jonus", "Zach", "Adam", "Martha"];

console.log(owners.sort());
// return <0 , A,B (Keep order)
// return >0 B,A   (switch Order)

// Ascending Order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);

console.log(movements);

// Descending Order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);


const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4, 6);

// Array.from,

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent)
  );
  console.log(movementsUI);
});

*/

const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(bankDepositSum);

// const numdeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 1000).length;

const numdeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, curr) => (curr > 1000 ? ++count : count), 0);

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, curr) => {
      curr > 0 ? (sum.deposits += curr) : (sum.withdrawls += curr);
      return sum;
    },

    { deposits: 0, withdrawls: 0 }
  );
console.log(sums);

// this is a nice title=> This Is a Nice Title

const convertTitle = function (title) {
  const expectations = ["a", "an", "the"];

  const title = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      expectations.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return title;
};
