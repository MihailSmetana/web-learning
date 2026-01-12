const quotes = [
  "Ти вже робиш більше, ніж вчора 💪",
  "Кожен рядок коду — це крок вперед 🚀",
  "Помилки — це частина навчання",
  "Ти реально зможеш увійти в IT",
  "Сьогодні — код, завтра — робота"
];

const button = document.getElementById("motivationBtn");
const text = document.getElementById("quote");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[randomIndex];
});
