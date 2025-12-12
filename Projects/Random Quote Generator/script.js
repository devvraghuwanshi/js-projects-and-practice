const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "Do something today that your future self will thank you for.",
  "It always seems impossible until it's done.",
  "Great things never come from comfort zones.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Your only limit is your mind.",
];

function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
function showQuote() {
  document.getElementById("quo").innerText = getRandomQuote();
}
let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click" , showQuote);

