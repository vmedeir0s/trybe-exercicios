/* 
Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
*/

let frase = 'Tryber x aqui!';
let skills = ['HTML', 'CSS', 'JS', 'Git','GitHub'];

const changeString = (name) => {
 let newFrase = frase.replace('x', name);
 return newFrase;
}

const bothStrings = () => {
  let frases = `${changeString('Vinicius')} Minhas cinco principais habilidades são: 
  ${skills.sort()} `
  console.log(frases);
}

bothStrings();