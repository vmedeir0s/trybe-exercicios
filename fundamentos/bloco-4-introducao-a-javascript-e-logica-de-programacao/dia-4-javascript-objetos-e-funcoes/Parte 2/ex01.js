//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindrome(anyString){
  let arrayString = anyString.split('');
  let inverseArray = arrayString.slice();
  inverseArray.reverse();
  if(arrayString.join('') === inverseArray.join('')){
    return true;
  }
  return false;
}
console.log(verificaPalindrome('arara'));

/*  GABARITO
  let inverse = anystring.split('').reverse().join('');
  if(anyString == inverse){
    return true;
  }else {
    return false;
  }
*/
