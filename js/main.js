document.addEventListener('DOMContentLoaded', () => {

  // 1. AOS Animation Init
  AOS.init({ duration: 800, once: true, offset: 100 });

  // 2. Typewriter Text Logic
  new Typed('.typewriter-text', {
    strings: ['Django Web Apps.', 'Desktop Systems.', 'Python Automation.', 'Computer Vision.', 'IoT Solutions.'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  // 3. Theme Toggle (remembers choice)
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) html.setAttribute('data-theme', saved);
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // 4. Sticky Header
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // 5. Mobile Menu Toggle (closes on link click or outside tap)
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const closeMenu = () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  };
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  navMenu.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', e => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
  });

  // 6. Swiper: all project sliders (single-slide cards stay static)
  document.querySelectorAll('.pc-swiper').forEach(el => {
    const multi = el.querySelectorAll('.swiper-slide').length > 1;
    new Swiper(el, {
      loop: multi,
      allowTouchMove: multi,
      autoplay: multi ? { delay: 3000 + Math.random() * 1000, disableOnInteraction: false } : false,
      pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
      effect: 'fade',
      fadeEffect: { crossFade: true }
    });
  });

});