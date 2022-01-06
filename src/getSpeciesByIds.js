const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return species.filter((item) => ids.includes(item.id));
}

module.exports = getSpeciesByIds;
