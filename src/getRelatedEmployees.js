const data = require('../data/zoo_data');

const { employees: e } = data;

function isManager(id) {
  const ver = e.find((man) => man.managers.includes(id));
  if (typeof ver !== 'undefined') {
    return true;
  }
  return false;
}

function getRelatedEmployees(id) {
  if (!isManager(id)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');

  const names = e.filter((emp) => emp.managers.includes(id));
  return names.map((emp) => `${emp.firstName} ${emp.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
