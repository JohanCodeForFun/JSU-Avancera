let searchCityName = prompt("Skriv in stad du vill söka efter");
let minPopulation = prompt("Skriv in befolkningsmängd för att hitta närmsta stad"
);

// Promise.all([
//   fetch(`https://avancera.app/cities/?name=${searchCityName}`),
//   fetch(`https://avancera.app/cities/?minPopulation=${minPopulation}`)
// ])
//   .then(responses => {
//     Promise.all(
//       responses.map(response => response.json()));
//   })
//   .then(data => console.log(data))
//   .catch(error => {
//     console.log(error);
//   });



// last task
// let searchCityName = prompt();
// console.log(searchCityName);
// let promise = fetch(`https://avancera.app/cities/?name=${searchCityName}`)
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   });



// example code
Promise.all([
  fetch(`https://avancera.app/cities/?name=${searchCityName}`),
  fetch(`https://avancera.app/cities/?minPopulation=${minPopulation}`),
])
  .then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(
      responses.map(function (response) {
        return response.json();
      })
    );
  })
  .then(function (result) {
    // Log the result to the console
    // You would do something with both sets of result here
    console.log(result);
  })
  // .catch(function (error) {
  //   // if there's an error, log it
  //   console.log(error);
  // });


// // example code
// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/posts"),
//   fetch("https://jsonplaceholder.typicode.com/users"),
// ])
//   .then(function (responses) {
//     // Get a JSON object from each of the responses
//     return Promise.all(
//       responses.map(function (response) {
//         return response.json();
//       })
//     );
//   })
//   .then(function (data) {
//     // Log the data to the console
//     // You would do something with both sets of data here
//     console.log(data);
//   })
//   .catch(function (error) {
//     // if there's an error, log it
//     console.log(error);
//   });

// .then(response => response.json())
// .then(result => {
//   console.log(result)
// })

// .then(response => response.json())
// .then(result => {
//   console.log(result)
// });
