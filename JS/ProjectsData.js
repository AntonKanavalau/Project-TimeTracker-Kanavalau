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
                    <span class="days">${this.Hash[i].days}</span>:day
                    <span class="hours">${this.Hash[i].hours }</span>:
                    <span class="minutes">${this.Hash[i].minutes }</span>:
                    <span class="seconds">${this.Hash[i].seconds}</span>
                  </p>
                </div>
                  <button>
                    <i class="material-icons" title="Start Tracker">play_arrow</i>
                  </button>
                </div>
              </div>
              `;
      }
    }
  }

  startTracker(objKey) {
    let obj = this.getValue(objKey);
    let sec = 0;



    setInterval(()=> {
      sec++;
      obj.seconds = (`0${sec % 60}`).substr(-2);
      obj.minutes = (`0${(parseInt(sec / 60)) % 60}`).substr(-2);
      obj.hours = (`0${parseInt(sec / 3600)}`).substr(-2);
      obj.days = (`${(parseInt(sec / 86400)) % 24}`).substr(-2);
      localStorage.setItem("Projects", JSON.stringify(this.Hash));
    }, 1000);

  }


}

export const projectsStorage = new Project();

