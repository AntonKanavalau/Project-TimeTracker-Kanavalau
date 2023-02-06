import {projectsStorage} from './ProjectsData.js';

export function tracker(e){
  let inputType = e.target;
  let setParentID = e.target.closest('div[id]');
  let iconText = e.srcElement.innerText;


  if(iconText === "play_arrow"){
   // const thisObj = projectsStorage.getValue(setParentID);
    let secondElem = setParentID.querySelector('.seconds');
    let minuteElem = setParentID.querySelector('.minutes');
    let hourElem = setParentID.querySelector('.hours');
    let deyElem = setParentID.querySelector('.days');
   //projectsStorage.startTracker(setParentID.id);

    let obj = projectsStorage.getValue(setParentID.id);
    let interval;
    startTimer(obj);
  //let obj = projectsStorage.getValue(setParentID.id);


    //secondElem = projectsStorage.getValue(setParentID.id).seconds;

    console.log(iconText);
    console.log(setParentID);
    console.log("----------------------------------");
    console.log(secondElem);
    console.log(minuteElem);
    console.log(hourElem);
    console.log(deyElem);
    console.log("----------------------------------");
    console.log(obj);
   // console.log(thisObj);



    function startTimer(obj) {
      interval = setInterval(function () {

        //Seconds
        if (obj.seconds < 9) {
          secondElem.innerText = "0" + obj.seconds;

/*          secondElement.forEach(secondText => {
            secondText.innerText = "0" + second;
          });*/
        }

        if (obj.seconds > 9) {
          secondElem.innerText = obj.seconds;

/*          secondElement.forEach(secondText => {
            secondText.innerText = second;
          });*/
        }

        if (obj.seconds > 59) {

          obj.minutes++;
          minuteElem.innerText = obj.minutes;

/*          minuteElement.forEach(minuteText => {
            minuteText.innerText = "0" + minute;
          });*/

          obj.seconds = 0;
          secondElem.innerText = obj.seconds ;

/*          secondElement.forEach(secondText => {
            secondText.innerText = obj.seconds;
          });*/
        }


        //Minutes
        if (obj.minutes < 9) {
          minuteElem.innerText = obj.minutes;

/*          minuteElement.forEach(minuteText => {
            minuteText.innerText = "0" + minute;
          });*/
        }

        if (obj.minutes > 9) {
          minuteElem.innerText = obj.minutes;

/*          minuteElement.forEach(minuteText => {
            minuteText.innerText = minute;
          });*/
        }

        if (obj.minutes > 59) {

          obj.hours++;
          hourElem.innerText =  obj.hours;

/*          hourElement.forEach(hourText => {
            hourText.innerText = "0" + hour;
          });*/


          obj.minutes = 0;
          minuteElem.innerText =  obj.minutes;

/*          minuteElement.forEach(minuteText => {
            minuteText.innerText = "0" + minute;
          });*/
        }

        //Hours
        if (obj.hours < 9) {
          hourElem.innerText =  obj.hours;

/*          hourElement.forEach(hourText => {
            hourText.innerText = "0" + hour;
          });*/
        }

        if (obj.hours > 9) {
          hourElem.innerText = obj.hours;
/*          hourElement.forEach(hourText => {
            hourText.innerText = hour;
          });*/
        }

        if (obj.hours > 23) {

          obj.days++;
          obj.hours = 0;

          hourElem.innerText = obj.hours;
/*          hourElement.forEach(hourText => {
            hourText.innerText = "0" + hour;
          });*/
        }
        localStorage.setItem("Projects", JSON.stringify(this.Hash));
      }, 1000);

      //iconText = pause;

/*      playTime.forEach(btn => {
        btn.removeEventListener('click', startTimer);
        btn.addEventListener('click', stopTimer);
      });
      playIcon.forEach(icon => {
        icon.innerText = "pause";
      });*/
    }


  }
}