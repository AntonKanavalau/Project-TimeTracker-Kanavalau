'use strict';

window.addEventListener('load', drawProject);

let Hash = JSON.parse(localStorage.getItem("Projects"));

function drawProject() {
  let projectContainer = document.getElementById('projectBlock');


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
  ${drawTask(Hash[key].tasks)}
    <div class="taskCreate">create new task</div>
</div>
</div>
`;

    projectContainer.insertAdjacentHTML('beforeend', html);
  }
}

function drawTask(Hash){
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



