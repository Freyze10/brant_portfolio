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

  // 7. Image viewer: double-click (desktop) or double-tap (phone) a screenshot to enlarge it
  const hintAnchor = document.querySelector('#projects .section-header p');
  if (hintAnchor) {
    const hint = document.createElement('p');
    hint.className = 'hint';
    hint.innerHTML = '<i class="fa-regular fa-hand-pointer"></i> Double-click (or double-tap) any screenshot to enlarge it.';
    hintAnchor.after(hint);
  }

  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(box);
  const boxImg = box.querySelector('img');

  const openViewer = slide => {
    const m = getComputedStyle(slide).backgroundImage.match(/url\(["']?(.*?)["']?\)/);
    if (!m) return;
    const card = slide.closest('.project-card');
    boxImg.src = m[1];
    boxImg.alt = card ? card.querySelector('h3').textContent : '';
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeViewer = () => {
    box.classList.remove('open', 'zoomed');
    document.body.style.overflow = '';
  };

  document.addEventListener('dblclick', e => {
    const slide = e.target.closest('.pc-swiper .swiper-slide');
    if (slide) openViewer(slide);
  });

  let lastTap = 0;
  document.addEventListener('touchend', e => {
    const slide = e.target.closest('.pc-swiper .swiper-slide');
    if (!slide) return;
    const now = Date.now();
    if (now - lastTap < 300) { e.preventDefault(); openViewer(slide); }
    lastTap = now;
  }, { passive: false });

  boxImg.addEventListener('click', e => { e.stopPropagation(); box.classList.toggle('zoomed'); });
  box.addEventListener('click', closeViewer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeViewer(); });

});