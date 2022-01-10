const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const curEmp = employees.find((employee) => employee.id === id);
  const curSpecieId = curEmp.responsibleFor[0];
  const { residents } = species.find((specie) => specie.id === curSpecieId);
  const old = residents.reduce((acc, resident) => (resident.age > acc.age ? resident : acc));
  return Object.values(old);
}

module.exports = getOldestFromFirstSpecies;
