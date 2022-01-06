const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const sel = species.find((specie) => specie.name === animal);
  return sel.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
