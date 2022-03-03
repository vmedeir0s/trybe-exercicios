
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// EX 01
function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const positionUl = document.querySelector('#days');
  function posicao(position){
    let value = document.querySelector(position);
    return value;
  }
  function createElement(element){
    let value = document.createElement(element);
    return value;
  }
  for(let i = 0; i < dezDaysList.length; i += 1) {
    posicao('#days').appendChild(createElement('li')).innerText = dezDaysList[i];
  }
}
createDaysOfMonth();

function editClassList() {
  let vetorLi = document.querySelector('#days').children;
  for(let i = 0; i < vetorLi.length; i += 1){
    vetorLi[i].className = 'day'
    if(vetorLi[i].innerText == 24 || vetorLi[i].innerText == 25 || vetorLi[i].innerText == 31){
      vetorLi[i].className += ' holiday'
    }
    if(vetorLi[i].innerText == 4 || vetorLi[i].innerText == 11 || vetorLi[i].innerText == 18 || vetorLi[i].innerText == 25){
      vetorLi[i].className += ' friday'
    }
  }
}
editClassList();
// EX 02
function addButton(string,id){
  let botao = document.createElement('button');
  botao.setAttribute('id',id);
  botao.innerText = string;
  let position = document.querySelector('.buttons-container');
  position.appendChild(botao);
}
addButton('Feriados','btn-holiday');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .


function removeAttribute(parameter){
  let positionLi = document.querySelectorAll(parameter);
  let retorno = false;
  for(let i = 0; i < positionLi.length; i += 1) {                 
    if(positionLi[i].hasAttribute('style')){                     
      positionLi[i].removeAttribute('style'); 
      retorno = true;
    }
  }  
  return retorno;
}

function changeHoliday(){
  let positionButton = document.querySelector('#btn-holiday');//Posição do botão que receberá o addEventListener
  let positionLi = document.querySelectorAll('.holiday');           // vetor de Posições das Li com a classe .holiday
  positionButton.addEventListener('click',function(){               //evento 'click' e a função que ocorrerá quando rodar o código.
    if(removeAttribute('.holiday') == true){
      removeAttribute('.holiday');
    }
    else {
      for(let i = 0; i < positionLi.length; i +=1){                    // Aqui outra função isolada
        positionLi[i].style.backgroundColor = '#d3d3d3';
        positionLi[i].style.border = '1px solid rgb(238,238,238)'
      }
    }
  });
}
changeHoliday();

// Ex 04 Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira"
addButton('Sexta-feira','btn-friday');

function changeFriday(){
  let positionButton = document.querySelector('#btn-friday');
  let positionDeFridays = document.querySelectorAll('.friday');
  positionButton.addEventListener('click',function(){
    if(removeAttribute('.friday') == true){
      removeAttribute('.friday');
    }
    else {
      for (let i = 0; i < positionDeFridays.length; i += 1){
        positionDeFridays[i].innerText = 'SEXTOU';
      }
    }
  })
}
changeFriday();

// Ex 05 Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário
function zoomMousePointer(){
  let positionLi = document.querySelectorAll('.day');
  for(let i = 0; i < positionLi.length; i += 1){
    positionLi[i].addEventListener('mouseover',function(event){
      event.target.style.transform = 'scale(1.5)';});
    positionLi[i].addEventListener('mouseout',function(event){
      event.target.style.transform = 'scale(1)';})
  }
}
zoomMousePointer()