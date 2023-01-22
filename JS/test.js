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

// console.log(setParentID.childNodes[3].classList.toggle('open'));


function openContextMenu(e){
  let menuState = 0;

  let menuPosition;
  let menuPositionX;
  let menuPositionY;

  let clickCoords;
  let clickCoordsX;
  let clickCoordsY;

  openTaskList(e);

  function openTaskList(e) {
    e.preventDefault();

    let setParentID = e.target.closest('div[id]');

    toggleMenuOff();

    if (setParentID) {
      toggleMenuOn();
      positionMenu(e);
    } else {
      toggleMenuOff();
    }

    clickListener();
    keyupListener();
    resizeListener();
  }

  function toggleMenuOn() {
    if (menuState !== 1) {
      menuState = 1;
      let html = `<nav id="context-menu">
        <ul class="context-menu__items">
          <li>Open Task list</li>
        </ul>
      </nav>`;
      document.body.insertAdjacentHTML('beforeend', html);
    }
  }

  function toggleMenuOff() {
    if (menuState !== 0) {
      menuState = 0;
      document.getElementById('context-menu').remove();
    }
  }

  function clickListener() {
    document.addEventListener("click", function (e) {
      var button = e.which || e.button;
      if (button === 1) {
        toggleMenuOff();
      }
    });
  }

  function keyupListener() {
    window.onkeyup = function(e) {
      if ( e.keyCode === 27 ) {
        toggleMenuOff();
      }
    }
  }

  function getPosition(e) {
    let posx = 0;
    let posy = 0;

    if (!e) var e = window.event;

    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop +
        document.documentElement.scrollTop;
    }

    return {
      x: posx,
      y: posy
    }
  }

// updated positionMenu function
  function positionMenu(e) {
    let menu = document.getElementById('context-menu');

    let menuWidth = menu.offsetWidth;
    let menuHeight = menu.offsetHeight;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    clickCoords = getPosition(e);
    clickCoordsX = clickCoords.x;
    clickCoordsY = clickCoords.y;

    menuWidth = menu.offsetWidth + 4;
    menuHeight = menu.offsetHeight + 4;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    if ( (windowWidth - clickCoordsX) < menuWidth ) {
      menu.style.left = windowWidth - menuWidth + "px";
    } else {
      menu.style.left = clickCoordsX + "px";
    }

    if ( (windowHeight - clickCoordsY) < menuHeight ) {
      menu.style.top = windowHeight - menuHeight + "px";
    } else {
      menu.style.top = clickCoordsY + "px";
    }
  }

  function resizeListener() {
    window.onresize = function(e) {
      toggleMenuOff();
    };
  }
}


