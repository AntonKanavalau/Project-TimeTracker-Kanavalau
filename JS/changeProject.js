import {projectsStorage} from "./ProjectsData.js";

//Чекаем изменения в проектах
export function changeProject(e) {

  let inputType = e.target.type;
  let setParentID = e.target.closest('div[id]');

  if (inputType) {
    switch (inputType) {
      case 'text':
        let inputText = e.srcElement;
        inputText.addEventListener('change',
          () => {
            projectsStorage.changeID(setParentID.id, inputText.value);
          });
        break;

      case 'color':
        let inputColor = e.srcElement;
        inputColor.addEventListener('change',
          () => {
            projectsStorage.changeColor(setParentID.id, inputColor.value)
          });
        break;
    }
  }
}