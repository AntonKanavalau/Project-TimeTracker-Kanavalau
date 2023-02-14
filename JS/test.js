
const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://fe.it-academy.by/AjaxStringStorage2.php/ProjectData');

xhr.onload = function (){
  const projectsData = JSON.parse(xhr.response);
  console.log(projectsData);
}

xhr.send();


