import {projectsStorage} from './ProjectsData.js';
import {closeWindow} from "./closeModalWindow.js";

//Добавляем проект по клику Apply
export function applyProject() {

  let formProject = document.forms['addProject'];
  let projectName = formProject.elements['projectTitle'];
  let projectNameValue = projectName.value;

  if (projectNameValue.length === 0) {
    alert('Please fill Name Project');
    projectName.focus();
    return false;
  } else if (projectNameValue.length > 0 && projectsStorage.checkProject(projectNameValue) === true) {
    alert('The Project by that name exists')
    projectName.focus();
    return false;
  } else {
    projectsStorage.addValue(projectNameValue);
    document.getElementById('projectBlock').insertAdjacentHTML('beforeend', projectsStorage.draw(projectNameValue));
  }

  btnApply.removeEventListener('click', applyProject);
  closeWindow();
}