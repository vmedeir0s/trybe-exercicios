function exerciseOne(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if(typeof(a) != "number" || typeof(b) != "number" || typeof(c) != "number" ) {
      reject(new Error("Informe apenas números"));
    };
    const sum = ((a + b) * c);
    if(sum < 50) {
      reject(new Error(`${sum} Valor muito baixo`));
    };
    resolve(sum);
  })
  return promise;
}

function numAleatorio() {
  return Math.floor(Math.random() * 100 + 1);
}

exerciseOne(numAleatorio(), numAleatorio(), numAleatorio())
  .then(result => console.log(`Resultado: ${result}`))
  .catch(erro => console.log(`Erro: ${erro.message}`));