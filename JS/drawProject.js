'use strict';

export let drawProject = () => {

  let Hash = JSON.parse(localStorage.getItem('Projects'));

  for (let key in Hash) {
    console.log(Hash[key]);
    let projectContainer = document.getElementById('projectBlock');

    const projectBlock = document.createElement('div');
    projectBlock.id = key.id;
    projectBlock.className = 'projectTime';
    projectContainer.append(projectBlock);

    const projectColor = document.createElement('input');
    projectColor.type = 'color';
    projectColor.value = Hash[key].color;

    const projectTitle = document.createElement('input');
    projectTitle.type = 'text';
    projectTitle.value = key;

    const totalScoreContainer = document.createElement('div');
    totalScoreContainer.className = 'totalScoreContainer';

    const totalScoreText = document.createElement('p');
    totalScoreText.className = 'totalScoreText';
    totalScoreText.innerText = 'Total Score: ';

    const totalScore = document.createElement('p');
    totalScore.className = 'totalProjectScore';

    totalScoreContainer.append(totalScoreText, totalScore)

    let dayScore = document.createElement('span');
    dayScore.innerText = Hash[key].days + ':day';
    dayScore.className = 'days';

    let hoursScore = document.createElement('span');
    hoursScore.innerText = Hash[key].hours + ':';
    hoursScore.className = 'hours';

    let minutesScore = document.createElement('span');
    minutesScore.innerText = Hash[key].minutes + ':';
    minutesScore.className = 'minutes';

    let secondsScore = document.createElement('span');
    secondsScore.innerText = Hash[key].seconds;
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
