const valorCusto = 50;
const valorVenda = 125;

if(valorCusto < 0 || valorVenda <0){
  console.log("Foi Passado algum valor inválido, Encerra aplicação");

}else{
  const impostoSobreOCusto = (valorCusto * 20)/100;
  let valorCustoTotal = valorCusto + impostoSobreOCusto;
  let lucro = valorVenda - valorCustoTotal;
  let lucroTotal = lucro * 1000;
  console.log("O Lucro para venda de mil produtos seria de:" + lucroTotal);
}