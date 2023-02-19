import {headerReset} from "./clearElem.js";
import {projectsStorage} from "./ProjectsData.js";

export class TemporaryData {
  constructor() {
    this.tHash = JSON.parse(localStorage.getItem("Temporary")) || [];
  }

  addTempProject(key) {
    this.tHash.push({
      id: key,
      hSeconds: '00',
      hMinutes: '00',
      hHours: '00',
      timeData: Date.now()
    })

    localStorage.setItem("Temporary", JSON.stringify(this.tHash));
    return this.tHash;
  }

  getValue(key) {
    return this.tHash.find(el => el.id === key);
  };

  checkTempProject(key) {
    if (this.getValue(key)) {
      return true;
    }
  };

  changeID(key, newID) {
    const objId = this.getValue(key).id;
    this.getValue(key).id = newID;
    document.getElementById(`t_${objId}`).id = `t_${newID}`;
    document.querySelector('.tempTitle').innerText = newID;
    localStorage.setItem("Projects", JSON.stringify(this.tHash));
    return this.tHash;
  }

  deleteValue(key) {
    const tIndex = this.tHash.findIndex(el => el.id === key);
    if (tIndex !== -1) {
      this.tHash.splice(tIndex, 1);
      //headerReset();
    }
    localStorage.setItem("Temporary", JSON.stringify(this.tHash));
    return this.tHash;
  };

  clearTimer(key) {
    const objTem = this.getValue(key);

    objTem.hSeconds = '00';
    objTem.hMinutes = '00';
    objTem.hHours = '00';
    headerReset();

    localStorage.setItem("Temporary", JSON.stringify(this.tHash));
    return this.tHash;
  }

  clearTemporaryStorage() {
    this.timeout = setTimeout(() => {
      this.tHash = [];
      localStorage.setItem("Temporary", JSON.stringify(this.tHash));
       document.getElementById('taskBlock').innerHTML = '';
      headerReset();

    }, 10000);
  }

  drawTemp(idValue){
    for (let i = 0; i < this.tHash.length; i++) {
      if (this.tHash[i].id === idValue && !document.getElementById(`t_${idValue}`)) {
        return `
              <div id="t_${this.tHash[i].id}" class="tempBlock_container">
                <div class="tempTime">
                  <button>
                    <i class="material-icons start" title="Start Tracker">play_arrow</i>
                  </button>
                  <p class="tempTitle">${this.tHash[i].id}</p>
                  <div class="totalScoreContainer">
                    <p class="totalScoreText">Total Score: </p>
                    <p class="totalProjectScore">
                      <span class="hours">${this.tHash[i].hHours}</span>:
                      <span class="minutes">${this.tHash[i].hMinutes}</span>:
                      <span class="seconds">${this.tHash[i].hSeconds}</span>
                    </p>
                  </div>
                </div>
              </div>
              `;
      }
    }
  }
}


export const TemporaryStorage = new TemporaryData();