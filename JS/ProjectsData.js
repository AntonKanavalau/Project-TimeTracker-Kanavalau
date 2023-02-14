import {TemporaryStorage} from './TemporaryData.js';

export class Project {

  sendHttpRequest(method, url, data) {
    return fetch(url, {
      method: method,
      body: data
    }).then(response => {
      return response.json();
    });
  }

  async insertData() {
    const fd = new FormData();
    fd.append('f', 'INSERT');
    fd.append('n', 'ProjectData');
    fd.append('v', JSON.stringify(this.Hash));

    const responseData = await this.sendHttpRequest(
      'POST',
      'http://fe.it-academy.by/AjaxStringStorage2.php/ProjectData',
      fd
    );
    console.log('INSERT response: ', responseData);
  }


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
      document.getElementById('headerProjectTitle').innerText = '';
    }
    localStorage.setItem("Projects", JSON.stringify(this.Hash));
    return this.Hash;
  };

  clearTimer(key) {
    const obj = this.getValue(key);
    const htmlElem = document.getElementById(`${obj.id}`);

    const objTem = TemporaryStorage.getValue(key);

    htmlElem.querySelector('.seconds').innerText = document.getElementById('seconds').innerText = obj.seconds = objTem.hSeconds = '00';
    htmlElem.querySelector('.minutes').innerText = document.getElementById('minutes').innerText = obj.minutes = objTem.hMinutes = '00';
    htmlElem.querySelector('.hours').innerText = document.getElementById('hours').innerText = obj.hours = objTem.hHours = '00';
    htmlElem.querySelector('.days').innerText = obj.days = '0';
    obj.status = 'inactive';


    localStorage.setItem("Projects", JSON.stringify(this.Hash));
    localStorage.setItem("Temporary", JSON.stringify(TemporaryStorage.tHash));
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

  startTracker(objKey, icon, header, TemporaryStorage) {
    let obj = this.getValue(objKey.id);
    let sec = obj.seconds;
    let min = obj.minutes;
    let hrs = obj.hours;
    let day = obj.days;

    header.querySelector('#headerProjectTitle').innerText = obj.id;
    header.querySelector('#headerBtn').innerText = icon.innerText = 'pause';
    icon.classList.remove('start');
    icon.classList.add('pause');
    header.querySelector('#headerBtn').title = icon.title = 'Stop Tracker';
    obj.status = 'active';


    let newObj;
    let hSec;
    let hMin;
    let hHrs;

    if (TemporaryStorage.checkTempProject(obj.id) === true) {
      newObj = TemporaryStorage.getValue(obj.id);
      hSec = newObj.hSeconds;
      hMin = newObj.hMinutes;
      hHrs = newObj.hHours;

      console.log(newObj.timestamp);

    } else {
      TemporaryStorage.addTempProject(obj.id);
    }


    this.interval = setInterval(() => {
      sec++;
      objKey.querySelector('.seconds').innerText = obj.seconds = (`0${sec % 60}`).substr(-2);
      objKey.querySelector('.minutes').innerText = obj.minutes = (`0${(parseInt(((min * 60) + sec) / 60)) % 60}`).substr(-2);
      objKey.querySelector('.hours').innerText = obj.hours = (`0${parseInt(((hrs * 3600) + (min * 60) + sec) / 3600)}`).substr(-2);
      objKey.querySelector('.days').innerText = obj.days = (`${(parseInt(((day * 86400) + (hrs * 3600) + (min * 60) + sec) / 86400)) % 24}`);
      localStorage.setItem("Projects", JSON.stringify(this.Hash));

      hSec++;
      header.querySelector('#seconds').innerText = newObj.hSeconds = (`0${hSec % 60}`).substr(-2);
      header.querySelector('#minutes').innerText = newObj.hMinutes = (`0${(parseInt(((hMin * 60) + hSec) / 60)) % 60}`).substr(-2);
      header.querySelector('#hours').innerText = newObj.hHours = (`0${parseInt(((hHrs * 3600) + (hMin * 60) + hSec) / 3600)}`).substr(-2);
      localStorage.setItem("Temporary", JSON.stringify(TemporaryStorage.tHash));
    }, 1000);

    return this.interval;
  }


  pauseTracker(objKey, icon, header) {
    let obj = this.getValue(objKey);

    header.querySelector('#headerBtn').title = icon.title = 'Start Tracker';
    header.querySelector('#headerBtn').innerText = icon.innerText = 'play_arrow';
    icon.classList.remove('pause');
    icon.classList.add('start');
    obj.status = 'inactive';

    clearInterval(this.interval);

    localStorage.setItem("Projects", JSON.stringify(this.Hash));
  }


}


export const projectsStorage = new Project();
projectsStorage.insertData();
