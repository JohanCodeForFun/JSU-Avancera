let inputValue = "";
let inputName = document.querySelector("#name")
let sendBtn = document.querySelector("#send");
let checkBox = document.querySelector('input[type="checkbox"]');

let errorDiv = document.querySelector("#errors");
let errorName = document.querySelector("#name-error");
let errorConsent = document.querySelector("#consent-error");

sendBtn.disabled = true;
errorDiv.style.display = "inline";

inputName.addEventListener("input", () => {
  inputValue = document.querySelector("#name").value;

  if (inputValue === "") {
    sendBtn.disabled = true;
    errorName.style.display = "inline";
    errorConsent.style.display = "list-item";
  } else {
    sendBtn.disabled = false;
    errorName.style.display = "none";
  }
});

let checkBoxFn = (e) => {
  if (e.target.checked) {
    errorConsent.style.display = "none";
  } else {
    errorConsent.style.display = "list-item";
  }
}

let consentFN = (e) => {
  if (e.target.checked && inputValue !== "") {
    errorDiv.style.display = "none";
  }
}

checkBox.addEventListener("change", checkBoxFn, consentFN => {});

// hur kan jag lyssna på att båda är checked?
