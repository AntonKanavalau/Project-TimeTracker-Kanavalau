'use strict';

//Форма добавления проекта
var formProject = document.forms['addProject'];
var btnApply = document.getElementById('btnApply');
btnApply.addEventListener('click', validateForm);

function validateForm() {
  event.preventDefault();

  var projectName = formProject.elements['projectTitle'];
  var projectNameValue = projectName.value;

  if (projectNameValue.length === 0) {
    alert('Please fill Name Project');
    projectName.focus();
    return false;
  }
  AddIntoProjects(projectNameValue);
  drawProject(Projects, projectNameValue);
  closeWindow();
}

function drawProject(Projects, projectNameValue) {
  const projectContainer = document.getElementById('projectBlock');

  const projectBlock = document.createElement('div');
  projectBlock.id = projectNameValue;
  projectBlock.className = 'projectTime';
  projectContainer.append(projectBlock);

  const projectColor = document.createElement('input');
  projectColor.type = 'color';
  projectColor.value = Projects[projectNameValue].color;

  const projectTitle = document.createElement('input');
  projectTitle.type = 'text';
  projectTitle.value = projectNameValue;

  const totalScoreContainer = document.createElement('div');
  totalScoreContainer.className = 'totalScoreContainer';

  const totalScoreText = document.createElement('p');
  totalScoreText.className = 'totalScoreText';
  totalScoreText.innerText = 'Total Score: ';

  const totalScore = document.createElement('p');
  totalScore.className = 'totalProjectScore';

  totalScoreContainer.append(totalScoreText, totalScore)

  let dayScore = document.createElement('span');
  dayScore.innerText = Projects[projectNameValue].days + ':day';
  dayScore.className = 'days';

  let hoursScore = document.createElement('span');
  hoursScore.innerText = Projects[projectNameValue].hours + ':';
  hoursScore.className = 'hours';

  let minutesScore = document.createElement('span');
  minutesScore.innerText = Projects[projectNameValue].minutes + ':';
  minutesScore.className = 'minutes';

  let secondsScore = document.createElement('span');
  secondsScore.innerText = Projects[projectNameValue].seconds;
  secondsScore.className = 'seconds';

  totalScore.append(dayScore, hoursScore, minutesScore, secondsScore);

  const btnDelete = document.createElement('button');
  btnDelete.type = 'button';

  const iconDelete = document.createElement('i');
  iconDelete.className = 'material-icons delete';
  iconDelete.title = 'Remove Project';
  iconDelete.innerText = 'delete';

  btnDelete.append(iconDelete);

  projectBlock.append(projectColor, projectTitle, totalScoreContainer, btnDelete);
}

