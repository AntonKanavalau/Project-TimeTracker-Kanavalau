import {TemporaryStorage} from "./TemporaryData.js";
import {drawDiagram} from "./drawDiagram.js";

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
      days: '0',
      status: 'inactive'
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

  changeID(key, newID, icon) {
    this.pauseTracker(this.getValue(key).id, icon);

    this.getValue(key).id = newID;
    //обновляем заголовки
    document.getElementById(`${key}`).id = newID;
    document.getElementById('headerProjectTitle').innerText = newID;
    localStorage.setItem("Projects", JSON.stringify(this.Hash));

    TemporaryStorage.changeID(key, newID);
    return this.Hash;
  }

  changeColor(key, newColor, icon) {
    this.pauseTracker(this.getValue(key).id, icon);
    this.getValue(key).color = newColor;
    localStorage.setItem("Projects", JSON.stringify(this.Hash));
    return this.Hash;
  }

  deleteValue(key) {
    const htmlElemIcon = document.getElementById(`${key}`).querySelector('.material-icons');

    //ставим на паузу трекер, если он запущен
    if (htmlElemIcon.innerText === 'pause') {
      this.pauseTracker(key, htmlElemIcon);
    }

    const index = this.Hash.findIndex(el => el.id === key);
    if (index !== -1) {
      this.Hash.splice(index, 1);
      document.getElementById(key).remove();
    }
    localStorage.setItem("Projects", JSON.stringify(this.Hash));

    if(TemporaryStorage.tHash.length > 0){
      TemporaryStorage.deleteValue(key);
    }

    return this.Hash;
  };

  clearTimer(key) {
    const obj = this.getValue(key);
    const htmlElem = document.getElementById(`${obj.id}`);
    const htmlElemIcon = htmlElem.querySelector('.material-icons');

    this.pauseTracker(key, htmlElemIcon);

    if(TemporaryStorage.tHash.length > 0){
      TemporaryStorage.clearTimer(key);
    }


    //очищаем значения
    htmlElem.querySelector('.seconds').innerText = obj.seconds = '00';
    htmlElem.querySelector('.minutes').innerText = obj.minutes = '00';
    htmlElem.querySelector('.hours').innerText = obj.hours = '00';
    htmlElem.querySelector('.days').innerText = obj.days = '0';
    obj.status = 'inactive';

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
                    <span class="days">${this.Hash[i].days}</span>:day
                    <span class="hours">${this.Hash[i].hours}</span>:
                    <span class="minutes">${this.Hash[i].minutes}</span>:
                    <span class="seconds">${this.Hash[i].seconds}</span>
                  </p>
                </div>
                  <button>
                    <i class="material-icons start" title="Start Tracker">play_arrow</i>
                  </button>
                </div>
              </div>
              `;
      }
    }
  }

  checkStatus() {
    return this.Hash.some(el => el.status === 'active');
  };

  getObjStatus() {
    return this.Hash.find(el => el.status === 'active');
  }

  startTracker(objKey, icon) {
    clearTimeout(TemporaryStorage.timeout);//останавливаем запущенный трекер на очищение

    //получаем необходимый объект
    let obj = this.getValue(objKey.id);
    let sec = obj.seconds;
    let min = obj.minutes;
    let hrs = obj.hours;
    let day = obj.days;

    //закидываем название в header, меняем иконку, стиль, обновляем статус
    document.getElementById('headerProjectTitle').innerText = obj.id;
    document.getElementById('headerBtn').innerText = icon.innerText = 'pause';
    icon.classList.remove('start');
    icon.classList.add('pause');
    document.getElementById('headerBtn').title = icon.title = 'Stop Tracker';
    obj.status = 'active';

    //переменные для временного хранилища
    let newObj;
    let hSec;
    let hMin;
    let hHrs;
    let tObj

    //проверяем на наличие в хранилище
    if (TemporaryStorage.checkTempProject(obj.id) === true) {
      newObj = TemporaryStorage.getValue(obj.id);
      hSec = newObj.hSeconds;
      hMin = newObj.hMinutes;
      hHrs = newObj.hHours;
      tObj = document.getElementById(`t_${newObj.id}`);

    } else {
      TemporaryStorage.addTempProject(obj.id);
      newObj = TemporaryStorage.getValue(obj.id);
      hSec = newObj.hSeconds;
      hMin = newObj.hMinutes;
      hHrs = newObj.hHours;

      document.getElementById('taskBlock').insertAdjacentHTML('beforeend', TemporaryStorage.drawTemp(newObj.id));
      tObj = document.getElementById(`t_${newObj.id}`);
    }

    //обновляем иконки
    tObj.querySelector('.material-icons').innerText = 'pause';
    tObj.querySelector('.material-icons').title = 'Stop Tracker';
    tObj.querySelector('.material-icons').classList.remove('start');
    tObj.querySelector('.material-icons').classList.add('pause');

    //запускаем трекер
    this.interval = setInterval(() => {
      //отрисовываем в списке проектов
      sec++;
      objKey.querySelector('.seconds').innerText = obj.seconds = (`0${sec % 60}`).substr(-2);
      objKey.querySelector('.minutes').innerText = obj.minutes = (`0${(parseInt(((min * 60) + sec) / 60)) % 60}`).substr(-2);
      objKey.querySelector('.hours').innerText = obj.hours = (`0${parseInt(((hrs * 3600) + (min * 60) + sec) / 3600)}`).substr(-2);
      objKey.querySelector('.days').innerText = obj.days = (`${(parseInt(((day * 86400) + (hrs * 3600) + (min * 60) + sec) / 86400)) % 24}`);
      localStorage.setItem("Projects", JSON.stringify(this.Hash));

      //отрисовываем в временном списке
      hSec++;
      tObj.querySelector('.seconds').innerText = document.getElementById('seconds').innerText = newObj.hSeconds = (`0${hSec % 60}`).substr(-2);
      tObj.querySelector('.minutes').innerText = document.getElementById('minutes').innerText = newObj.hMinutes = (`0${(parseInt(((hMin * 60) + hSec) / 60)) % 60}`).substr(-2);
      tObj.querySelector('.hours').innerText = document.getElementById('hours').innerText = newObj.hHours = (`0${parseInt(((hHrs * 3600) + (hMin * 60) + hSec) / 3600)}`).substr(-2);
      localStorage.setItem("Temporary", JSON.stringify(TemporaryStorage.tHash));


      drawDiagram();
    }, 1000);

    return this.interval;
  }

  pauseTracker(objKey, icon) {
    let obj = this.getValue(objKey);
    let htmlELObj = document.getElementById(obj.id);
    let tObj = document.getElementById(`t_${objKey}`);
    obj.status = 'inactive';

    //обновляем иконку в временном списке
    if (tObj) {
      tObj.querySelector('.material-icons').title = 'Start Tracker';
      tObj.querySelector('.material-icons').innerText = 'play_arrow';
      tObj.querySelector('.material-icons').classList.remove('pause');
      tObj.querySelector('.material-icons').classList.add('start');
    }

    //обновляем иконку в списке проектов
    htmlELObj.querySelector('.material-icons').title = 'Start Tracker';
    htmlELObj.querySelector('.material-icons').innerText = 'play_arrow';

    //обновляем иконку в header
    document.getElementById('headerBtn').title = icon.title = 'Start Tracker';
    document.getElementById('headerBtn').innerText = icon.innerText = 'play_arrow';

    //обновляем стиль
    icon.classList.remove('pause');
    icon.classList.add('start');

    clearInterval(this.interval); //очищаем трекер
    localStorage.setItem("Projects", JSON.stringify(this.Hash));

    TemporaryStorage.clearTemporaryStorage(); //запускаем трекер на очищение
  }
}

export const projectsStorage = new Project();