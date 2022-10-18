let list = document.querySelectorAll('li');

for (const item of list) {
  item.innerHTML += '<span class="credits">100 credits</span>'
  console.log(item);
}