import {projectsStorage} from './ProjectsData.js';

//Чекаем изменения в проектах
export function changeProject(e) {

  let inputType = e.target.type;
 let setParentID = e.target.closest('div[id]');
  let btn = e.target.closest('button[type]') ? e.target.closest('button[type]').type : null;


  if (inputType) {
    switch (inputType) {
      case 'text':
        let inputText = e.srcElement;
        inputText.addEventListener('change',
          () => {projectsStorage.changeID(setParentID.id, inputText.value)});
        break;

      case 'color':
        let inputColor = e.srcElement;
        inputColor.addEventListener('change',
          () => {projectsStorage.changeColor(setParentID.id, inputColor.value)});
        break;
    }
  } else if (btn) {
    projectsStorage.deleteValue(setParentID.id);
  }
}