let getCityId = prompt("Skriv in city id");
let updateName;
let updatePopulation;

console.log(getCityId);

if (getCityId !== null) {
  updateName = prompt(`Ange nytt namn till _____`); // ${id.stad}
  console.log(updateName);

  if (updateName === null) {
    updatePopulation = Number(prompt("Ange ny befolkningsmängd"));
    console.log(updatePopulation);

    fetch("https://avancera.app/cities/" + getCityId, {
      body: JSON.stringify({
        id: getCityId,
        // name: updateName,
        population: Number(updatePopulation),
      }),
      headers: {
        "Content-type": "application/json",
      },
      method: "PUT",
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
    });

  }

  if (updateName !== null) {
    updatePopulation = prompt("Ange ny befolkningsmängd");
    console.log(updatePopulation);

    fetch("https://avancera.app/cities/" + getCityId, {
      body: JSON.stringify({
        id: getCityId,
        name: updateName,
        population: Number(updatePopulation),
      }),
      headers: {
        "Content-type": "application/json",
      },
      method: "PUT",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      });
  }
}

fetch("https://avancera.app/cities/")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    console.log(result.id);
  });
