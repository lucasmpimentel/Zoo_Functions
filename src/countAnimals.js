const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animals = species.reduce((acc, curr) => {
      // console.log(curr.residents.length);
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return animals;
  }
  const quantAnimal = species.find((quant) => quant.name === animal.specie).residents;
  //Fonte Object.keys https://stackoverflow.com/questions/5223/length-of-a-javascript-object
  if (Object.keys(animal).length === 1) {
    return quantAnimal.length;
  }
  const sexAnimal = quantAnimal.filter((elem) => elem.sex === animal.sex);
  return sexAnimal.length;
}

module.exports = countAnimals;
