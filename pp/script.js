// Reveal on scroll - combine reveal and directional reveals
const observerOptions = { threshold: 0.15 };

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all reveal classes
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up')
  .forEach(el => revealObserver.observe(el));

// Smooth scroll for in‑page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// CTA popup
const ctaButton = document.getElementById('knowMore');
ctaButton?.addEventListener('click', () => {
  alert('Thanks for your interest! Drop me a mail at pradnyaj289@gmail.com.');
});

// Nav visibility toggle on scroll
const nav = document.querySelector("nav");
const navObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    nav.classList.add("visible");
  }
});
navObserver.observe(document.body);
