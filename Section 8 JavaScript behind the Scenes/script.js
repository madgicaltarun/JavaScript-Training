"use strict";

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
