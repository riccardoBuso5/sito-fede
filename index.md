---
layout: default
title: Magliette di Calcio
subtitle: Scopri la mia collezione di magliette storiche delle squadre più importanti
---

<!-- SEZIONE BRAND -->
<section class="brand-section">
  <div class="brand-container">
    <h2>Chi Siamo</h2>
    <p class="brand-description">Benvenuti nella nostra collezione esclusiva di magliette di calcio storiche. Siamo appassionati di calcio e storia sportiva, dedicati a preservare i capi più iconici delle nostre squadre preferite.</p>
    <p class="brand-tagline">"Ogni maglietta racconta una storia. Ogni colore un'emozione."</p>
    <div class="brand-highlights">
      <div class="highlight">
        <h3>Qualità Garantita</h3>
        <p>Autenticità e precisione nella riproduzione dei modelli storici</p>
      </div>
      <div class="highlight">
        <h3>Passione Calcistica</h3>
        <p>Realizzate con amore per i veri appassionati di sport</p>
      </div>
      <div class="highlight">
        <h3>Collezione Esclusiva</h3>
        <p>Modelli rari e introvabili da tutto il calcio italiano</p>
      </div>
    </div>
  </div>
</section>

<!-- SEZIONE SERVIZI -->
<section id="servizi" class="services-section">
  <div class="services-container">
    <h2>I Nostri Servizi</h2>
    <p class="services-intro">Scopri cosa offriamo ai nostri clienti appassionati di magliette calcio</p>
    
    <div class="services-stacked">
      <div class="service-card-large">
        <img src="/sito-fede/assets/shirts/fiorentina-maglia.jpg" alt="Spedizione" class="service-card-image">
        <div class="service-content">
          <h3>Dall'ingrosso a casa tua</h3>
          <p>Offriamo prezzi competitivi direttamente da fornitori selezionati. Consegna rapida e affidabile direttamente a casa tua, con packaging sicuro e professionale.</p>
        </div>
      </div>
      <div class="service-card-large">
        <img src="/sito-fede/assets/shirts/fiorentina-maglia.jpg" alt="Personalizzazione" class="service-card-image">
        <div class="service-content">
          <h3>Personalizza la tua maglia</h3>
          <p>Crea la tua maglietta personalizzata con nome, numero e stemmi. Stampe di alta qualità e resistenti nel tempo, perfette per collezionisti e appassionati.</p>
        </div>
      </div>
      <div class="service-card-large">
        <img src="/sito-fede/assets/shirts/fiorentina-maglia.jpg" alt="Più Sport" class="service-card-image">
        <div class="service-content">
          <h3>Non solo calcio</h3>
          <p>Abbiamo anche magliette di altre leghe e sport. Pallavolo, basket, rugby e molto altro. Una collezione variegata per ogni sport amato.</p>
        </div>
      </div>
    </div>

    <div class="services-images">
      <div class="service-image-box">
        <img src="/sito-fede/assets/shirts/fiorentina-maglia.jpg" alt="Maglietta in primo piano">
        <p>Qualità fotografica superiore</p>
      </div>
      <div class="service-image-box">
        <img src="/sito-fede/assets/shirts/fiorentina-maglia.jpg" alt="Dettagli maglietta">
        <p>Attenzione ai dettagli</p>
      </div>
      <div class="service-image-box">
        <img src="/sito-fede/assets/shirts/fiorentina-maglia.jpg" alt="Custodia protettiva">
        <p>Conservazione accurata</p>
      </div>
    </div>
  </div>
</section>

<!-- SEZIONE COLLEZIONE MAGLIETTE -->
<section id="collezione" class="section shirts-section">
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


<!-- SEZIONE CTA ACQUISTA -->
<section class="cta-section">
  <div class="cta-content">
    <div class="cta-text">
      <h2>Porta la Tua passione sempre con te</h2>
      <p>Che sia da tifoso piuttosto che da protagonista.</p>
    </div>
    <img src="/sito-fede/assets/shirts/fiorentina-maglia.jpg" alt="Acquista ora" class="cta-image">
  </div>
</section>

<!-- SEZIONE CONTATTI FORM -->
<section id="contatti" class="contact-section">
  <div class="contact-container">
    <h2>Contattaci</h2>
    <p class="contact-intro">Hai domande sulla nostra collezione? Desideri una maglietta specifica? Scrivici!</p>
    
    <form class="contact-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" required placeholder="Il tuo nome">
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="tua.email@esempio.com">
      </div>

      <div class="form-group">
        <label for="subject">Oggetto</label>
        <input type="text" id="subject" name="subject" required placeholder="Oggetto del messaggio">
      </div>

      <div class="form-group">
        <label for="message">Messaggio</label>
        <textarea id="message" name="message" rows="6" required placeholder="Scrivi il tuo messaggio..."></textarea>
      </div>

      <div class="form-group">
        <label for="maglietta">Maglietta di interesse</label>
        <select id="maglietta" name="maglietta">
          <option value="">Seleziona una maglietta</option>
          {% for shirt in site.data.shirts.shirts %}
          <option value="{{ shirt.name }}">{{ shirt.name }} - {{ shirt.team }} ({{ shirt.season }})</option>
          {% endfor %}
          <option value="altro">Altra / Non specificata</option>
        </select>
      </div>

      <button type="submit" class="btn-submit">Invia Messaggio</button>
    </form>

    <div class="contact-info">
      <p>📧 Rispondiamo entro 24 ore</p>
      <p>🌍 Spediamo in tutta Italia</p>
      <p>⭐ Garantia di soddisfazione</p>
    </div>
  </div>
</section>

