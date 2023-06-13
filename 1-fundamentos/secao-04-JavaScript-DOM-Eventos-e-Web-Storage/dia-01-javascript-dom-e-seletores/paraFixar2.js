let titulo = document.querySelector('#header-container');

//Altere a cor de fundo do header para rgb(0, 176, 105);
titulo.style.backgroundColor = 'rgb(0, 176, 105)';
titulo.style.color = 'white';

//Altere a cor de fundo da div das tarefas que são Urgentes e Importantes para rgb(255, 159, 132);
let tarefasUrgentesImportantes = document.querySelectorAll('.emergency-tasks');
for (let i = 0; i < tarefasUrgentesImportantes.length; i +=1) {
  tarefasUrgentesImportantes[i].style.backgroundColor = 'rgb(255, 159, 132)';
}

//Altere a cor de fundo do título das das tarefas que são Urgentes e Importantes para rgb(165, 0, 243);
let tituloTarefasUrgentes = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < tituloTarefasUrgentes.length; i += 1) {
  tituloTarefasUrgentes[i].style.backgroundColor = 'rgb(165, 0, 243)'
  tituloTarefasUrgentes[i].style.color = 'white';
}

//Altere a cor de fundo da div das tarefas que não são Urgentes e Importantes para rgb(249, 219, 94);
let tarefasNaoUrgentes = document.querySelectorAll('.no-emergency-tasks');
for (let i = 0; i < tarefasNaoUrgentes.length; i += 1) {
  tarefasNaoUrgentes[i].style.backgroundColor = 'rgb(249, 219, 94)';
}

//Altere a cor de fundo do título das das tarefas que não são Urgentes e Importantes para rgb(35, 37, 37);
let tituloTarefasNaoUrgentes = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < tituloTarefasNaoUrgentes.length; i += 1) {
  tituloTarefasNaoUrgentes[i].style.backgroundColor = 'rgb(35, 37, 37)';
  tituloTarefasNaoUrgentes[i].style.color = 'white';
}

//Altere a cor de fundo do footer para rgb(0, 53, 51).
let rodape = document.querySelector('#footer-container');
rodape.style.backgroundColor = 'rgb(0, 53, 51)';
rodape.style.color = 'white';