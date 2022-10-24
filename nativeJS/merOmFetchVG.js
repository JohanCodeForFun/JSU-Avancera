// richards lösning,
const id = prompt(),
  name_ = prompt(),
  population = prompt(),
  body = {}

if (name_ !== null) {
  body.name = name_
}

if (population !== null) {
  body.population = Number(population)
}

fetch(`https://avancera.app/cities/${id}`, {
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PATCH'
})


// min anpassning på Richards lösning
const cityId = prompt("City ID: "),
  nameUpdate = prompt("Input name Update"),
  populationUpdate = prompt("Update population"),
  body = {}

if (nameUpdate !== null) {
  body.name = nameUpdate
}

if (populationUpdate !== null) {
  body.population = Number(populationUpdate)
}

fetch(`https://avancera.app/cities/${cityId}`, {
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PATCH'
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log(error));

// min egen
let getCityId = prompt("Skriv in city id");
let updateName;
let updatePopulation;

console.log(getCityId);

if (getCityId !== null) {
  updateName = prompt(`Ange nytt namn till _____`); // ${id.stad}
  console.log(updateName);

  if (updateName === null) {
    // CORRECT
    updatePopulation = Number(prompt("Ange ny befolkningsmängd"));
    console.log(updatePopulation);

    fetch("https://avancera.app/cities/" + getCityId, {
      body: JSON.stringify({
        population: updatePopulation,
      }),
      headers: {
        "Content-type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (updateName !== null) {
    if (updatePopulation === null) {
      // work on this
      console.log("om namn är i fyltt, och pop = 0");
      fetch("https://avancera.app/cities/" + getCityId, {
        body: JSON.stringify({
          name: updateName,
        }),
        headers: {
          "Content-type": "application/json",
        },
        method: "PATCH",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // CORRECT
      updatePopulation = prompt("Ange ny befolkningsmängd");
      console.log(updatePopulation);

      fetch("https://avancera.app/cities/" + getCityId, {
        body: JSON.stringify({
          name: updateName,
          population: Number(updatePopulation),
        }),
        headers: {
          "Content-type": "application/json",
        },
        method: "PATCH",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}

fetch("https://avancera.app/cities/")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    console.log(result.id);
  });


// let getCityId = prompt("Skriv in city id");
// let updateName;
// let updatePopulation;

// console.log(getCityId);

// if (getCityId !== null) {
//   updateName = prompt(`Ange nytt namn till _____`); // ${id.stad}
//   console.log(updateName);

//   if (updateName === null) {
//     updatePopulation = Number(prompt("Ange ny befolkningsmängd"));
//     console.log(updatePopulation);

//     fetch("https://avancera.app/cities/" + getCityId, {
//       body: JSON.stringify({
//         id: getCityId,
//         // name: updateName,
//         population: Number(updatePopulation),
//       }),
//       headers: {
//         "Content-type": "application/json",
//       },
//       method: "PUT",
//     })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log(result)
//     });

//   }

//   if (updateName !== null) {
//     updatePopulation = prompt("Ange ny befolkningsmängd");
//     console.log(updatePopulation);

//     fetch("https://avancera.app/cities/" + getCityId, {
//       body: JSON.stringify({
//         id: getCityId,
//         name: updateName,
//         population: Number(updatePopulation),
//       }),
//       headers: {
//         "Content-type": "application/json",
//       },
//       method: "PUT",
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result)
//       })
//       .catch(error => {
//         console.log(error)
//       });
//   }
// }

// fetch("https://avancera.app/cities/")
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//     console.log(result.id);
//   });
