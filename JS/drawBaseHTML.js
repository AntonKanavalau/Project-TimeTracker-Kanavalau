'use strict';

window.addEventListener('load', draw);

function draw() {
  //create header element
  const header = document.createElement('header');
  header.id = 'header';
  //drawHeaderElem(header);

  //create main (body) element
  const main = document.createElement('main');
  drawMainElem(main);

  document.body.append(header, main);
}

function drawHeaderElem(header) {
}

function drawMainElem(main) {
  //Контейнер, где будет таймер с кругляшом и активные задачи
  const timerContainer = document.createElement('div');
  timerContainer.id = 'timerContainer';

  //блок кругляша с таймером
  const timerBlock = document.createElement('div');
  timerBlock.id = 'timerBlock';

  //блок активных задач
  const taskBlock = document.createElement('div');
  taskBlock.id = 'taskBlock';
  timerContainer.append(timerBlock, taskBlock);

  //Контейнер, где будет создавать проекты, задачи и прочую нечисть =)
  const projectContainer = document.createElement('div');
  projectContainer.id = 'projectContainer';

  //блок с названием и кнопкой добавления проектов
  const projectHeader = document.createElement('header');
  projectHeader.id = 'projectHeader';

  //назыание блока
  const projectHeaderTitle = document.createElement('h3');
  projectHeaderTitle.innerText = 'project dashboard';

  //кнопка для открытия модального окна
  const projectHeaderButton = document.createElement('button');
  projectHeaderButton.id = 'btn-createProject';
  projectHeaderButton.innerText = '+ create new project';
  projectHeaderButton.type = 'button';
  projectHeaderButton.addEventListener('click', drawModal);//кидаем слушателя на клик по кнопке

  projectHeader.append(projectHeaderTitle, projectHeaderButton);

  //блок с проектами
  const projectBlock = document.createElement('div');
  projectBlock.id = 'projectBlock';
  projectContainer.append(projectHeader, projectBlock);

  main.append(timerContainer, projectContainer);
}




