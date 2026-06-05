document.addEventListener('DOMContentLoaded', () => {

  // 1. AOS Animation Init
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  // 2. Typewriter Text Logic
  new Typed('.typewriter-text', {
    strings: ['Modern Web Apps.', 'IoT Solutions.', 'Python Scripts.', 'Java Softwares.'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  // 3. Theme Toggle
  const themeBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  themeBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // 4. Sticky Header
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 5. FIXED Swiper: Initializing ALL project sliders
  const allSwipers = document.querySelectorAll('.pc-swiper');
  allSwipers.forEach((swiperEl) => {
    new Swiper(swiperEl, {
      loop: true,
      autoplay: { 
        delay: 3500 + Math.random() * 1000, // Slight random delay so they don't slide all at once
        disableOnInteraction: false 
      },
      pagination: { 
        el: swiperEl.querySelector('.swiper-pagination'), 
        clickable: true 
      },
      effect: 'fade', // Optional: adds a professional fade transition
      fadeEffect: { crossFade: true }
    });
  });

});