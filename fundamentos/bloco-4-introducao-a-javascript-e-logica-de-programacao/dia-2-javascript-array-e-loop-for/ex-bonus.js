let vetor = [9,8,7,6,5,4,3,2];
let cont =0;
for(let i=0;i<vetor.length;i++){
  console.log(vetor);
  for(let j=0; j<vetor.length-cont;j+=1){
    let aux=0;
    if(vetor[j]>vetor[j+1]){
      aux = vetor[j+1];
      vetor[j+1] = vetor[j];
      vetor[j] = aux;
    }
  }
  cont +=1;
}