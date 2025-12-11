---
layout: default
title: Magliette di Calcio
subtitle: Scopri la mia collezione di magliette storiche delle squadre più importanti
---

<section id="shirts" class="section shirts-section">
  <div class="shirts-container">
    <h1 class="section-title">{{ page.title }}</h1>
    <p class="section-subtitle">{{ page.subtitle }}</p>

    <div class="shirts-grid">
      {% for shirt in site.data.shirts.shirts %}
      <div class="shirt-card">
        <!-- Carosello immagini -->
        <div class="carousel-container">
          <div class="carousel">
            {% for color in shirt.colors %}
            <div class="carousel-item" id="slide-{{ shirt.id }}-{{ forloop.index0 }}">
              <img src="{{ color.image }}" alt="{{ shirt.name }} - {{ color.name }}" loading="lazy">
              <span class="color-label">{{ color.name }}</span>
            </div>
            {% endfor %}
          </div>

          <!-- Controlli carosello -->
          <button class="carousel-btn prev" onclick="moveCarousel({{ shirt.id }}, -1)" aria-label="Immagine precedente">
            &#10094;
          </button>
          <button class="carousel-btn next" onclick="moveCarousel({{ shirt.id }}, 1)" aria-label="Immagine successiva">
            &#10095;
          </button>

          <!-- Indicatori colori -->
          <div class="carousel-indicators">
            {% for color in shirt.colors %}
            <button class="indicator {% if forloop.index == 1 %}active{% endif %}" 
                    onclick="showSlide({{ shirt.id }}, {{ forloop.index0 }})" 
                    aria-label="Colore {{ color.name }}"
                    style="background-color: {{ color.hex }}">
            </button>
            {% endfor %}
          </div>
        </div>

        <!-- Informazioni card -->
        <div class="card-content">
          <h3 class="shirt-name">{{ shirt.name }}</h3>
          <p class="shirt-team">{{ shirt.team }}</p>
          <p class="shirt-season">Stagione {{ shirt.season }}</p>
          <p class="shirt-description">{{ shirt.description }}</p>

          <!-- Colori disponibili -->
          <div class="colors-list">
            <span class="colors-label">Colori disponibili:</span>
            <div class="color-badges">
              {% for color in shirt.colors %}
              <span class="color-badge" title="{{ color.name }}" style="background-color: {{ color.hex }}"></span>
              {% endfor %}
            </div>
          </div>

          <button class="btn-view" onclick="window.open('{{ shirt.instagram }}', '_blank');">Vedi su Instagram</button> 
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<script>
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
</script>
