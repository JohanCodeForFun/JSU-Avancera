let getCityId = prompt("Ange ID för den stad du vill uppdatera");
// let changeName = prompt("Ändra namn för staden");
// let changePopulation = Number(prompt("Uppdatera befolkningsmängd"));

const listdfd = document.querySelectorAll('li');
const ol1 = document.querySelector('ol');
listdfd.forEach(listItem => {console.log(listItem)});
console.log("log list [2], " + listdfd[2])

listdfd[2].textContent = "Clara";

const people = ['Eddie', 'Klara', 'Johan'];

people.forEach(person => {
  ol1.innerHTML += `<li> ${person} </li>`
})


if (getCityId !== null || getCityId !== undefined || getCityId !== "") {
  console.log("inside first if");

  if (changeName === null || changeName === undefined) {
    console.log("uppdatera befolkning prompt");

    if (changePopulation === null || changePopulation === undefined) {
      console.log("byt namn prompt");
    }

    // } else if (changePopulation === null || changePopulation === undefined) {
  // } else if (){
  //   console.log("Updatera namn och befolkning");
  
  } else { {
    console.log("byt namn & stad prompt");
  }
}}


// fetch('https://avancera.app/cities/' + getCityId, {
//   body: JSON.stringify({
//     "name": changeName,
//     "population": changePopulation
//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   method: 'PATCH',
// })
//   .then(result => {
//     console.log(result)
//   });