'use strict';

function changeKey(e) {
  let inputType = e.target.type;
  let setParentID = e.target.closest('div[id]').id;

  switch (inputType) {
    case 'text':
      let inputText = e.srcElement;
      inputText.addEventListener('change', function () {
        let newKey = inputText.value;
        projectsStorage.changeKey(setParentID,newKey);
      });
      break;

    case 'color':
      let inputColor = e.srcElement;
      inputColor.addEventListener('change', function () {
        let color = inputColor.value;
        projectsStorage.changeColor(setParentID, color);
      });
  }
}