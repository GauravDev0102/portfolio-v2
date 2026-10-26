/* ===== Matrix rain (subtle) ===== */
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let cols, drops;
const font = 15;
const glyphs = '01アイウエオカキクケコサシスセソ<>{}/\\$#@include const npm run';

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  cols = Math.floor(canvas.width / font);
  drops = Array.from({ length: cols }, () => Math.random() * -100);
}
resize();
addEventListener('resize', resize);

function draw() {
  ctx.fillStyle = 'rgba(5, 5, 8, 0.09)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = font + 'px JetBrains Mono, monospace';
  for (let i = 0; i < cols; i++) {
    const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
    ctx.fillStyle = Math.random() > 0.975 ? '#aaffd0' : '#00ff88';
    ctx.fillText(ch, i * font, drops[i] * font);
    if (drops[i] * font > canvas.height && Math.random() > 0.978) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 66);

/* ===== Hero name typewriter ===== */
const nameEl = document.getElementById('hero-name');
const nameText = 'Gaurav Singh';
let ni = 0;
(function typeName() {
  if (ni <= nameText.length) {
    nameEl.textContent = '> ' + nameText.slice(0, ni);
    ni++;
    setTimeout(typeName, 90);
  }
})();

/* ===== Role cycler ===== */
const roles = ['full-stack web developer', 'three.js tinkerer', 'ship-it engineer', 'problem solver', 'open for work'];
const roleEl = document.getElementById('role-cycle');
let ri = 0, ci = 0, deleting = false;
(function cycle() {
  const word = roles[ri % roles.length];
  roleEl.textContent = word.slice(0, ci);
  if (!deleting) {
    if (ci < word.length) { ci++; setTimeout(cycle, 55); }
    else { deleting = true; setTimeout(cycle, 1600); }
  } else {
    if (ci > 0) { ci--; setTimeout(cycle, 26); }
    else { deleting = false; ri++; setTimeout(cycle, 500); }
  }
})();

/* ===== Mobile nav ===== */
const burger = document.getElementById('burger');
const links = document.getElementById('nav-links');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

/* ===== Reveal on scroll ===== */
const obs = new IntersectionObserver(
  es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.card, .reveal').forEach(el => obs.observe(el));
