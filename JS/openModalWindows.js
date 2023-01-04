'use strict';

function drawModal() {
  const formContainer = document.createElement('div');
  formContainer.className = 'formContainer';
  document.body.append(formContainer);

  const blockAdd = document.createElement('div');
  blockAdd.className = 'blockAdd';
  formContainer.append(blockAdd);

  const headerSection = document.createElement('header');
  headerSection.className = 'headerSection';

  const headerTitle = document.createElement('h3');
  headerTitle.innerText='creat new project'
  headerSection.append(headerTitle);

  const formBlock = document.createElement('form');
  formBlock.name = 'addProject';
  formBlock.action ='#';

  const nameProjectBlock = document.createElement('div');
  nameProjectBlock.className= 'nameProjectBlock';

  const label = document.createElement('label');
  label.setAttribute('for','projectTitle');
  label.className= 'formLabel';
  label.innerText = 'Project Name';

  const input = document.createElement('input');
  input.className= 'formInput';
  input.type = 'text';
  input.name= 'projectTitle';

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