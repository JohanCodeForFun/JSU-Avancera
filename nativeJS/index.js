// Modul: Events och addEventListener

addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelector("#button");
  btn.addEventListener("click", () => {
    console.log("click");
  });
});
