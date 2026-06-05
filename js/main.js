document.addEventListener('DOMContentLoaded', () => {

  // 1. AOS Animation Init
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  // 2. Typewriter Text Logic
  new Typed('.typewriter-text', {
    strings: ['Modern Web Apps.', 'IoT Solutions.', 'Python Scripts.', 'Java Software.'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  // 3. Theme Toggle
  const themeBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;
  themeBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
  });

  // 4. Sticky Header
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  // 5. Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // 6. Swiper: Initializing ALL project sliders
  const allSwipers = document.querySelectorAll('.pc-swiper');
  allSwipers.forEach((swiperEl) => {
    new Swiper(swiperEl, {
      loop: true,
      autoplay: { delay: 3000 + Math.random() * 1000 },
      pagination: { el: swiperEl.querySelector('.swiper-pagination'), clickable: true },
      effect: 'fade',
      fadeEffect: { crossFade: true }
    });
  });

});