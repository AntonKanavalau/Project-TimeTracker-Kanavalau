'use strict';



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
