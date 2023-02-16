import {projectsStorage} from "./ProjectsData.js";
import {TemporaryStorage} from "./TemporaryData.js";

export function headerActiv() {
  const headerTitle = document.getElementById('headerProjectTitle').innerText;
  const getProjectID = document.getElementById(headerTitle);

  if (headerTitle !== '') {
    const icon = getProjectID.querySelector('.material-icons');

    switch (icon.innerText){
      case 'play_arrow':
        projectsStorage.startTracker(
          getProjectID,
          icon,
          TemporaryStorage
        );
        break;

      case 'pause':
        projectsStorage.pauseTracker(getProjectID.id, icon);
        console.log('pause');
        break
    }
  }else {
    alert('No active projects ');
  }

}