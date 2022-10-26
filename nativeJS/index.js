let inputField = document.querySelector('#name');
let submitBtn = document.querySelector('#send');
let greetingPara = document.querySelector('#greeting');
let divErrors = document.querySelector('#errors');

let submitFunction = () => {
   greetingPara.textContent = `Hej ${inputField.value}!`
}

let confirmInput = () => {
  if (inputField.value === '') {
    divErrors.style.display = "inline";
    submitBtn.disabled = true;
  } else {
    divErrors.style.display = "none";
    submitBtn.disabled = false;
  }
}

divErrors.style.display = "inline";
submitBtn.disabled = true;

submitBtn.addEventListener('click', submitFunction)
addEventListener('input', confirmInput)