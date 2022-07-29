const readline = require('readline-sync');

const calcImc = (peso, altura) => peso / altura ** 2;

const peso = readline.questionFloat('Qual seu peso. (Ex: 75.3) ? ');
const altura = readline.questionFloat('Qual sua Altura. (Ex: 1.75) ? ');

function main() {
  const imc = calcImc(peso, altura).toFixed(2);

  console.log(`IMC: ${imc}`);

  switch (imc) {
    case 18.5:
      console.log('Categoria: Abaixo do peso(magreza)');
      break;
    case imc >= 18.5 && imc <= 24.9:
      console.log('Peso normal');
      break;
    case imc >= 25.0 && imc <= 29.9:
      console.log('Acima do peso (sobrepeso)');
      break;
    case imc >= 30.0 && imc <= 34.9:
      console.log('Obesidade grau I');
      break;
    case imc >= 35 && imc <= 39.9:
      console.log('Obesidade grau II');
      break;
    case imc > 40:
      console.log('Obesidade graus III e IV');
      break;
    default:
      break;
  }
}

main();
