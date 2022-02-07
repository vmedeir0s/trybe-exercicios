//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'trybe';
let invertWord= '';
for(let i = word.length-1;i>=0;i-=1){
  invertWord+=word[i];
  //Concatena um caracter a cada iteração
}
console.log(invertWord);