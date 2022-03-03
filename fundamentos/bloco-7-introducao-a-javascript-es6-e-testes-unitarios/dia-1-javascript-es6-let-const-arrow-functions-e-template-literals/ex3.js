// //Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = (valor) => {
  let resultado = valor;
  for (let i = valor-1; i > 0; i-= 1){
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(5));