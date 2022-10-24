const id = prompt(),
  name = prompt(),
  population = prompt(),
  body = {}

if (name !== null) {
  body.name = name
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