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
*/

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

const alertH1 = function (e) {
  alert("addEventListener! Great you are listening heading");
  h1.removeEventListener("mouseenter", alertH1);
};
const h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", alertH1);

h1.onmouseenter = function (e) {
  alert("addEventListener! Great you are listening heading");
};
