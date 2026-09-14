const quoteButton = document.getElementById('home-quote');
const quotes = [
  '“Escape competition through authenticity.” — Naval',
  '“Those who lack the courage will always find a philosophy to justify it.” — Camus'
];
let quoteIndex = Math.floor(Math.random() * quotes.length);
quoteButton.textContent = quotes[quoteIndex];
quoteButton.addEventListener('click', () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteButton.textContent = quotes[quoteIndex];
});
