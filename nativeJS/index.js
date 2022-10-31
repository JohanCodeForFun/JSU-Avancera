fetch("https://avancera.app/cities/")
  .then((result) => result.json())
  .then((data) => {
    let fetchData = [];

    data.forEach(item => fetchData.push(item));

    localStorage.setItem("cities", JSON.stringify(fetchData));
  });

let cities = JSON.parse(localStorage.getItem("cities"));
console.log(cities);
