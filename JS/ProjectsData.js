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

  checkStatus(){
    return this.Hash.some(el => el.status === 'active');
  };

  getObjStatus(){
    return this.Hash.find(el => el.status === 'active');
  }

  startTracker(objKey, secondElem, minuteElem, hourElem, deyElem, icon, header) {
    let obj = this.getValue(objKey);
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

    let Hsec = 0;

    this.interval = setInterval(() => {
      sec++;
      secondElem.innerText = obj.seconds = (`0${sec % 60}`).substr(-2);
      minuteElem.innerText = obj.minutes = (`0${(parseInt( ((min*60) + sec) / 60)) % 60}`).substr(-2);
      hourElem.innerText = obj.hours = (`0${parseInt(((hrs* 3600) + (min*60) + sec) / 3600)}`).substr(-2);
      deyElem.innerText = obj.days = (`${(parseInt(((day*86400) + (hrs* 3600) + (min*60) + sec) / 86400)) % 24}`);
      localStorage.setItem("Projects", JSON.stringify(this.Hash));

      Hsec++;
      header.querySelector('.hours').innerText= (`0${parseInt( Hsec / 3600)}`).substr(-2);
      header.querySelector('.minutes').innerText=(`0${(parseInt( Hsec / 60)) % 60}`).substr(-2);
      header.querySelector('.seconds').innerText=(`0${Hsec % 60}`).substr(-2);
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

