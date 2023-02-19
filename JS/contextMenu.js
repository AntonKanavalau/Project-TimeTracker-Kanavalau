import {projectsStorage} from "./ProjectsData.js";
import {TemporaryStorage} from "./TemporaryData.js";

let menuState = 0;

export function openContextMenu(e) {
  e.preventDefault();

  let setParentID = e.target.closest('div[id]');

  if (setParentID) {
    toggleMenuOn(setParentID);
    positionMenu(e);
  } else {
    toggleMenuOff();
  }

  clickListener();
  keyupListener();
  resizeListener();
}

function toggleMenuOn(setParentID) {
  if (menuState !== 1) {
    menuState = 1;
    let html = `<nav id="context-menu">
        <ul class="context-menu__items">
          <li id="clearProject">Clear Timer</li>
          <li id="deleteProject">Delete Project</li>
        </ul>
      </nav>`;
    document.body.insertAdjacentHTML('beforeend', html);

    document.getElementById('clearProject').addEventListener('click', () => {projectsStorage.clearTimer(setParentID.id)});
    document.getElementById('deleteProject').addEventListener('click', () => {projectsStorage.deleteValue(setParentID.id)});
    document.getElementById('deleteProject').addEventListener('click', () => {TemporaryStorage.deleteValue(setParentID.id)});

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
  window.onkeyup = function (e) {
    if (e.keyCode === 27) {
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

let clickCoords;
let clickCoordsX;
let clickCoordsY;

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

  if ((windowWidth - clickCoordsX) < menuWidth) {
    menu.style.left = windowWidth - menuWidth + "px";
  } else {
    menu.style.left = clickCoordsX + "px";
  }

  if ((windowHeight - clickCoordsY) < menuHeight) {
    menu.style.top = windowHeight - menuHeight + "px";
  } else {
    menu.style.top = clickCoordsY + "px";
  }
}

function resizeListener() {
  window.onresize = function (e) {
    toggleMenuOff();
  };
}
