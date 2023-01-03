'use strict';

function drawModal() {
  const formContainer = document.createElement('div');
  formContainer.className = 'formContainer';

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

  const input = document.createElement('input');
  input.className= 'formInput';
  input.type = 'text';
  input.name= 'projectTitle';

  const label = document.createElement('label');
  label.setAttribute('for','projectTitle');
  label.className= 'formLabel';
  label.innerText = 'Project Name';




  formBlock.append(nameProjectBlock);
  nameProjectBlock.append(label,input);

  blockAdd.append(headerSection,formBlock);

  document.body.append(formContainer);
}