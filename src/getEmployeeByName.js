const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees: e } = data;
  if (!employeeName) return {};
  return e.find((emp) => employeeName === emp.firstName || employeeName === emp.lastName);
}

module.exports = getEmployeeByName;
