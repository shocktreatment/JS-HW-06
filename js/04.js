const plusBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");
const minusBtn = document.querySelector('[data-action="decrement"]');

let a = 0;

minusBtn.addEventListener("click", () => {
  a = a - 1;
  counterValue.textContent = a;
  console.log(a);
});

plusBtn.addEventListener("click", () => {
  a++;
  counterValue.textContent = a;
  console.log(a);
});
