const carousel = document.querySelector('.feature-carousel');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

btnLeft.addEventListener('click', () => {
  carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
});