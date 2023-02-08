import {projectsStorage} from './ProjectsData.js';

export function tracker(e) {
  let setParentID = e.target.closest('div[id]');
  let icon = e.srcElement;

  let secondElem = setParentID.querySelector('.seconds');
  let minuteElem = setParentID.querySelector('.minutes');
  let hourElem = setParentID.querySelector('.hours');
  let deyElem = setParentID.querySelector('.days');


  if (icon.innerText === 'play_arrow' && projectsStorage.checkStatus() !== true) {
    projectsStorage.startTracker(
      setParentID.id,
      secondElem,
      minuteElem,
      hourElem,
      deyElem,
      icon
    );

  } else if (icon.innerText === 'play_arrow' && projectsStorage.checkStatus() === true) {
    let activeKey = projectsStorage.getObjStatus().id;
    let reIcon = document.querySelector('.pause');

    projectsStorage.pauseTracker(activeKey, reIcon);
    projectsStorage.startTracker(
      setParentID.id,
      secondElem,
      minuteElem,
      hourElem,
      deyElem,
      icon
    );

  } else if (icon.innerText === 'pause') {
    projectsStorage.pauseTracker(setParentID.id, icon);
  }
}