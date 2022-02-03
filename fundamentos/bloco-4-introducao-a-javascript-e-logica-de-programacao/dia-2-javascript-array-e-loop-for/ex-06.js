let numbers = [2, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contImpar = 0;
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] %2 !=0){
    contImpar += 1;
  }
}
if(contImpar==0){
  console.log("Nenhum valor ímpar encontrado");
}