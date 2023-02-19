import {projectsStorage} from "./ProjectsData.js";
import {TemporaryStorage} from "./TemporaryData.js";

//действия на кнопку в header
export function headerActiv() {
  const headerTitle = document.getElementById('headerProjectTitle').innerText;
  const getProjectID = document.getElementById(headerTitle);

  if (headerTitle !== '') {
    const icon = getProjectID.querySelector('.material-icons');

    switch (icon.innerText){
      case 'play_arrow':
        projectsStorage.startTracker(getProjectID, icon, TemporaryStorage);
        clearTimeout(TemporaryStorage.timeout);
        break;

      case 'pause':
        projectsStorage.pauseTracker(getProjectID.id, icon);
        break
    }
  }else {
    alert('No active projects ');
  }

}