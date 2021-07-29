'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector(`.header`);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const cookieMsg = document.createElement(`div`);
cookieMsg.innerHTML = `We use cookies to enhance performance <button class = " btn btn--close-cookie">Got it!</button>`
header.append(cookieMsg);
const closeBtn = document.querySelector(`.btn--close-cookie`);
closeBtn.addEventListener('click', function(){
  cookieMsg.remove();
})

// console.log(getComputedStyle(cookieMsg).width)



