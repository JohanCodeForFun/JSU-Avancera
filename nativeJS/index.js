let greeting = document.querySelector('#greeting');
let submitBtn = document.querySelector('#send');
submitBtn.addEventListener('click', () => {
  greeting.textContent = "Hej " + document.querySelector('#name').value + "!"
});