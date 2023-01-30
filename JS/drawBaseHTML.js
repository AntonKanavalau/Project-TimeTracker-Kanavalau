'use strict';

//window.addEventListener('load', draw);
document.addEventListener("DOMContentLoaded", draw);

function draw() {
  //create header element
  const header = document.createElement('header');
  header.id = 'header';

  //create main (body) element
  const main = document.createElement('main');
  drawMainElem(main);

  document.body.append(header, main);

  drawProjects();
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

  projectHeader.append(projectHeaderTitle, projectHeaderButton);

  //блок с проектами
  const projectBlock = document.createElement('div');
  projectBlock.id = 'projectBlock';
  projectBlock.addEventListener('click', changeProject);
  projectBlock.addEventListener("contextmenu", openContextMenu, false);
  container.append(projectHeader, projectBlock);

  main.append(timerContainer, projectContainer);
}


function drawProjects() {
  let projectContainer = document.getElementById('projectBlock');
  let Hash = JSON.parse(localStorage.getItem("Projects"));

  for (let key in Hash) {
    console.log(Hash[key].tasks);
    let html = `
<div id="${key}" class="projectBlock_container">
 <div class="projectTime">
  <input type="color" value="${Hash[key].color}">
  <input type="text" value="${key}">
  <div class="totalScoreContainer">
    <p class="totalScoreText">Total Score: </p>
    <p class="totalProjectScore">
      <span class="days">${Hash[key].days + ':day'}</span>
      <span class="hours">${Hash[key].hours + ':'}</span>
      <span class="minutes">${Hash[key].minutes + ':'}</span>
      <span class="seconds">${Hash[key].seconds}</span>
    </p>
  </div>
  <button type="button">
    <i class="material-icons delete" title="Remove Project">delete</i>
  </button>
  </div>
  <div class="taskList">
  ${drawTasks(Hash[key].tasks)}
    <div class="taskCreate">create new task</div>
</div>
</div>
`;

    projectContainer.insertAdjacentHTML('beforeend', html);
  }
}

function drawTasks(Hash){
  let taskHTML = ``;

  for (let key in Hash) {
    console.log(Hash[key]);
    let html =  `
     <div id="${key}" class="taskBlock_container">
     <button type="button">
      <i class="material-icons delete" title="Remove Task">delete</i>
     </button>
     <input type="text" value="${key}">
     <div class="">
       <p class="">Total Score: </p>
        <p class="">
          <span class="hours">${Hash[key].hours + ':'}</span>
          <span class="minutes">${Hash[key].minutes + ':'}</span>
          <span class="seconds">${Hash[key].seconds}</span>
        </p>
      </div>
   </div>
  `;

    taskHTML += html;
  }

  return taskHTML;
}


