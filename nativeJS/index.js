let fetchData = [];

fetch('https://avancera.app/cities/')
  .then(result => result.json())
  .then(data => {
    fetchData = [...data]

    localStorage.setItem('dataFromFetch', `${fetchData}`)
  });