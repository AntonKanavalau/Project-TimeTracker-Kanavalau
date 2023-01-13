'use strict';

(function () {
  const btnClose = document.getElementById('btnClose');
  btnClose.addEventListener('click', closeWindow);

  const btnDecline = document.getElementById('btnDecline');
  btnDecline.addEventListener('click', closeWindow);
}());

function closeWindow() {
  let elem = document.getElementById('formContainer');
  elem.remove();

  console.log(document.scripts);

  document.scripts[3].remove();
  //document.scripts[2].remove();
}