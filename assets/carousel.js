const carouselState = {};

function initCarousel(shirtId, totalSlides) {
  if (!carouselState[shirtId]) {
    carouselState[shirtId] = 0;
  }
}

function showSlide(shirtId, slideIndex) {
  initCarousel(shirtId, null);
  carouselState[shirtId] = slideIndex;
  updateCarousel(shirtId);
}

function moveCarousel(shirtId, direction) {
  initCarousel(shirtId, null);
  const carousel = document.querySelector(`#slide-${shirtId}-0`)?.closest('.carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-item').length;
  carouselState[shirtId] = (carouselState[shirtId] + direction + slides) % slides;
  updateCarousel(shirtId);
}

function updateCarousel(shirtId) {
  const carousel = document.querySelector(`#slide-${shirtId}-0`)?.closest('.carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.closest('.carousel-container').querySelectorAll('.indicator');

  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === carouselState[shirtId]);
  });

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === carouselState[shirtId]);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-container').forEach((container) => {
    const firstSlide = container.querySelector('.carousel-item');
    if (firstSlide) {
      firstSlide.classList.add('active');
      const indicator = container.querySelector('.indicator');
      if (indicator) indicator.classList.add('active');
    }
  });
});
