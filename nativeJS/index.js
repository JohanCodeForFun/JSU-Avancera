fetch('https://avancera.app/cities/?name=' + prompt() + "&minPopulation=" + Number(prompt()))
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })