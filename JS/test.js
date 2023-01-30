'use strict';

function changeProject(e) {

  let inputType = e.target.type;
  let setParentID = e.target.closest('div[id]');
  let btn = e.target.closest('button[type]') ? e.target.closest('button[type]').type : null;

  if (inputType) {
    switch (inputType) {
      case 'text':
        let inputText = e.srcElement;
        inputText.addEventListener('change', changeText);

      function changeText() {
        let newKey = inputText.value;
        document.getElementById(setParentID.id).remove();
        projectsStorage.changeKey(setParentID.id, newKey);
        drawProject(newKey);
        inputText.removeEventListener('change', changeText);
        document.location.reload();
      }

        break;

      case 'color':
        let inputColor = e.srcElement;
        inputColor.addEventListener('change', changeColor);

      function changeColor() {
        let color = inputColor.value;
        projectsStorage.changeColor(setParentID.id, color);
        inputColor.removeEventListener('change', changeColor);
      }

        break;
    }
  } else if (btn) {
    projectsStorage.deleteValue(setParentID.id);
    document.getElementById(setParentID.id).remove();
  }
}


function openTaskList() {
  parentID.childNodes[3].classList.toggle('open');
  console.log(parentID.id);
  parentID.childNodes[3].addEventListener('click', function () {
    drawModal(taskModal);
    btnApply.addEventListener('click', applyTask);
  });
}

function applyTask() {
  let formTask = document.forms['addTask'];
  let taskName = formTask.elements['taskTitle'];
  let taskNameValue = taskName.value;

  if (taskNameValue.length === 0) {
    alert('Please fill Name Task');
    taskName.focus();
    return false;
  } else if (taskNameValue.length > 0 && projectsStorage.checkProject(taskNameValue) === true) {
    alert('The Task by that name exists');
    taskName.focus();
    return false;
  } else {
    projectsStorage.addTask(parentID.id, taskNameValue);
    drawTask(parentID.id, taskNameValue);
    console.log(parentID.childNodes[3]);

    //drawTask(taskNameValue);
    //вот тут мы должны отрисовать задачу
    //document.location.reload();

  }

  btnApply.removeEventListener('click', applyTask);
  closeWindow();

  /* let formTask = document.forms['addTask'];
   let taskName = formTask.elements['taskTitle'];
   let taskNameValue = taskName.value;

   if (taskNameValue.length === 0) {
     alert('Please fill Name Task');
     taskName.focus();
     return false;
   } else if(taskNameValue.length > 0 && projectsStorage.checkProject(taskNameValue) === true){
     alert('The Task by that name exists');
     taskName.focus();
     return false;
   }else {

     projectsStorage.addTaskValue(parentID.id, taskNameValue);
     document.location.reload();
   }

   btnApply.removeEventListener('click', applyTask);
   closeWindow();*/
}
