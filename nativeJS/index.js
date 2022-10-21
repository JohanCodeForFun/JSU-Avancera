// Modul: "Global" Events och addEventListener

addEventListener("keydown", () => {
  if (event.keyCode === 38) {
    valueSum++;
    value.textContent = valueSum;
    if (valueSum > 1) {
      decreaseBtn.disabled = false;
    }
  }
  if (event.keyCode === 40) {
    if (valueSum === 1) {
      decreaseBtn.disabled = true;
      return false;
    } else {
      valueSum--;
      value.textContent = valueSum;
      if (valueSum === 1) {
        decreaseBtn.disabled = true;
      }
    }
  }
});

const value = document.querySelector("#value");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");

let valueSum = 1;
value.textContent = valueSum;

if (valueSum === 1) {
  decreaseBtn.disabled = true;
}

increaseBtn.addEventListener("click", () => {
  valueSum++;
  value.textContent = valueSum;
  if (valueSum > 1) {
    decreaseBtn.disabled = false;
  }
});
decreaseBtn.addEventListener("click", () => {
  valueSum--;
  value.textContent = valueSum;
  if (valueSum === 1) {
    decreaseBtn.disabled = true;
  }
});
