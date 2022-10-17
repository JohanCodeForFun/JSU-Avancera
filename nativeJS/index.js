fetch('https://avancera.app/cities/?name=' + prompt() + "&minPopulation=" + Number(prompt()))
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })


fetch('https://avancera.app/cities')
  .then(response => response.json()
  .then(console.log("Response: " + JSON.stringify(response))))
  .then(data => console.log("Data: " + JSON.stringify(data)))

  // hur kommer det sig att första console.log meddelandet är Response typ,
  // och andra är json objekt som går att läsa, när vi för response.json,
  // och inte data?



// let getCityId = prompt("Ange ID för den stad du vill uppdatera");
// let changeName = prompt("Ändra namn för staden");
// let changePopulation = Number(prompt("Uppdatera befolkningsmängd"));

// fetch('https://avancera.app/cities/' + getCityId, {
//   body: JSON.stringify({
//     "name": changeName,
//     "population": changePopulation
//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   method: 'PATCH',
// })
//   .then(result => {
//     console.log(result)
//   });