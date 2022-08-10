"use strict";

const model = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const closeModal = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModal();
  }
});
