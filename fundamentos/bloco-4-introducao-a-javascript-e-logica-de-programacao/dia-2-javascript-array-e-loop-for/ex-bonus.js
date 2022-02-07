let vetor = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont =0;
//Ordena crescente BubbleSort
for(let i=0;i<vetor.length;i++){
  console.log(vetor);
  for(let m=0; m<vetor.length-cont;m+=1){
    let aux=0;
    if(vetor[m]>vetor[m+1]){
      aux = vetor[m+1];
      vetor[m+1] = vetor[m];
      vetor[m] = aux;
    }
  }
  cont +=1;
}

//Ordena decrescente a partir do inicio.
let cont2= 0;
let aux2;
console.log(vetor);
 for(let i = 0; i < vetor.length; i+=1){
   for(let j= 0;j< vetor.length; j+=1){
    if(vetor[j]< vetor[j+1]){
      aux2 = vetor[j+1];
      vetor[j+1] = vetor [j];
      vetor[j] = aux2;
    console.log(vetor);
   }
 }
  cont2 +=1;
}

// Ordena do fundo.
let cont3= 0;
let aux3;
for(let k=vetor.length-1;k>=0;k-=1){
  for(let l=vetor.length-1;l>=cont3;l-=1){
    if(vetor[l]<vetor[l-1]){
      aux3 = vetor[l];
      vetor[l] = vetor[l-1];
      vetor[l-1] = aux3; 
    }
    console.log(l);
  }
  console.log("--")
  cont3 +=1;
}
console.log(vetor);