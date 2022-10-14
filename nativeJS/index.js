let promise = fetch('https://avancera.app/cities/');

promise
  .then(response => {
    console.log(response)

    let someOtherPromise = response.json();

    return someOtherPromise
  })
  .then(result => {
    console.log(result)
  });