const randomGame = (aposta, callback) => {
  const number = Math.floor(Math.random() * 5) + 1;
  console.log(`Número sorteado: ${number}`);
  return callback(number, aposta);
}

const comparador = (value1, value2) => {
  if(value1 === value2) {
    return "Parabéns você ganhou";
  }
  return "Tente novamente"
}

console.log(randomGame(3, comparador));