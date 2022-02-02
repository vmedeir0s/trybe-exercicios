let salarioBruto = 3000.00;
let inss;
let ir;
let parcela;
let salarioBase;
let salarioLiquido;
if(salarioBruto <= 1556.94){
    inss= (salarioBruto * 8)/100;
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss= (salarioBruto * 9)/100;
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss= (salarioBruto * 11)/100;
}else if(salarioBruto > 5189.82){
    inss= 570.88;
}
salarioBase = salarioBruto - inss;
console.log(salarioBase);

if(salarioBase <= 1903.98){
    ir=0;
}else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    ir= (salarioBase * 7.5)/100;
    parcela = 142.80;
}else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    ir= (salarioBase * 15)/100;
    parcela = 354,80;
}else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    ir= (salarioBase * 22.5)/100;
    parcela = 636,13;
}else if(salarioBase >= 4664.68){
    ir= (salarioBase * 27.5)/100;
    parcela = 869,36;
}
salarioLiquido = salarioBase - (ir -parcela)
console.log(salarioLiquido);