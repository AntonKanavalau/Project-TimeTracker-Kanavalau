'use strict';

/*Тут мы будем хранить все проекты, а внутри проектов будут таски.
Имя проекта - ключ объекта Projects (можно изменить).
Каждый проект будет иметь цвет, секунды, минуты, часы (это база).
Имя задачи - ключ объекта 'Имя проекта'(можно изменить).
Каждая таска будет иметь секунды, минуты, часы*/
var Projects = {};

function AddIntoProjects(key){
  Projects[key] = {
    color: '#00b33c',
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '0'
  };



  return Projects;
}
localStorage.setItem('Projects', JSON.stringify(Projects));
JSON.parse(localStorage.getItem('Projects'));