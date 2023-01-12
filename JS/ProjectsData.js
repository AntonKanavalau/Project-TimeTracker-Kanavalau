'use strict';

/*Тут мы будем хранить все проекты, а внутри проектов будут таски.
Имя проекта - ключ объекта Projects (можно изменить).
Каждый проект будет иметь цвет, секунды, минуты, часы (это база).
Имя задачи - ключ объекта 'Имя проекта'(можно изменить).
Каждая таска будет иметь секунды, минуты, часы*/
var Projects = {};

function AddIntoProjects(key) {
  Projects[key] = {
    color: '#00b33c',
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '0'
  };
  localStorage.setItem('Projects', JSON.stringify(Projects));
  return Projects;
}

console.log(Projects);
checkDrawProjects(Projects);

function checkDrawProjects(Projects) {
  Projects = JSON.parse(localStorage.getItem('Projects'))
  console.log(Projects);
    for(let project in Projects){
      console.log(project);
      //drawProject(project);

    }
}

function drawProject(project) {
  const projectContainer = document.getElementById('projectBlock');
  //console.log(projectContainer);

  const projectBlock = document.createElement('div');
  projectBlock.id = project;
  projectBlock.className = 'projectTime';
  projectContainer.append(projectBlock);

  const projectColor = document.createElement('input');
  projectColor.type = 'color';
  projectColor.value = Projects[project].color;

  const projectTitle = document.createElement('input');
  projectTitle.type = 'text';
  projectTitle.value = project;

  const totalScoreContainer = document.createElement('div');
  totalScoreContainer.className = 'totalScoreContainer';

  const totalScoreText = document.createElement('p');
  totalScoreText.className = 'totalScoreText';
  totalScoreText.innerText = 'Total Score: ';

  const totalScore = document.createElement('p');
  totalScore.className = 'totalProjectScore';

  totalScoreContainer.append(totalScoreText, totalScore)

  let dayScore = document.createElement('span');
  dayScore.innerText = Projects[project].days + ':day';
  dayScore.className = 'days';

  let hoursScore = document.createElement('span');
  hoursScore.innerText = Projects[project].hours + ':';
  hoursScore.className = 'hours';

  let minutesScore = document.createElement('span');
  minutesScore.innerText = Projects[project].minutes + ':';
  minutesScore.className = 'minutes';

  let secondsScore = document.createElement('span');
  secondsScore.innerText = Projects[project].seconds;
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



