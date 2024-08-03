'use strict';
const listContainer = document.querySelector('.slide-num-container');
const allBtns = document.querySelectorAll('.technology-slide-btn');
const slides = document.querySelectorAll('.slide');

listContainer.addEventListener('click', e => {
  if (e.target.classList.contains('technology-slide-btn')) {
    const btnSlide = e.target;
    slides.forEach(slide => {
      if (slide.dataset.num === btnSlide.dataset.num) slide.classList.remove('toggle-slides');
      else slide.classList.add('toggle-slides');
    });
    allBtns.forEach(btn => btn.classList.remove('active-slide'));
    btnSlide.classList.add('active-slide');
  }
});
