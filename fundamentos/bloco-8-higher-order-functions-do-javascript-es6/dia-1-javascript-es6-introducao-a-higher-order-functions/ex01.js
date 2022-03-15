const newPerson = (name) => {
  const objeto = {
    nomeCompleto: name,
    email: `${name.toLowerCase().replace(' ', '_')}@trybe.com`,
  }
  return objeto;
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drummond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(newPerson));