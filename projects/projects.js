document.querySelectorAll('.project-row').forEach(row => {
  const button = row.querySelector('.project-toggle');
  const description = row.querySelector('.project-description');
  if (!button || !description) return;
  let pinned = false;
  let hovering = false;
  let focused = false;
  function update() {
    const expanded = pinned || hovering || focused;
    row.classList.toggle('is-expanded', expanded);
    button.setAttribute('aria-expanded', String(expanded));
    description.setAttribute('aria-hidden', String(!expanded));
  }
  row.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovering = true; update(); } });
  row.addEventListener('pointerleave', () => { hovering = false; update(); });
  button.addEventListener('focus', () => { focused = button.matches(':focus-visible'); update(); });
  button.addEventListener('blur', () => { focused = false; update(); });
  if (button.tagName === 'BUTTON') button.addEventListener('click', () => { pinned = !pinned; update(); });
  button.addEventListener('keydown', event => { if (event.key === 'Escape') { pinned = false; focused = false; hovering = false; update(); } });
  update();
});


document.querySelectorAll(".spectrum-accent img").forEach(image => {
  const reveal = () => image.parentElement.classList.add("is-loaded");
  if (image.complete && image.naturalWidth) reveal();
  else image.addEventListener("load", reveal, { once: true });
});
