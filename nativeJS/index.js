// Modul: Events och addEventListener

const value = document.querySelector('#value');
const increaseBtn = document.querySelector('#increase');

let valueSum = 1;
value.textContent = valueSum;

increaseBtn.addEventListener('click', () => {
  valueSum++;
  value.textContent = valueSum;
});