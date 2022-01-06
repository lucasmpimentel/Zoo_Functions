const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  if (ids === undefined) {
    return [];
  }
  return species.filter((item) => ids.includes(item.id));
}

module.exports = getSpeciesByIds;
