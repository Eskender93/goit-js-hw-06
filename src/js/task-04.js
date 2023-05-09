const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

const counterValue = document.querySelector("#value");
let value = 0;
refs.decrementBtn.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});

refs.incrementBtn.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});
