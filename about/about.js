const photo = document.querySelector('#about-photo');
const caption = document.querySelector('#photo-caption');
const position = document.querySelector('#photo-position');
let current = 0;
const photos = [
  { src: '../assets/about-bridge.png', alt: 'Vallabh at the Golden Gate Bridge at sunset', caption: '“You seeing this?”' },
  { src: '../assets/about-bucg.jpg', alt: 'Vallabh wearing a Buffalo Undergraduate Consulting Group quarter-zip', caption: 'Prez @ <a href="https://www.linkedin.com/company/ub-bucg" target="_blank" rel="noopener noreferrer">Buffalo Undergraduate Consulting Group</a>' }
];
function showPhoto(step) {
  current = (current + step + photos.length) % photos.length;
  photo.src = photos[current].src;
  photo.alt = photos[current].alt;
  caption.innerHTML = photos[current].caption;
  position.textContent = `0${current + 1} / 02`;
}
document.querySelector('#photo-prev').addEventListener('click', () => showPhoto(-1));
document.querySelector('#photo-next').addEventListener('click', () => showPhoto(1));
const note = document.querySelector('.footnote');
document.querySelector('.note-button').addEventListener('click', () => note.classList.toggle('is-open'));
document.addEventListener('keydown', event => { if(event.key === 'Escape') { note.classList.remove('is-open'); document.activeElement.blur(); } });
document.addEventListener('click', event => { if (!note.contains(event.target)) note.classList.remove('is-open'); });
