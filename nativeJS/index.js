fetch("https://avancera.app/cities/")
  .then((result) => result.json())
  .then((data) => {
    let fetchData = [];

    for (let i = 0; i < data.length; i++) {
      fetchData.push(data[i]);
    }

    localStorage.setItem("cities", JSON.stringify(fetchData));
  });

let cities = JSON.parse(localStorage.getItem("cities"));
console.log(cities);
