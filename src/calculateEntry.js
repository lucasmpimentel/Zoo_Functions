const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const ages = entrants.map((a) => a.age);
  let child = 0;
  let adult = 0;
  let senior = 0;
  ages.forEach((element) => {
    if (element < 18) child += 1;
    if (element >= 18 && element < 50) adult += 1;
    if (element >= 50) senior += 1;
  });
  return { adult, child, senior };
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const total = countEntrants(entrants);
  const result = () => {
    const rA = total.adult * prices.adult;
    const rC = total.child * prices.child;
    const rS = total.senior * prices.senior;
    const res = rA + rC + rS;
    return res;
  };
  return result();
}

module.exports = { calculateEntry, countEntrants };
