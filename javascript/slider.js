const dotsContainerEl = document.querySelector('.slider-dots-container');
const slides = document.querySelectorAll('.crew-quote-slide');
const slider = document.querySelector('.slider');
const dotHTML = '<button class="dot"></button>';

// create dots
let slideCounter = 0;
slides.forEach((_, i) => {
  dotsContainerEl.insertAdjacentHTML('beforeend', dotHTML);
  dotsContainerEl.childNodes[i].dataset.slide = i;
});

const translateSlides = () =>
  slides.forEach((slide, i) => {
    slide.dataset.slide = i;
    slide.classList.add('hide');
    if (+slide.dataset.slide === slideCounter) slide.classList.remove('hide');
    slide.style.transform = `translateX(${100 * (i - slideCounter)}%)`;
    dotsContainerEl.children[i].classList.remove('dot-active');
    dotsContainerEl.childNodes[slideCounter].classList.add('dot-active');
  });
translateSlides();

const slideRight = (dotNumber = false) => {
  slideCounter += 1;
  if (dotNumber || dotNumber === 0) slideCounter = dotNumber;
  if (slides.length === slideCounter) slideCounter = 0;
  translateSlides();
};
const slideLeft = () => {
  if (slideCounter === 0) slideCounter = slides.length;
  slideCounter -= 1;
  translateSlides();
};

document.addEventListener('keydown', e => e.key === 'ArrowRight' && slideRight());
document.addEventListener('keydown', e => e.key === 'ArrowLeft' && slideLeft());

dotsContainerEl.addEventListener('click', e => {
  if (e.target.classList.contains('dot')) {
    const dotNumber = +e.target.dataset.slide;
    if (dotNumber === slideCounter) return;
    slideRight(dotNumber);
  }
});

/////////////////////////////////////////////////////////////
// Slide on touch
let touchStart;
slider.addEventListener(
  'touchstart',
  e => {
    touchStart = e.changedTouches[0].clientX;
  },
  false
);
slider.addEventListener(
  'touchend',
  e => {
    const touchend = e.changedTouches[0].clientX;
    const xDifference = touchStart - touchend;
    if (xDifference >= 100) {
      slideRight();
    } else if (xDifference <= -100) {
      slideLeft();
    }
  },
  false
);
