import {projectsStorage} from './ProjectsData.js';

export function tracker(e) {
  let getParentID = e.target.closest('div[id]');
  let icon = e.srcElement;

  //обнуляем статус, ибо после перезагрузки трекер останавливается, а статус не изменяется
  let obj = projectsStorage.getValue(getParentID.id);
  obj.status = 'inactive';

  let secondElem = getParentID.querySelector('.seconds');
  let minuteElem = getParentID.querySelector('.minutes');
  let hourElem = getParentID.querySelector('.hours');
  let deyElem = getParentID.querySelector('.days');


  let header = document.getElementById('header');


  if (icon.innerText === 'play_arrow' && projectsStorage.checkStatus() !== true) {
    projectsStorage.startTracker(
      getParentID.id,
      secondElem,
      minuteElem,
      hourElem,
      deyElem,
      icon,
      header
    );

    console.log(header.querySelector('.hide'));
    console.log(header.querySelector('#headerProjectTitle'));
    console.log(header.querySelector('.hours'));
    console.log(header.querySelector('.minutes'));
    console.log(header.querySelector('.seconds'));
    console.log(header.querySelector('#headerBtn'));

/*    let html = `
    <h3>${getParentID.id}</h3>
    <p>
      <span class="hours">00</span>:
      <span class="minutes">00</span>:
      <span class="seconds">00</span>
    </p>
    <button>
      <i class="material-icons start" title="Start Tracker">play_arrow</i>
    </button>
    `;

    header.insertAdjacentHTML('beforeend', html);*/

  } else if (icon.innerText === 'play_arrow' && projectsStorage.checkStatus() === true) {
    let activeKey = projectsStorage.getObjStatus().id;
    let reIcon = document.querySelector('.pause');

    projectsStorage.pauseTracker(activeKey, reIcon, header);
    projectsStorage.startTracker(
      getParentID.id,
      secondElem,
      minuteElem,
      hourElem,
      deyElem,
      icon,
      header
    );

  } else if (icon.innerText === 'pause' || header.querySelector('#headerBtn').title=== 'pause') {
    projectsStorage.pauseTracker(getParentID.id, icon, header);
  }
}