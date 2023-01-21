'use strict';

function changeProject(e) {
  let inputType = e.target.type;
  let setParentID = e.target.closest('div[id]').id;
  let btn = e.target.closest('button[type]') ? e.target.closest('button[type]').type : null;

  if (inputType) {
    switch (inputType) {
      case 'text':
        let inputText = e.srcElement;
        inputText.addEventListener('change', function () {
          let newKey = inputText.value;
          projectsStorage.changeKey(setParentID, newKey);
        });
        inputText.removeEventListener();
        break;

      case 'color':
        let inputColor = e.srcElement;
        inputColor.addEventListener('change', function () {
          let color = inputColor.value;
          projectsStorage.changeColor(setParentID, color);
        });
        inputColor.removeEventListener();
        break;
    }
  } else if (btn) {
    projectsStorage.deleteValue(setParentID);
    document.getElementById(setParentID).remove();
  }
}