const a = 1;
const b = 3;
const c = 1;
let result;
if(a>b && a>c){
  result = a;
}else if(b>a && b>c){
  result = b;
}else {
  result = c;
}
console.log(result);