// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const fullString = names.reduce((accumulator, currentValue) => { 
   return accumulator.concat(currentValue);
  });
  const arrayString = fullString.split('');
  const toUpper = arrayString.reduce((accumulator, currentValue)=> currentValue == 'A' ? accumulator + 1 : accumulator ,0);
  const toLower = arrayString.reduce((accumulator, currentValue)=> currentValue == 'a' ? accumulator + 1 : accumulator ,0);
  console.log(`A quantidade de 'A' é ${toUpper}, e a quantidade de 'a' é ${toLower}`);
}

//reduce((accumulator, currentValue )=> currentValue.charAt == 'A' ? accumulator + 1: accumulator, 0)

containsA();