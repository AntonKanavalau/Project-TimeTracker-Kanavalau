import {projectsStorage} from "./ProjectsData.js";
import {TemporaryStorage} from "./TemporaryData.js";

export function tracker(e) {
  let getParentID = e.target.closest('div[id]');
  let icon = e.srcElement;

  //обнуляем статус, ибо после перезагрузки трекер останавливается, а статус не изменяется
   let obj = projectsStorage.getValue(getParentID.id);
   obj.status = 'inactive';

  let header = document.getElementById('header');

  if (icon.innerText === 'play_arrow' && projectsStorage.checkStatus() !== true) {
    console.log(getParentID);
    projectsStorage.startTracker(
      getParentID,
      icon,
      TemporaryStorage
    );

  } else if (icon.innerText === 'play_arrow' && projectsStorage.checkStatus() === true) {
    let activeKey = projectsStorage.getObjStatus().id;
    let reIcon = document.querySelector('.pause');

    projectsStorage.pauseTracker(activeKey, reIcon);
    projectsStorage.startTracker(
      getParentID,
      icon,
      TemporaryStorage
    );

  } else if (icon.innerText === 'pause' || header.querySelector('#headerBtn').title=== 'pause') {
    projectsStorage.pauseTracker(getParentID.id, icon);
    TemporaryStorage.clearTemporaryStorage();
  }
}