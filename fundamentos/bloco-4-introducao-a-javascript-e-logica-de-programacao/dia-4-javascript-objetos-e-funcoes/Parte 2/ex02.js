// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function biggestValue(vetor){
  let maior = 0;
  for(let values in vetor){//             
    if(vetor[maior]< vetor[values]){ //valor de vetor na posicão[maior = 0] é menor que valor de vetor na posição [values = 0];
      maior = values; // atribui a posição('indice)' a variavel maior.
    }
  }
  return maior;
}
console.log(biggestValue([2,3,6,7,10,1])); //índice 4;