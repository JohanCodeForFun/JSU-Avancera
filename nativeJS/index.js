// Modul: Events och addEventListener

const value = document.querySelector('#value');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');

let valueSum = 1;
value.textContent = valueSum;

if (valueSum === 1) {
  decreaseBtn.disabled = true;
}

increaseBtn.addEventListener('click', () => {
  valueSum++;
  value.textContent = valueSum;
  if (valueSum > 1) {
    decreaseBtn.disabled = false;
  }
});
decreaseBtn.addEventListener('click', () => {
  valueSum--;
  value.textContent = valueSum;
  if (valueSum === 1) {
    decreaseBtn.disabled = true;
  }
});