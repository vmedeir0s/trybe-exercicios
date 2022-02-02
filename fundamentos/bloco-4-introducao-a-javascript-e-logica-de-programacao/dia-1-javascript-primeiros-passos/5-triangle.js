const angulo1 = 30;
const angulo2 = 50;
const angulo3 = 100;
if(angulo1 <0 || angulo2 <0 || angulo3 <0){
  console.log("Erro em algum angulo, favor verificar.");
}else if(angulo1 + angulo2 + angulo3 == 180){
  console.log(true);
}else{
  console.log(false);
}