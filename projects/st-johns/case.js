const featuredSlides = [2, 3, 5, 8];
let slideIndex = 0;
const image = document.getElementById('pitch-slide');
const previousSlide = document.getElementById('slide-prev');
const nextSlide = document.getElementById('slide-next');
function showSlide() {
  const slide = featuredSlides[slideIndex];
  image.src = `assets/pitch-final-${slide}.png`;
  image.alt = `Investment presentation, original slide ${slide}`;
  document.getElementById('slide-full').href = image.src;
  document.getElementById('slide-position').textContent = `${slideIndex + 1} / 4 · SLIDE ${slide}`;
  previousSlide.disabled = slideIndex === 0;
  nextSlide.disabled = slideIndex === featuredSlides.length - 1;
}
previousSlide.addEventListener('click', () => { if (slideIndex > 0) { slideIndex--; showSlide(); } });
nextSlide.addEventListener('click', () => { if (slideIndex < featuredSlides.length - 1) { slideIndex++; showSlide(); } });
showSlide();
let modelPage = 1;
const modelImage = document.getElementById('model-page');
const modelPrevious = document.getElementById('model-prev');
const modelNext = document.getElementById('model-next');
function showModel() {
  modelImage.src = `assets/lbo-page-${modelPage}.png`;
  modelImage.alt = `LBO model, page ${modelPage} of 4`;
  document.getElementById('model-full').href = modelImage.src;
  document.getElementById('model-position').textContent = `0${modelPage} / 04`;
  modelPrevious.disabled = modelPage === 1;
  modelNext.disabled = modelPage === 4;
}
modelPrevious.addEventListener('click', () => { if (modelPage > 1) { modelPage--; showModel(); } });
modelNext.addEventListener('click', () => { if (modelPage < 4) { modelPage++; showModel(); } });
showModel();

