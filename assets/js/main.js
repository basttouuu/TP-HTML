
    const reveals = document.querySelectorAll('.reveal');
    const onScroll = () => {
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add('show');
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    document.querySelector('.btop').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const carousel = document.querySelector('.feature-carousel');
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');

    btnLeft.addEventListener('click', () => {
      carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
    });

    const btn = document.querySelector('.btop');

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'

    });
}); 