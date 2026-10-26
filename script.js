// Mobile nav toggle
const burger = document.getElementById('burger');
const links = document.getElementById('nav-links');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Scroll-reveal for cards & sections
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.card, .about-skills, .contact')
  .forEach(el => observer.observe(el));
