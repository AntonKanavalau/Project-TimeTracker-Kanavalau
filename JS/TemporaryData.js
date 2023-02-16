import {headerReset} from "./clearElem.js"
  ;
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
      timestamp: new Date()
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
    this.getValue(key).id = newID;
    localStorage.setItem("Projects", JSON.stringify(this.tHash));
    return this.tHash;
  }

  deleteValue(key) {
    const tIndex = this.tHash.findIndex(el => el.id === key);
    if (tIndex !== -1) {
      this.tHash.splice(tIndex, 1);
      headerReset();
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
}


export const TemporaryStorage = new TemporaryData();