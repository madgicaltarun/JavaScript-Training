"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

//

const renderCountry = function (data, className = "") {
  const html = `
     <article class="country ${className}" >
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common || data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("portugal");

*/

// const request = fetch("https://restcountries.com/v2/name/portugal");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getJSON = function (url, errorMsg = "Some thing went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok) throw new Error("Country not found");
//       returnresponse.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//         .then((response) => response.json())
//         .then((data) => renderCountry(data[0], "neighbour"))
//         .catch((err) => renderError(`Something went wrong ${err.message}`));
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("usa");
// });

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.com/v2/name/${country}`,
//     "country not found"
//   ).then((data) => {
//     renderCountry(data[0]);
//     const neighbour = data[0].borders?.[0];

//     if (!neighbour) throw new Error("No neighbour found");

//     return getJSON(
//       `https://restcountries.com/v3.1/alpha/${neighbour}`,
//       "Country not found"
//     )
//       .then((data) => renderCountry(data[0], "neighbour"))
//       .catch((err) => renderError(`Something went wrong ${err.message}`));
//   });
// };

// btn.addEventListener("click", function () {
//   getCountryData("usa");
// });

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lotter draw is happening");
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve("You win ");
//     } else {
//       reject("you lost your money");
//     }
//   }, 2000);
// });
// lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// const wait = function (seconds) {
//   return new Promise(function (reslove, reject) {
//     setTimeout(reslove, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("4 second passed");
//   });

// Promise.resolve("abc").then((x) => console.log(x));
// Promise.reject("abc").then((x) => console.log(x));

// const getPosition = function () {
//   return new Promise(function (reslove, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => resolve(position),
//     //   (err) => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(reslove, reject);
//   });
// };

// getPosition()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const getPosition = function () {
  return new Promise(function (reslove, reject) {
    navigator.geolocation.getCurrentPosition(reslove, reject);
  });
};

const whereAmI = async function (country) {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = -pos.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}`);
    if (!resGeo.ok) throw new Error("problem getting location");
    const dataGeo = await resGeo.json();
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.log(err);
    renderCountry(`Something went wrong `);
  }
};
whereAmI("portugal");
console.log("First");

try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  alert(err.message);
}
