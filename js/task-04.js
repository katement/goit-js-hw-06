const refs = {
  counterValue: document.getElementById("value"),
  btnOne: document.querySelector('[data-action="decrement"]'),
  btnTwo: document.querySelector('[data-action="increment"]'),
};

refs.btnOne.addEventListener("click", () => {
  counterValue = btnOneFunc(counterValue);
  refs.counterValue.textContent = counterValue;
});

refs.btnTwo.addEventListener("click", () => {
  counterValue = btnTwoFunc(counterValue);
  refs.counterValue.textContent = counterValue;
});

let counterValue = 0;

function btnOneFunc(a) {
  return a - 1;
}

function btnTwoFunc(value) {
  return value + 1;
}

// const refs = {
//   counterValue: document.getElementById("value"),
//   decrementBtn: document.querySelector('[data-action="decrement"]'),
//   incrementBtn: document.querySelector('[data-action="increment"]'),
// };

// let counterValue = 0;

// function decrementCounter(value) {
//   return value - 1;
// }

// function incrementCounter(value) {
//   return value + 1;
// }

// refs.decrementBtn.addEventListener("click", () => {
//   counterValue = decrementCounter(counterValue);
//   refs.counterValue.textContent = counterValue;
// });

// refs.incrementBtn.addEventListener("click", () => {
//   counterValue = incrementCounter(counterValue);
//   refs.counterValue.textContent = counterValue;
// });
