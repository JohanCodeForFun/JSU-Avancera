let getCityId = prompt("Ange ID för den stad du vill uppdatera");
let changeName = prompt("Ändra namn för staden");

fetch('https://avancera.app/cities/' + getCityId, {
  body: JSON.stringify({
    "name": changeName,
  }),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PATCH',
})
  .then(result => {
    console.log(result)
  });