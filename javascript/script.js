const body = document.querySelector('body');
const navigation = document.querySelector('.navigation');
const mainSection = document.querySelector('.main-section-container');
const article = document.querySelector('article');
window.addEventListener('load', a => {
  body.classList.remove('hide');
  mainSection?.classList.remove('hide');
  article?.classList.remove('hide');
  document.querySelector('.section-crew')?.classList.remove('hide');
  document.querySelector('.full-background-image')?.classList.remove('hide');
});

const toggleNavMobile = () => {
  navigation.classList.toggle('hide-nav');
  body.classList.toggle('deactivate-scroll');
  document
    .querySelectorAll('.burger-nav-line')
    .forEach(line => line.classList.toggle('toggle-nav-btn'));
};

document.querySelector('.btn-nav').addEventListener('click', toggleNavMobile);

body.addEventListener('click', e => {
  !navigation.classList.contains('hide-nav') &&
    !e.target.closest('.btn-nav')?.classList.contains('btn-nav') &&
    !e.target.closest('.navigation')?.classList.contains('navigation') &&
    toggleNavMobile();
});
