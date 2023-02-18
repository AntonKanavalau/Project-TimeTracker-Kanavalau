import {projectsStorage} from "./ProjectsData.js";
import {TemporaryStorage} from "./TemporaryData.js";

export function tracker(e) {
  let getParentID = e.target.closest('div[id]');
  let icon = e.srcElement;

  if(getParentID.id.startsWith('t_') === true){
    getParentID = document.getElementById(`${getParentID.querySelector('.tempTitle').innerText}`);
    icon = getParentID.querySelector('.material-icons');
  }

  //обнуляем статус, ибо после перезагрузки трекер останавливается, а статус не изменяется
   let obj = projectsStorage.getValue(getParentID.id);
   obj.status = 'inactive';

  let header = document.getElementById('header');

  //конка play и нет активного трекера
  if (icon.innerText === 'play_arrow' && projectsStorage.checkStatus() !== true) {
    projectsStorage.startTracker(getParentID, icon, TemporaryStorage);

  //конка play и есть активный трекер
  } else if (icon.innerText === 'play_arrow' && projectsStorage.checkStatus() === true) {
    console.log('2');
    let activeKey = projectsStorage.getObjStatus().id;
    console.log(activeKey);
    let reIcon = document.querySelector('.pause');

    projectsStorage.pauseTracker(activeKey, reIcon);
    projectsStorage.startTracker(getParentID, icon, TemporaryStorage);

    //конка pause или таже кнопка в header
  } else if (icon.innerText === 'pause' || header.querySelector('#headerBtn').title=== 'pause') {
    projectsStorage.pauseTracker(getParentID.id, icon);
    TemporaryStorage.clearTemporaryStorage();
  }
}