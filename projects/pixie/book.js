const book = document.getElementById('book');
const journey = document.getElementById('journey');
const position = document.getElementById('position');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const count = 12;
const leaves = [];
for (let i = 0; i < count; i++) {
  const leaf = document.createElement('div');
  leaf.className = 'leaf';
  for (let side = 0; side < 2; side++) {
    const number = i * 2 + side + 1;
    const face = document.createElement('div');
    face.className = `face ${side ? 'back' : 'front'}`;
    const image = new Image();
    image.src = `pages/page-${String(number).padStart(2, '0')}.jpg`;
    image.alt = `Pixie USA SS2026 lookbook, page ${number} of 24`;
    image.draggable = false;
    face.append(image);
    leaf.append(face);
  }
  book.append(leaf);
  leaves.push(leaf);
}
let progress = 0;
const clamp = value => Math.max(0, Math.min(1, value));
function render() {
  progress = clamp(-journey.getBoundingClientRect().top / (journey.offsetHeight - innerHeight)) * count;
  const value = reducedMotion.matches ? Math.round(progress) : progress;
  leaves.forEach((leaf, i) => {
    const turn = clamp(value - i);
    leaf.style.setProperty('--page-shadow', (i === Math.floor(value) || i === Math.floor(value) - 1) ? '0 12px 25px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.08)' : 'none');
    leaf.style.transform = `rotateY(${-180 * turn}deg)`;
    leaf.style.zIndex = String(turn > .5 ? i + 1 : count - i);
    leaf.setAttribute('aria-hidden', String(!(i === Math.floor(value) || i === Math.floor(value) - 1)));
  });
  const opening = clamp(value);
  const closing = clamp(value - count + 1);
  book.style.transform = `translateX(${-25 + 25 * opening + 25 * closing}%)`;
  const spread = Math.round(value);
  position.textContent = spread === 0 ? 'COVER' : spread === count ? 'BACK COVER' : `${spread * 2}–${spread * 2 + 1} / 24`;
  previous.disabled = progress < .01;
  next.disabled = progress > count - .01;
}
let queued = false;
addEventListener('scroll', () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { render(); queued = false; });
}, { passive: true });
addEventListener('resize', render);
function go(direction) {
  const target = Math.max(0, Math.min(count, Math.round(progress) + direction));
  scrollTo({ top: journey.offsetTop + target / count * (journey.offsetHeight - innerHeight), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
}
previous.addEventListener('click', () => go(-1));
next.addEventListener('click', () => go(1));
addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault(); go(event.key === 'ArrowRight' ? 1 : -1);
  }
});
render();

