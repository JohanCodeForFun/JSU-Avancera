let inputField = document.querySelector('#name');
let submitBtn = document.querySelector('#send');
let greetingPara = document.querySelector('#greeting');
let divErrors = document.querySelector('#errors');
let checkBox = document.querySelector('input[type="checkbox"]');
let inputError = document.querySelector('#name-error');
let checkBoxError = document.querySelector('#consent-error');

let submitFunction = () => {
   greetingPara.textContent = `Hej ${inputField.value}!`
}

let confirmInput = () => {
  if (inputField.value === '') {
    inputError.style.display = "list-item";
    submitBtn.disabled = true;
  } else {
    inputError.style.display = "none";
    submitBtn.disabled = false;
  }

  if (checkBox.checked === false) {
    checkBoxError.style.display = "list-item";
    submitBtn.disabled = true;
  } else {
    checkBoxError.style.display = "none"
  }
  if (checkBox.checked && inputField.value !== '') {
    divErrors.style.display = "none";
  } else {
    divErrors.style.display = "inline";
  }
}

divErrors.style.display = "inline";
submitBtn.disabled = true;

submitBtn.addEventListener('click', submitFunction)
addEventListener('input', confirmInput)
