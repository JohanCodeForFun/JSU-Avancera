let inputID = prompt();
console.log(inputID);

let promise = fetch(`https://avancera.app/cities/${inputID}`)
  .then(response => response.json())
  .then(result => {
    console.log(result)
  });
