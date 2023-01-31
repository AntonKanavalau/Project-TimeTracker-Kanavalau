'use strict';

window.addEventListener('load', open);

//Функция конструктор для модалок
class ModalsWindow {
  constructor(headerTitle, formName, label, inputName) {
    this.headerTitle = headerTitle;
    this.formName = formName;
    this.label = label;
    this.inputName = inputName;
  }
}

//модальные окна
const projectModal = new ModalsWindow('creat new project', 'addProject', 'Project Name', 'projectTitle');
const taskModal = new ModalsWindow('creat new task', 'addTask', 'Task Name', 'taskTitle');

//добавляем слушателя на кнопку открытия формы для добавления проектов
function open() {
  const btnCreateProject = document.getElementById('btn-createProject');
  btnCreateProject.addEventListener('click', function (){
    drawModal(projectModal);
    btnApply.addEventListener('click', applyProject);
  });
}

//функция отрисовки формы в
function drawModal(char) {
  const formContainer = document.createElement('div');
  formContainer.id = 'formContainer';
  document.body.append(formContainer);

  const blockAdd = document.createElement('div');
  blockAdd.className = 'blockAdd';
  formContainer.append(blockAdd);

  const headerSection = document.createElement('header');
  headerSection.className = 'headerSection';

  const headerTitle = document.createElement('h3');
  headerTitle.innerText = char.headerTitle;

  const btnClose = document.createElement('i');
  btnClose.id = 'btnClose';
  btnClose.className = 'material-icons';
  btnClose.innerText = 'close';
  btnClose.addEventListener('click', closeWindow);
  headerSection.append(headerTitle, btnClose);

  const formBlock = document.createElement('form');
  formBlock.name = char.formName;
  formBlock.action = '#';

  const nameProjectBlock = document.createElement('div');
  nameProjectBlock.className = 'nameProjectBlock';

  const label = document.createElement('label');
  label.setAttribute('for', 'projectTitle');
  label.className = 'formLabel';
  label.innerText = char.label;

  const input = document.createElement('input');
  input.className = 'formInput';
  input.type = 'text';
  input.name = char.inputName;

  const btnBlock = document.createElement('div');
  btnBlock.className = 'btnBlock';

  const btnDecline = document.createElement('button');
  btnDecline.id = 'btnDecline';
  btnDecline.innerText = 'Decline';
  btnDecline.type = 'button';
  btnDecline.addEventListener('click', closeWindow);

  const btnApply = document.createElement('button');
  btnApply.id = 'btnApply';
  btnApply.innerText = 'Apply';
  btnApply.type = 'button';

  formBlock.append(nameProjectBlock, btnBlock);
  nameProjectBlock.append(input, label);
  btnBlock.append(btnDecline, btnApply);
  blockAdd.append(headerSection, formBlock);
}

