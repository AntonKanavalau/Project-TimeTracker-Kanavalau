'use strict';

/*window.addEventListener('load', drawProject);*/




function drawProject(key) {
  let projectContainer = document.getElementById('projectBlock');
  let Hash = JSON.parse(localStorage.getItem("Projects"));


    let html = `
<div id="${Hash[key].id}" class="projectBlock_container">
 <div class="projectTime">
  <input type="color" value="${Hash[key].color}">
  <input type="text" value="${Hash[key].id}">
  <div class="totalScoreContainer">
    <p class="totalScoreText">Total Score: </p>
    <p class="totalProjectScore">
      <span class="days">${Hash[key].days + ':day'}</span>
      <span class="hours">${Hash[key].hours + ':'}</span>
      <span class="minutes">${Hash[key].minutes + ':'}</span>
      <span class="seconds">${Hash[key].seconds}</span>
    </p>
    <button><i class="material-icons" title="Start Tracker">play_arrow</i></button>
  </div>
  <button type="button">
    <i class="material-icons delete" title="Remove Project">delete</i>
  </button>
  </div>
</div>
`;

    projectContainer.insertAdjacentHTML('beforeend', html);
}

function drawTask(parentKey, key){
  let taskContainer = parentID.childNodes[3];

  let Hash = JSON.parse(localStorage.getItem("Projects"));

   let taskHTML =  `
     <div id="${key}" class="taskBlock_container">
     <button type="button">
      <i class="material-icons delete" title="Remove Task">delete</i>
     </button>
     <input type="text" value="${key}">
     <div class="">
       <p class="">Total Score: </p>
        <p class="">
          <span class="hours">${Hash[parentKey].tasks[key].hours + ':'}</span>
          <span class="minutes">${Hash[parentKey].tasks[key].minutes + ':'}</span>
          <span class="seconds">${Hash[parentKey].tasks[key].seconds}</span>
        </p>
      </div>
   </div>
  `;

  taskContainer.insertAdjacentHTML('beforeend', taskHTML);
}



