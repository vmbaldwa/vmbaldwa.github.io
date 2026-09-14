const photo = document.getElementById('center-photo');
const pictures = [
  { src: 'assets/light.jpg', alt: 'Soft blue, violet and gold light against black' },
  { src: 'assets/light-streak.jpg', alt: 'A long blue, violet and pale gold streak of light against black' }
];
let selected = 0;
const preloadedPictures = pictures.slice(1).map(picture => {
  const image = new Image();
  image.src = picture.src;
  return image;
});
function changePhoto() {
  selected = (selected + 1) % pictures.length;
  photo.src = pictures[selected].src;
  photo.alt = pictures[selected].alt;
}
photo.addEventListener('dblclick', changePhoto);
photo.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    changePhoto();
  }
});
