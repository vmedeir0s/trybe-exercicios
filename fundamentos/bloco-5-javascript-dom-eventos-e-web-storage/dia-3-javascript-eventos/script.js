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
createDaysOfMonth();
editClassList();
addHolidays();
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

function editClassList() {
  let vetorLi = document.querySelector('#days').children;
  for(let i = 0; i < vetorLi.length; i += 1){
    vetorLi[i].className = 'day'
    if(i ===24 || i === 25 || i === 31){
      vetorLi[i].className += ' holiday'
    }
    if(i === 4 || i === 11 || i ===18 || i === 25){
      vetorLi[i].className += ' friday'
    }
  }
}

function addHolidays(Feriados){
  let botao = document.createElement('button');
  botao.setAttribute('id','#btn-holiday');
  botao.innerText = "Feriados";
  let position = document.querySelector('.buttons-container');
  position.appendChild(botao);
}