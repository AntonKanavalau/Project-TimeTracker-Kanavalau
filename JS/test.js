'use strict';

const projectModal = new ModalsWindow('creat new project', 'addProject', 'Project Name', 'projectTitle');
const taskModal = new ModalsWindow('creat new task', 'addTask', 'Task Name', 'taskTitle');

function ModalsWindow(headerTitle, formName, label, inputName) {
  this.headerTitle = headerTitle;
  this.formName = formName;
  this.label = label;
  this.inputName = inputName;

}

function checkModal(e) {
  let setID = e.target.id;
  switch (setID) {
    case 'btn-createProject':
      console.log(setID);
      drawModal(projectModal);
      break;

    case 'btn-task':
      console.log(setID);
      drawModal(taskModal);
      break;
  }
}

function drawModal(char) {
  const formContainer = document.createElement('div');
  formContainer.className = 'formContainer';
  document.body.append(formContainer);

  const blockAdd = document.createElement('div');
  blockAdd.className = 'blockAdd';
  formContainer.append(blockAdd);

  const headerSection = document.createElement('header');
  headerSection.className = 'headerSection';

  const headerTitle = document.createElement('h3');
  headerTitle.innerText= char.headerTitle;

  const btnClose = document.createElement('i');
  btnClose.id= 'btnClose';
  btnClose.className= 'material-icons';
  btnClose.innerText = 'close';
  headerSection.append(headerTitle, btnClose);

  const formBlock = document.createElement('form');
  formBlock.name = char.formName;
  formBlock.action = '#';

  const nameProjectBlock = document.createElement('div');
  nameProjectBlock.className= 'nameProjectBlock';

  const label = document.createElement('label');
  label.setAttribute('for','projectTitle');
  label.className= 'formLabel';
  label.innerText = char.label;

  const input = document.createElement('input');
  input.className= 'formInput';
  input.type = 'text';
  input.name= char.inputName;

  const btnBlock = document.createElement('div');
  btnBlock.className = 'btnBlock';

  const btnDecline = document.createElement('button');
  btnDecline.id = 'btnDecline';
  btnDecline.innerText = 'Decline';
  btnDecline.type = 'button';

  const btnApply = document.createElement('button');
  btnApply.id = 'btnApply';
  btnApply.innerText = 'Apply';
  btnApply.type = 'button';

  formBlock.append(nameProjectBlock, btnBlock);
  nameProjectBlock.append(input,label);
  btnBlock.append(btnDecline, btnApply);
  blockAdd.append(headerSection,formBlock);
}