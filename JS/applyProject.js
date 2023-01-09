

const formProject = document.forms['addProject'];
formProject.onsubmit = validateForm;


function validateForm(){
  event.preventDefault();

  let projectName = formProject.elements['projectTitle'];
  let projectNameValue = projectName.value;

  if(projectNameValue.length === 0){
    alert('Please fill Name Project');
    projectName.focus();
    return false;
  }

  console.log(projectNameValue);
}

