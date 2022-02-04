let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoVetor = [];
let result;
for(let i =0; i< numbers.length;i+=1){
  if(i!==numbers.length-1){
    result = numbers[i] * numbers[i+1];
    novoVetor.push(result);
  }else {
    result = numbers[i] * 2;
    novoVetor.push(result);
  }
  
}
console.log(novoVetor);
