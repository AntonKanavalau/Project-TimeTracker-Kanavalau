'use strict';
import {closeWindow} from "./closeModalWindow.js";
import {drawProject} from "./drawProject.js";

let projectsStorage = new Project("Projects");

export let applyProject = () => {

  var formProject = document.forms['addProject'];
  var projectName = formProject.elements['projectTitle'];
  var projectNameValue = projectName.value;

  if (projectNameValue.length === 0) {
    alert('Please fill Name Project');
    projectName.focus();
    return false;
  } else {
    projectsStorage.addValue(projectNameValue);
  }

  closeWindow();
}

function Project(Projects) {
  let self = this;
  let Hash = {};

  self.addValue = function (key) {
    Hash[key] = {
      color: '#00b33c',
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '0'
    };

    localStorage.setItem(Projects, JSON.stringify(Hash));
  };

  //self.addTask = function (){};
  self.reset = function () {
    if (localStorage.getItem(Projects)) {
      if (Projects === "Projects") {
        Hash = JSON.parse(localStorage.getItem(Projects));
        drawProject();
      }
    }
  };

  self.reset();
}

