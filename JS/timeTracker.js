import {projectsStorage} from "./ProjectsData.js";
import {TemporaryStorage} from "./TemporaryData.js";
/*import {drawDiagram} from "./drawDiagram.js";*/

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
    let activeKey = projectsStorage.getObjStatus().id;
    let reIcon = document.querySelector('.pause');

    projectsStorage.pauseTracker(activeKey, reIcon); //ставим на паузу рабочий трекер
    projectsStorage.startTracker(getParentID, icon, TemporaryStorage); //запускаем новый
    clearTimeout(TemporaryStorage.timeout); //останавливаем запущенный трекер на очищение

    //конка pause или таже кнопка в header
  } else if (icon.innerText === 'pause' || header.querySelector('#headerBtn').title=== 'pause') {
    projectsStorage.pauseTracker(getParentID.id, icon);
  }
}