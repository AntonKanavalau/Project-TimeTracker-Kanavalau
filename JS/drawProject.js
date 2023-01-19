'use strict';

window.addEventListener('load', drawProject);

function drawProject() {
  let projectContainer = document.getElementById('projectBlock');

  let Hash = JSON.parse(localStorage.getItem("Projects"));
  for (let key in Hash) {
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
      <span class="seconds">${Hash[key].seconds}</span></p>
  </div>
  <button type="button">
    <i class="material-icons delete" title="Remove Project">delete</i>
  </button>
  </div>
  <div class="taskCreate">
  <p>create new task</p>
</div>
</div>
`;
    projectContainer.insertAdjacentHTML('beforeend', html);
  }
}
