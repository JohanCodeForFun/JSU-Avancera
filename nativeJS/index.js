let searchCityName = prompt();
console.log(searchCityName);

let promise = fetch(`https://avancera.app/cities/?name=${searchCityName}`)
  .then(response => response.json())
  .then(result => {
    console.log(result)
  });
