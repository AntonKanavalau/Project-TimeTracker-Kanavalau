'use strict';

//Форма добавления проекта
var formProject = document.forms['addProject'];
var btnApply = document.getElementById('btnApply');
btnApply.addEventListener('click', validateForm);

function validateForm() {
  event.preventDefault();

  var projectName = formProject.elements['projectTitle'];
  var projectNameValue = projectName.value;

  if (projectNameValue.length === 0) {
    alert('Please fill Name Project');
    projectName.focus();
    return false;
  }
  AddIntoProjects(projectNameValue);
  closeWindow();
}


