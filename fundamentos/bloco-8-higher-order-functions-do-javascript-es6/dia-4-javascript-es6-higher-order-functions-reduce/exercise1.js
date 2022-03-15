//1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const newArray = arrays.reduce((accumulator, elemento) => {
    return accumulator.concat(elemento);
  }, []);
  console.log(newArray);
}

flatten();