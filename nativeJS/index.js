// Modul: Events och addEventListener

const value = document.querySelector('#value');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');

let valueSum = 1;
value.textContent = valueSum;

increaseBtn.addEventListener('click', () => {
  valueSum++;
  value.textContent = valueSum;
});
decreaseBtn.addEventListener('click', () => {
  valueSum--;
  value.textContent = valueSum;
});