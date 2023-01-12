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
  checkDrawProjects(Projects);
  //drawProject(Projects, projectNameValue);
  localStorage.setItem('Projects', JSON.stringify(Projects));
  console.log(Projects);
  closeWindow();
}



/*function drawProject(Projects, projectNameValue){
  let html = `
<div id="${Projects[projectNameValue]}" class="projectTime">
  <input type="color" value="${Projects[projectNameValue].color}">
  <input type="text" value="${Projects[projectNameValue]}">
  <div class="totalScoreContainer">
    <p class="totalScoreText">Total Score: </p>
    <p class="totalProjectScore">
      <span class="days">${Projects[projectNameValue].days + ':day'}</span>
      <span class="hours">${Projects[projectNameValue].hours + ':'}</span>
      <span class="minutes">${Projects[projectNameValue].minutes + ':'}</span>
      <span class="seconds">${Projects[projectNameValue].seconds}</span></p>
  </div>
  <button type="button">
    <i class="material-icons delete" title="Remove Project">delete</i>
  </button>
</div>
`;

  localStorage.setItem('Projects', JSON.stringify(Projects));
  localStorage.setItem('html', JSON.stringify(html));
}*/

/*function drawProject(Projects, projectNameValue) {
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
}*/

