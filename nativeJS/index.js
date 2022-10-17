let createCity = prompt("lägg till en stad");
let setPopulation = Number(prompt("Läggg till befolkningsmängd"));

fetch('https://avancera.app/cities/', {
  body: `{ "name": "${createCity}", "population": ${setPopulation} }`,
  headers: {
    'Content-type': 'application/json'
  },
  method: 'POST'
})
  .then(response => response.json())
  .then(result => {
    console.log(result)
  });