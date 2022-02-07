let maior =0;
let cont =0;
let vetorPrimos = [];
for(let i =0; i<=50; i+=1){
  cont = 0;
  for(let j = 0; j<=i; j+=1){
    if(i%j===0){
      cont +=1;
    }
 }
 if(cont == 2){
   if(maior < i){
     maior = i;
   }
 }
}
console.log(maior);