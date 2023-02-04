/*Тут мы будем хранить все проекты, а внутри проектов будут таски.
Имя проекта - ключ объекта Projects (можно изменить).
Каждый проект будет иметь цвет, секунды, минуты, часы (это база).
Имя задачи - ключ объекта 'Имя проекта'(можно изменить).
Каждая таска будет иметь секунды, минуты, часы*/

export class Project {
  constructor() {
    this.Hash = JSON.parse(localStorage.getItem("Projects")) || [];
  }

  addValue(key) {
    this.Hash.push({
      id: key,
      color: '#00b33c',
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '0'
      // tasks: []
    })

    localStorage.setItem("Projects", JSON.stringify(this.Hash));
    return this.Hash;
  }

  getValue(key) {
    return this.Hash.find(el => el.id === key);
  };

  checkProject(key) {
    if (this.getValue(key)) {
      return true;
    }
  };

  getKeys() {
    return (Object.keys(this.Hash));
  };

  changeID(key, newID) {
    this.getValue(key).id = newID;
    localStorage.setItem("Projects", JSON.stringify(this.Hash));
    return this.Hash;
  }

  changeColor(key, newColor) {
    this.getValue(key).color = newColor;
    localStorage.setItem("Projects", JSON.stringify(this.Hash));
    return this.Hash;
  }

  deleteValue(key) {
    const index = this.Hash.findIndex(el => el.id === key);
    if (index !== -1) {
      this.Hash.splice(index, 1);
      document.getElementById(key).remove();
    }
    localStorage.setItem("Projects", JSON.stringify(this.Hash));
    return this.Hash;
  };


  draw(idValue) {
    for (let i = 0; i < this.Hash.length; i++) {
      if (this.Hash[i].id === idValue) {
        return `
<div id="${this.Hash[i].id}" class="projectBlock_container">
 <div class="projectTime">
  <input type="color" value="${this.Hash[i].color}">
  <input type="text" value="${this.Hash[i].id}">
  <div class="totalScoreContainer">
    <p class="totalScoreText">Total Score: </p>
    <p class="totalProjectScore">
      <span class="days">${this.Hash[i].days + ':day'}</span>
      <span class="hours">${this.Hash[i].hours + ':'}</span>
      <span class="minutes">${this.Hash[i].minutes + ':'}</span>
      <span class="seconds">${this.Hash[i].seconds}</span>
    </p>
    <button><i class="material-icons" title="Start Tracker">play_arrow</i></button>
  </div>
  <button type="button">
    <i class="material-icons delete" title="Remove Project">delete</i>
  </button>
  </div>
</div>
`;
      }
    }

  }
}

export const projectsStorage = new Project();






/*//Добавляем проект по клику Apply
function applyProject() {

  let formProject = document.forms['addProject'];
  let projectName = formProject.elements['projectTitle'];
  let projectNameValue = projectName.value;

  if (projectNameValue.length === 0) {
    alert('Please fill Name Project');
    projectName.focus();
    return false;
  } else if (projectNameValue.length > 0 && projectsStorage.checkProject(projectNameValue) === true) {
    alert('The Project by that name exists')
    projectName.focus();
    return false;
  } else {
    projectsStorage.addValue(projectNameValue);
    document.getElementById('projectBlock').insertAdjacentHTML('beforeend', projectsStorage.draw(projectNameValue));
  }

  btnApply.removeEventListener('click', applyProject);
  closeWindow();

}

//Чекаем изменения в проектах
function changeProject(e) {

  let inputType = e.target.type;
  let setParentID = e.target.closest('div[id]');
  let btn = e.target.closest('button[type]') ? e.target.closest('button[type]').type : null;


  if (inputType) {
    switch (inputType) {
      case 'text':
        let inputText = e.srcElement;
        inputText.addEventListener('change',
          () => {projectsStorage.changeID(setParentID.id, inputText.value)});
        break;

      case 'color':
        let inputColor = e.srcElement;
        inputColor.addEventListener('change',
          () => {projectsStorage.changeColor(setParentID.id, inputColor.value)});
        break;
    }
    } else if (btn) {
      projectsStorage.deleteValue(setParentID.id);
    }
}*/

