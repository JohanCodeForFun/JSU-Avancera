let getCityId = prompt("Ange ID för den stad du vill uppdatera")
let createCity = prompt("lägg till en stad");
let setPopulation = Number(prompt("Läggg till befolkningsmängd"));

fetch(`https://avancera.app/cities/${getCityId}`, {
  body: `{ 
    "id": "${getCityId}",
    "name": "${createCity}", 
    "population": ${setPopulation} 
  }`,
  headers: {
    'Content-type': 'application/json'
  },
  method: 'PUT'
})
  .then(result => {
    console.log(result)
  });