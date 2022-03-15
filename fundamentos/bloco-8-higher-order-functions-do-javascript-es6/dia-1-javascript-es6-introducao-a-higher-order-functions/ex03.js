/*
3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
- Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
*/
const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const aluno = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const someFunction = (param1, param2, callback) => {
  let points = 0;
  for(let i = 0; i < param1.length; i += 1){
    points += callback(param1[i], param2[i]);
  }
  return points;
};

const verifica = (gabarito, aluno) => {
  if(gabarito === aluno) {
    return 1;
  } else if(aluno !== 'N.A'){
    return -0.5;
  } else {
    return 0;
  };
};

console.log(someFunction(gabarito, aluno, verifica));
