'use strict';

window.addEventListener('load', draw);

function draw() {
  //create header element
  let header = document.createElement('header');
  header.id = 'header';
  drawHeaderElem(header);

  //create main (body) element
  let main = document.createElement('main');
  drawMainElem(main);

  document.body.append(header, main);
}

function drawHeaderElem(header) {

}

function drawMainElem(main) {
  //Контейнер, где будет таймер с кругляшом и активные задачи
  let timerContainer = document.createElement('div');
  timerContainer.id = 'timerContainer';

  let timerBlock = document.createElement('div');//блок кругляша с таймером
  timerBlock.id = 'timerBlock';
  let taskBlock = document.createElement('div');//блок активных задач
  taskBlock.id = 'taskBlock';
  timerContainer.append(timerBlock, taskBlock);

  //Контейнер, где будет создавать проекты, задачи и прочую нечисть =)
  let projectContainer = document.createElement('div');
  projectContainer.id = 'projectContainer';

  let projectHeader = document.createElement('header');//блок с название и кнопкой добавления проектов
  projectHeader.id = 'projectHeader';
  let projectBlock = document.createElement('div');//блок с проектами
  projectBlock.id = 'projectBlock';
  projectContainer.append(projectHeader, projectBlock);

  main.append(timerContainer, projectContainer);
}




