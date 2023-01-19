'use strict';

function changeKey(e) {
  let setID = e.srcElement.defaultValue;

  let Hash = JSON.parse(localStorage.getItem("Projects"));

  let getObjInfo = (setID) ? projectsStorage.getValue(setID) : 0;

  if (getObjInfo) {
    let input = e.srcElement;
    input.addEventListener('change', function () {
      projectsStorage.addValue(input.value);
      Hash[input.value] = getObjInfo;
      projectsStorage.deleteValue(setID);
    });
  }
}