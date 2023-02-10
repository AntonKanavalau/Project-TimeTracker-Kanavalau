export class TemporaryData {
  constructor() {
    this.tHash = JSON.parse(localStorage.getItem("Temporary")) || [];
  }

 addTempProject(key){
   this.tHash.push({
     id: key,
     hSeconds: '00',
     hMinutes: '00',
     hHours: '00'
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
}

export const TemporaryStorage = new TemporaryData();