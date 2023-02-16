import {projectsStorage} from "./ProjectsData.js";
import {changeProject} from "./changeProject.js";
import {projectModal, drawModal} from "./openModalWindow.js";
import {tracker} from "./timeTracker.js";
import {openContextMenu} from "./contextMenu.js";
import {headerActiv} from "./headerButton.js";
import {clearTemporaryStorage} from "./clearTemporaryStorage.js";
import {TemporaryStorage} from "./TemporaryData.js";

if (TemporaryStorage.tHash.length !== 0){
  clearTemporaryStorage();
}


//create header element
const header = document.createElement('header');
header.id = 'header';
const headerContent = `
   <h3 id="headerProjectTitle"></h3>
    <p id="headerText">
      <span id="hours">00</span>:
      <span id="minutes">00</span>:
      <span id="seconds">00</span>
    </p>
    <button>
      <i id="headerBtn" class="material-icons" title="Start Tracker">play_arrow</i>
    </button>
    `;

header.insertAdjacentHTML('beforeend', headerContent);

//create main (body) element
const main = document.createElement('main');
drawMainElem(main);

document.body.append(header, main);
document.getElementById('headerBtn').addEventListener('click',headerActiv);

drawProjects();

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

  //Контейнер, где будут проекты
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
  projectHeaderButton.addEventListener('click', function () {
    drawModal(projectModal);
  });

  projectHeader.append(projectHeaderTitle, projectHeaderButton);

  //блок с проектами
  const projectBlock = document.createElement('div');
  projectBlock.id = 'projectBlock';
  projectBlock.addEventListener('click', changeProject);
  projectBlock.addEventListener('click', tracker);
  projectBlock.addEventListener("contextmenu", openContextMenu, false);
  container.append(projectHeader, projectBlock);

  main.append(timerContainer, projectContainer);
}

function drawProjects() {
  let Hash = JSON.parse(localStorage.getItem("Projects"));

  for (let key in Hash) {
    document.getElementById('projectBlock').insertAdjacentHTML('beforeend', projectsStorage.draw(Hash[key].id));
  }
}



