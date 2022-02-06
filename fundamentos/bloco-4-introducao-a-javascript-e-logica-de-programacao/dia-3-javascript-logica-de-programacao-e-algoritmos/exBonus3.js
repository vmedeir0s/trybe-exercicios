let n = 5;
let caracter = '';
for(let i=0; i<n; i+=1){
  let espacoVazio = '';
  for(let j=n-1; j>i; j-=1){
    espacoVazio += ' ';
  }
  caracter += '*'
  console.log(espacoVazio+caracter);
}
