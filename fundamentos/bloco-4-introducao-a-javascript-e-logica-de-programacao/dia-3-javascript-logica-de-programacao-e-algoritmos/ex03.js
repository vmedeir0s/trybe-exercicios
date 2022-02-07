//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorString = '';
let menorString;
for(let i=0;i<array.length;i+=1){
  for(let j =0; j<array.length;j+=1){
    if(array[i].length>maiorString.length){
      maiorString = array[i];
    }
  }
}
console.log('A maior string é: ',maiorString);
for(let i=0;i<array.length;i+=1){
  for(let j =0; j<array.length;j+=1){
    if(array[i].length<maiorString.length){
      menorString = array[i];
    }
  }
}
console.log('A menor string é: ',menorString);