//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let num = 10;
let result =num;
for(let i = num-1; i>0; i-=1){
  result *= i;
}
console.log(result);