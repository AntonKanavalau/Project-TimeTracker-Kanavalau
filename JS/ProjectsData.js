'use strict';

/*Тут мы будем хранить все проекты, а внутри проектов будут таски.
Имя проекта - ключ объекта Projects (можно изменить).
Каждый проект будет иметь цвет, секунды, минуты, часы (это база).
Имя задачи - ключ объекта 'Имя проекта'(можно изменить).
Каждая таска будет иметь секунды, минуты, часы*/

let projectsStorage = new Project("Projects");

function applyProject() {

  var formProject = document.forms['addProject'];
  var projectName = formProject.elements['projectTitle'];
  var projectNameValue = projectName.value;

  if (projectNameValue.length === 0) {
    alert('Please fill Name Project');
    projectName.focus();
    return false;
  } else if(projectNameValue.length > 0 && projectsStorage.checkProject(projectNameValue) === true){
    alert('The Project by that name exists');
    projectName.focus();
    return false;
  }else {
    projectsStorage.addValue(projectNameValue);
    document.location.reload();
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

  self.checkProject = function (key) {
    for (let char in Hash){
      if(key === char){
        return true;
      }
    }
  };

  //self.addTask = function (){};
  self.reset = function () {
    if (localStorage.getItem(Projects)) {
      if (Projects === "Projects") {
        Hash = JSON.parse(localStorage.getItem(Projects));
      }
    }
  };

  self.reset();

  self.getValue = function (key) {
    return Hash[key];
  };

  self.getKeys = function () {
    return (Object.keys(Hash));
  };

  self.deleteValue = function (key) {
    delete Hash[key];
    localStorage.setItem(Projects, JSON.stringify(Hash));
    return Hash[key];
  };

  self.changeKey = function (key ,newKey) {
    this.addValue(newKey);
    Hash[newKey] = Hash[key];
    this.deleteValue(key);
    localStorage.setItem(Projects, JSON.stringify(Hash));
    return Hash[newKey]
  }

  self.changeColor = function (key, char){
    Hash[key].color = char;
    localStorage.setItem(Projects, JSON.stringify(Hash));
    return Hash[key];
  }

/*  self.changeKey= function (newKey) {

  }*/

  /*  self.draw = function (key) {
      let projectContainer = document.getElementById('projectBlock');
        let html = `
  <div id="${key}" class="projectTime">
    <input type="color" value="${Hash[key].color}">
    <input type="text" value="${key}">
    <div class="totalScoreContainer">
      <p class="totalScoreText">Total Score: </p>
      <p class="totalProjectScore">
        <span class="days">${Hash[key].days + ':day'}</span>
        <span class="hours">${Hash[key].hours + ':'}</span>
        <span class="minutes">${Hash[key].minutes + ':'}</span>
        <span class="seconds">${Hash[key].seconds}</span></p>
    </div>
    <button type="button">
      <i class="material-icons delete" title="Remove Project">delete</i>
    </button>
  </div>
  `;
        projectContainer.insertAdjacentHTML('beforeend', html);
    };*/

}




