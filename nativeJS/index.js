let inputValue = "";
let sendBtn = document.querySelector("#send");
sendBtn.disabled = true;
let errorDiv = document.querySelector('#errors');
errorDiv.style.display = "inline";

document.querySelector("#name").addEventListener("input", () => {
  inputValue = document.querySelector("#name").value;

  if (inputValue === "") {
    sendBtn.disabled = true;
    errorDiv.style.display = "inline";
  } else {
    sendBtn.disabled = false;
    errorDiv.style.display = "none";
  }
});

let greeting = document.querySelector("#greeting");
let submitBtn = document.querySelector("#send");
submitBtn.addEventListener("click", () => {
  greeting.textContent = "Hej " + document.querySelector("#name").value + "!";
});
