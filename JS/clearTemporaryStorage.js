import {TemporaryStorage} from "./TemporaryData.js";

export function clearTemporaryStorage() {
  let date1 = TemporaryStorage.tHash[0].timeData;
  let date2 = Date.now();

let data = date2-date1;
  //let diffHour = Math.floor((data / (1000 * 60 * 60)) % 24)
  let diffMin = Math.floor((data / (1000 * 60)) % 60);
  let diffSec = Math.floor((data / 1000) % 60);

  //console.log(newDate1(date1));
  console.log(date1);
  console.log(new Date(1676581928185))
  console.log('-----------------------');
  console.log(date2);
  console.log(data);
  console.log('-----------------------');
  console.log(new Date(data))
  //console.log(diffHour)
  console.log(diffMin)
  console.log(diffSec)


  if(diffSec > 5){
    TemporaryStorage.deleteValue('test2');
  }

  setInterval(() => {
    
  }, 10000);
}