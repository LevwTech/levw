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

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener('click', function(e) {
  section1.scrollIntoView({behavior:'smooth'})
});


const h1 = document.querySelector('h1');
function head() {
  alert("heading") }
h1.addEventListener('mouseenter', head) ;
h1.removeEventListener('mouseenter', head);

const navNode = document.querySelectorAll(`.nav__link`);
const features = document.querySelector(`#section--1`);
const operations = document.querySelector(`#section--2`);
const testimonials = document.querySelector(`#section--3`);

navNode[0].addEventListener('click', function(e) {
  e.preventDefault();
features.scrollIntoView({behavior:`smooth`})
});

navNode[1].addEventListener('click', function(e) {
  e.preventDefault();
  operations.scrollIntoView({behavior:`smooth`})
});

navNode[2].addEventListener('click', function(e) {
  e.preventDefault();
  testimonials.scrollIntoView({behavior:`smooth`})
});

// Beginning of Tabbed Component
 const btns = document.querySelectorAll('.operations__tab')


 function removeAllbtnsAndOps() {
  btns[0].classList.remove('operations__tab--active')
  btns[1].classList.remove('operations__tab--active')
  btns[2].classList.remove('operations__tab--active')
  document.querySelector(`.operations__content--1`).classList.remove('operations__content--active')
  document.querySelector(`.operations__content--2`).classList.remove('operations__content--active')
  document.querySelector(`.operations__content--3`).classList.remove('operations__content--active')
 }

 btns[0].addEventListener('click', function (){
  removeAllbtnsAndOps();
btns[0].classList.add('operations__tab--active');
document.querySelector(`.operations__content--1`).classList.add('operations__content--active');

 });
 btns[1].addEventListener('click', function (){
  removeAllbtnsAndOps();
  btns[1].classList.add('operations__tab--active');
  document.querySelector(`.operations__content--2`).classList.add('operations__content--active');
  
  
});
btns[2].addEventListener('click', function (){
  removeAllbtnsAndOps();
    btns[2].classList.add('operations__tab--active')
    document.querySelector(`.operations__content--3`).classList.add('operations__content--active')
  });
     // End of Tabbed Component
// --------------------------------------------------------------------------------------------------------


     //    >>>>>>>>>  using event delegation to create hovering effect at nav <<<<<<<
     
    //selecting nav which is the container
    const nav = document.querySelector('.nav');
    
    // mouseover is similiar to mouseenter but mouseenter does not bubble
    nav.addEventListener('mouseover', function (e) {
      if(e.target.classList.contains('nav__link'))  {
        const link = e.target
        const siblings = link.closest('.nav').querySelectorAll('.nav__link')
        const logo = link.closest('.nav').querySelector('img')

        siblings.forEach(el => {
          if(el!==link) el.style.opacity = 0.5
        });
        logo.style.opacity = 0.5
      }


    });
    nav.addEventListener('mouseout', function (e) {  // mouseout is opposite of mouseover to undo the effect
      if(e.target.classList.contains('nav__link'))  {
        const link = e.target
        const siblings = link.closest('.nav').querySelectorAll('.nav__link')
        const logo = link.closest('.nav').querySelector('img')

        siblings.forEach(el => {
          if(el!==link) el.style.opacity = 1
        });
        logo.style.opacity = 1
      }

    });


     // sticky navigation
     window.addEventListener('scroll' ,function() {
        if(window.scrollY > section1.getBoundingClientRect().top) {
          nav.classList.add('sticky')
        }
        else {
          nav.classList.remove('sticky')
        }
     }); // this isnt very memory efficient because its called at every scroll

  
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll' , function () { 
      for(let i = 0; i<4; i++) {
      if(window.scrollY > (sections[i].getBoundingClientRect().top))
          sections[i].classList.remove('section--hidden')
      } // literally raping the memory 
    });

    // Slider component
    const slides = document.querySelectorAll(`.slide`);
    const slider = document.querySelector(`.slider`)
    const btnLeft = document.querySelector(`.slider__btn--left`)
    const btnRight = document.querySelector(`.slider__btn--right`)

    let curSlide = 0;
    const maxSlides = slides.length;

    slides.forEach((s,i)=> s.style.transform = `translateX(${100*i}%)`); 
    
  btnRight.addEventListener('click' ,function () {
    if(maxSlides-1 == curSlide) {
      curSlide = 0;
    }
    else {
      curSlide++;
    }
    slides.forEach((s,i)=> s.style.transform = `translateX(${100*(i-curSlide)}%)`); 
  });
  btnLeft.addEventListener('click' ,function () {
    if(curSlide==0) {
      curSlide = maxSlides-1;
    }
    else {
      curSlide--;
    }
    slides.forEach((s,i)=> s.style.transform = `translateX(${100*(i-curSlide)}%)`); 
  });