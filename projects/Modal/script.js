"use strict";
// storing selectors in variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(`.close-modal`);
// querySelectorAll selects all elements with the same class & not only the first & gives an array of all the elements
const btnOpenModal = document.querySelectorAll(`.show-modal`);
function show() {
  // hidden not .hidden
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  //or modal.style.display = 'block';
  // there is also .classlist.contains('class')
}
function hide() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", show);
}
btnCloseModal.addEventListener("click", hide);
overlay.addEventListener("click", hide);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") hide();
});
// you can pass functions in event handler hide only without () not as in hide()
