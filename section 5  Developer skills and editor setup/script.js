// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* 

// const x = 23;

// if (x === 23) console.log(23);

// const calcAge = (birthyear) => 2037 - birthyear;

const tempreature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const tempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];

    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  return max - min;
};

const amplitude = tempAmplitude(tempreature);
console.log(amplitude);

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degree celsius')),
  };
  const kelvin = measurment.value + 273;
  return kelvin;
};

const kelvin = measureKelvin();
console.log(kelvin);
*/

const data1 = [17, 21, 23];

const printforcast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} in ${i + 1} days...`;
  }
  console.log('...' + str);
};

printforcast(data1);
