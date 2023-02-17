import {projectsStorage} from "./ProjectsData.js";


//ставим на паузу трекер и обновляем страницу по нажатию F5
export function checkReload(e) {
  if(e.keyCode === 116){
    let getStatus =  projectsStorage.checkStatus();

    if (getStatus === true){
      let obj = projectsStorage.getObjStatus();
      let icon = document.getElementById(obj.id).querySelector('.material-icons');
      projectsStorage.pauseTracker(obj.id, icon);
    }else {
      document.location.reload();
    }
  }
}