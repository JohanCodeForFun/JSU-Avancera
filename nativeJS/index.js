let inputField = document.querySelector('#name');
let submitBtn = document.querySelector('#send');
let greetingPara = document.querySelector('#greeting');

let submitFunction = () => {
   greetingPara.textContent = `Hej ${inputField.value}!`
}

submitBtn.addEventListener('click', submitFunction)