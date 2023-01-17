'use strict';

var ProjectsArray = [];

function applyProject() {
  var formProject = document.forms['addProject'];
  var projectName = formProject.elements['projectTitle'];
  var projectNameValue = projectName.value;

  var project = new Project(projectNameValue);
  ProjectsArray.unshift(project);

  save();
  closeWindow();

  //console.log(ProjectsArray);
}


drawProject(ProjectsArray);

function Project(nameP) {
  this.id = nameP;
  this.color = '#00b33c';
  this.seconds = '00';
  this.minutes = '00';
  this.hours = '00';
  this.days = 0;

}

function Task(nameT, start, stop, cost) {
  this[nameT];

}

function drawProject(ProjectsArray) {
  console.log(ProjectsArray);
  if (ProjectsArray.length > 0) {
    for (let key in ProjectsArray) {
      const projectContainer = document.getElementById('projectBlock');
      //console.log(projectContainer);

      const projectBlock = document.createElement('div');
      projectBlock.id = ProjectsArray[key].id;
      projectBlock.className = 'projectTime';
      projectContainer.append(projectBlock);

      const projectColor = document.createElement('input');
      projectColor.type = 'color';
      projectColor.value = ProjectsArray[key].color;

      const projectTitle = document.createElement('input');
      projectTitle.type = 'text';
      projectTitle.value = ProjectsArray[key].id;

      const totalScoreContainer = document.createElement('div');
      totalScoreContainer.className = 'totalScoreContainer';

      const totalScoreText = document.createElement('p');
      totalScoreText.className = 'totalScoreText';
      totalScoreText.innerText = 'Total Score: ';

      const totalScore = document.createElement('p');
      totalScore.className = 'totalProjectScore';

      totalScoreContainer.append(totalScoreText, totalScore)

      let dayScore = document.createElement('span');
      dayScore.innerText = ProjectsArray[key].days + ':day';
      dayScore.className = 'days';

      let hoursScore = document.createElement('span');
      hoursScore.innerText = ProjectsArray[key].hours + ':';
      hoursScore.className = 'hours';

      let minutesScore = document.createElement('span');
      minutesScore.innerText = ProjectsArray[key].minutes + ':';
      minutesScore.className = 'minutes';

      let secondsScore = document.createElement('span');
      secondsScore.innerText = ProjectsArray[key].seconds;
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
  }
}

//Save in localStorage
function save() {
  localStorage.setItem('ProjectsArray', JSON.stringify(ProjectsArray));
}
