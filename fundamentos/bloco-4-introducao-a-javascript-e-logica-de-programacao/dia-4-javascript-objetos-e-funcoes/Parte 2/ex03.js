// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smallestValue(vetor){
  let smallNumber = 0;
  for(let values in vetor){
    if(vetor[smallNumber]>vetor[values]){ // se o valor de vetor na posição [smallNumber =0] for maior que o valor de vetor na posição [values]
      smallNumber = values; //recebe a posição do menor valor.
    }
  }
  return smallNumber;
}
console.log(smallestValue([2, 4, 6, 7, 10, 0, -3]));