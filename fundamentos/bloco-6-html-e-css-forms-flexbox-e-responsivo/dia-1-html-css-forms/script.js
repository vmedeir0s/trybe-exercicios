document.getElementById('myInputId').DatePickerX.init();

let botao = document.querySelector('button[type="submit"]');

let form = document.querySelector('form');

botao.addEventListener('click', function (event) {
  let check2 = document.querySelector('#check2');
  let vetor = document.querySelectorAll('#name, #email, #text-area');
  let cont = 0;
  for (let i = 0; i < vetor.length; i += 1){
    if(vetor[i].value != ''){
      cont += 1;
    }
  }
  if(cont<=0){
    event.preventDefault();
  }else{
    if(!check2.checked){
      window.alert("Obrigado por participar");
    }else {
      window.alert('Dados enviados com Sucesso!');
    }
  }
})