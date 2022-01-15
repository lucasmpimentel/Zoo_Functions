const data = require('../data/zoo_data');

const { employees, species } = data;

const emp = employees.map((employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  const getSpec = species.filter((animal) => responsibleFor.includes(animal.id));
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpec.map((animal) => animal.name),
    locations: getSpec.map((animal) => animal.location),
  };
});
let getEmployee;

function validation(input) {
  return employees.reduce((_, employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    const getSpec = species.filter((animal) => responsibleFor.includes(animal.id));
    if (input === id || input === firstName || input === lastName) {
      getEmployee = {
        id,
        fullName: `${firstName} ${lastName}`,
        species: getSpec.map((animal) => animal.name),
        locations: getSpec.map((animal) => animal.location),
      };
    }
    return getEmployee;
  }, {});
}

function getEmployeesCoverage(search) {
  if (!search) return emp;
  const input = Object.values(search)[0];
  const result = validation(input);
  if (result === undefined) {
    throw new Error('Informações inválidas');
  } else {
    return result;
  }
}

module.exports = getEmployeesCoverage;

// getEmployeesCoverage({ name: 'Sharoanda' });
