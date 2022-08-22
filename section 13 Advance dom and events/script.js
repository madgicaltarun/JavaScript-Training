"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// button Scrolling

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log("Target", e.target.getBoundingClientRect());

  console.log("current Scroll", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(s1coords.left, s1coords.top + window.pageYOffset);
  // window.scrollTo({
  //   left: s1coords.left,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

//page navigation

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Add event listerner to the common parent
// determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//tabbed Component

const tabs = document.querySelectorAll(".operation__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function () {
  const clicked = e.target.closet(".operations__tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabContent.forEach((c) => c.classList.remove("operations__content--active"));

  clicked.classList.add("operations__tab--active");

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu fad Animation

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const sibilings = link.closest(".nav").querySelectorAll("nav__link");
    const logo = link.closest(".nav").querySelector("img");

    sibilings.forEach((el) => {
      console.log("hello");
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky navigation
const initialCor = section1.getBoundingClientRect();
window.addEventListener("scroll", function (e) {
  if (window.scrollY > initialCor.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Selecting Elements

/*

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("#section--1");
const allButton = document.getElementsByTagName("button");
console.log(allButton);

console.log(document.getElementsByClassName("btn"));

// Creating and inserting html
// .insertAdjacentHTML

const msg = document.createElement("div");
msg.classList.add("cookie-message");
// msg.textContent= 'we use cookied for improved functionality and analytics.
msg.innerHTML =
  'we use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(msg);
header.append(msg);

// header.append(msg.cloneNode(true));

// header.after(msg);
// header.before(msg);

// delete Elements

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // msg.remove();
    msg.parentElement.removeChild(msg);
  });

// styles
msg.style.backgroundColor = "#37383d";
msg.style.width = "120%";

console.log(getComputedStyle(msg));

msg.style.height =
  Number.parseFloat(getComputedStyle(msg).height, 10) + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes

const logo = document.querySelector(".nav__logo");
console.log(logo.alt);

//Non Standard
console.log(logo.getAttribute("disigner"));

logo.setAttribute("company", "Bankist");

// Data Attributes
console.log(logo.dataset.versionNumber);

//classes

logo.classList.add("c", "j");
logo.classList.set("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");



// don't use
logo.className = "tarun";

// const alertH1 = function (e) {
//   alert("addEventListener! Great you are listening heading");
//   h1.removeEventListener("mouseenter", alertH1);
// };
// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter", alertH1);

// h1.onmouseenter = function (e) {
//   alert("addEventListener! Great you are listening heading");
// };

//

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)} ${randomInt(0, 255)} ${randomInt(0, 255)})`;

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("Nav", e.target, e.currentTarget);
  },
  true
);

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Link", e.target, e.currentTarget);

  // Stop Propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Container", e.target, e.currentTarget);
});


const h1 = document.querySelector("h1");

// Going downwards:child

console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upward
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.backgroundColor = "orangered";

// going sidewise sibiling

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

*/

// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => console.log(entry));
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector(".header");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
});

headerObserver.observe(header);
