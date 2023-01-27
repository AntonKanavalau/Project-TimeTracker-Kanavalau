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
        projectsStorage.changeKey(setParentID.id, newKey);
        inputText.removeEventListener('change', changeText);
      }

        break;

      case 'color':
        console.log(setParentID.id);
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
  parentID.childNodes[3].addEventListener('click', function (){
    drawModal(taskModal);
    btnApply.addEventListener('click', applyTask);
  });
}

function applyTask(){
  console.log('ok=)')
}
