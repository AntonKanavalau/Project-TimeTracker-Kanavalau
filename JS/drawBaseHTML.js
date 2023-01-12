'use strict';

window.addEventListener('load', draw);

function draw() {
  //create header element
  const header = document.createElement('header');
  header.id = 'header';

  //create main (body) element
  const main = document.createElement('main');
  drawMainElem(main);

  document.body.append(header, main);
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

  const container = document.createElement('div');
  container.className = 'projectContainer';

  projectContainer.append(container);

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
  projectHeaderButton.addEventListener('click', checkModal);//кидаем слушателя на клик по кнопке


  //кнопка для открытия модального окна задач
/*  const createTaskButton = document.createElement('button');
  createTaskButton.id = 'btn-task';
  createTaskButton.innerText = '+ create new task';
  createTaskButton.type = 'button';
  createTaskButton.addEventListener('click', checkModal);*/


  projectHeader.append(projectHeaderTitle, projectHeaderButton);

  //блок с проектами
  const projectBlock = document.createElement('div');
  projectBlock.id = 'projectBlock';
  container.append(projectHeader, projectBlock);

  main.append(timerContainer, projectContainer);
}






