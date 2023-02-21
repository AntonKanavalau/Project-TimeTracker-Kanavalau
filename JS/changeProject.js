import {projectsStorage} from "./ProjectsData.js";
import {drawDiagram} from "./drawDiagram.js";

//Чекаем изменения в проектах
export function changeProject(e) {

  let inputType = e.target.type;
  let getParentID = e.target.closest('div[id]');
  let icon = getParentID.querySelector('.material-icons');

  if (inputType) {
    switch (inputType) {
      case 'text':
        let inputText = e.srcElement;
        inputText.addEventListener('change',
          () => {
            projectsStorage.changeID(getParentID.id, inputText.value,icon);
            drawDiagram();
          });
        break;

      case 'color':
        let inputColor = e.srcElement;
        inputColor.addEventListener('change',
          () => {
            projectsStorage.changeColor(getParentID.id, inputColor.value, icon);
            drawDiagram();
          });
        break;
    }
  }
}