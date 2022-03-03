//Crie uma função que receba uma frase e retorne qual a maior palavra.


const longestWord = (string) => {
  const arrayStrings = string.split(' ');
  let maior = '';
  for (let i = 0; i < arrayStrings.length; i+= 1){
    if(arrayStrings[i].length > maior.length)
      maior = arrayStrings[i];
  }
  return console.log(maior);
}


longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'