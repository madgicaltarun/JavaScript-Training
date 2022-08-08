/*
let js = "amazing";
console.log("Tarun Rai"); //Tarun is value

let firstName = "tarun";

let tarun_rai = "TR";

let $function = 27;

//variable name conventions

let person = "Tarun";

let PI = 3.1415; // make a constant varible in upper case for good practice

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Tarun");

javascriptIsFun = "YEs!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

let age = 30;
age = 31;

const birthYear = 1997;
birthYear = 1222;


// Math Operators
const now = 2037;
const ageTarun = now - 1991;
const ageRai = now - 2020;
console.log(ageTarun, ageRai);
console.log(ageTarun * 2, ageRai / 10, 2 ** 3);

//2 ** 3 means 2 to the power of 3= 2*2*2

const firstName = "Tarun";

const lastName = "rai";

console.log(firstName + " " + lastName);

//Assignment operator

let x = 10 + 5;
x += 10; // x=x+10
x *= 10;
x++;
x--;

// Comparison Operator

console.log(ageTarun > ageRai);

console.log(ageRai >= 18);

const isFullAge = ageRai >= 18;



const now = 2037;
const ageTarun = now - 1991;
const ageRai = now - 2020;

const averageAge = (ageTarun + ageRai) / 2;



// challenge 1st

const markWeight = 78;
const markHeight = 1.69;

const johnW = 92;
const johnH = 1.95;

const markBMI = markWeight / (markHeight * markHeight);

const johnBMI = johnW / (johnH * johnH);

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);


const firstName = "Tarun";

const job = "programmer";

const birthYear = 1997;

const tarun =
  "I'm " + firstName + ", a " + (2037 - birthYear) + " year old " + job + "!";

console.log(tarun);

const tarunnew = `I'm ${firstName} , a ${2037 - birthYear} year old ${job} !`;

console.log(`My Name
is 
Tarun rai`);    
const age = 15;

if (age > 18) {
  console.log("Tarun can start driving license");
} else {
  const yearLeft = 18 - age;
  console.log(`Tarun is too young. Wait another ${yearLeft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
//challenge 2

const markWeight = 78;
const markHeight = 1.69;

const johnW = 92;
const johnH = 1.95;

const markBMI = markWeight / (markHeight * markHeight);

const johnBMI = johnW / (johnH * johnH);

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than the John's BMI ${johnBMI}`);
} else {
    console.log(`John's BMI${johnBMI} is higher than the Mark's BMI ${markBMI}`);
}


//Type conversion

const input = "1991";
console.log(Number(input));
console.log(Number(input) + 18);

console.log(Number("tarun"));

console.log(typeof NaN);

console.log(String(23));


//type coercion

console.log("I am " + 23 + " year old"); // + operator changes the number automatically becasue of coercion

console.log("23" - "10" - 3); // - operator chnages the string into a number

console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


// 5 falsy values : 0, '', undefined , null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(NaN));

const money = 0;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should find a job");
}

let height;

if (height) {
  console.log("yay ! height is defined");
} else {
  console.log("Height is not defined" );
}

const age = "18";
if (age === 18) console.log("You just became an adult (Strict) ");

if (age === 18) console.log("You just became an adult (Loose) ");

const favourite = Number(prompt("What's is your favourite number?"));

console.log(typeof favourite, favourite);

if (favourite === 23) console.log("cool ! 23 is amazing number");
else if (favourite === 7) console.log(" 7 is also aa cool number");
else console.log(" number is not 23 or 7");


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Tarun is able to drive");
// } else {
//   console.log("Someone else shoud drive");
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Tarun can drive");
} else {
  console.log("someone else should drive");
}




//challenge 3

// const scoreDolphins = (96 + 109 + 89) / 3;
// const scoreKolas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKolas) console.log("dolphins win the tropy");
// else if (scoreDolphins === scoreKolas) console.log("Both win the tropy");
// else console.log("kolas win the tropy");

//Bonus 1

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKolas = (109 + 95 + 123) / 3;

if (scoreDolphins > scoreKolas && scoreDolphins >= 100)
  console.log("dolphins win the tropy");
else if (
  scoreDolphins === scoreKolas &&
  scoreKolas >= 100 &&
  scoreDolphins >= 100
)
  console.log("Both win the tropy");
else if (scoreKolas > scoreDolphins && scoreKolas >= 100)
  console.log("kolas win the tropy");
else {
  console.log("No one win the tropy");
}

const day = "wednesday";

switch (day) {
  case "monday": // strict comparison
    console.log("plan course stucture");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepair theory videos");
    break;
  case "wednesday":
  case "thrusday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "satuday":
  case "sunday":
    console.log("Its holiday");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("plan course stucture");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepair theory videos");
} else if (day === "wednesday" || day === "thrusday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Its holiday");
} else {
  console.log("Not a valid day");
}

const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age > 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age > 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(`I like to drink ${age > 18 ? "wine" : "water"}`);


// challenge 4

let tip;
const bill = 275;

tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the final value is   ${
    tip + bill
  }`
);

*/
