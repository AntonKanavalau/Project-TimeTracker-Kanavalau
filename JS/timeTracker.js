import {projectsStorage} from './ProjectsData.js';


export function tracker(e) {
  let inputType = e.target;
  let setParentID = e.target.closest('div[id]');
  let icon = e.srcElement;

  switch (icon.innerText){
    case 'play_arrow':
      let secondElem = setParentID.querySelector('.seconds');
      let minuteElem = setParentID.querySelector('.minutes');
      let hourElem = setParentID.querySelector('.hours');
      let deyElem = setParentID.querySelector('.days');

      icon.innerText = 'pause';
      icon.classList.remove('start');
      icon.classList.add('pause');

      projectsStorage.startTracker(
        setParentID.id,
        secondElem,
        minuteElem,
        hourElem,
        deyElem,
        icon
      );
      break;

    case 'pause':
      projectsStorage.pauseTracker(icon);
      icon.innerText = 'play_arrow';
      icon.classList.remove('pause');
      icon.classList.add('start');
      break;
  }





/*  if (icon.innerText === "play_arrow") {
    // const thisObj = projectsStorage.getValue(setParentID);
    let secondElem = setParentID.querySelector('.seconds');
    let minuteElem = setParentID.querySelector('.minutes');
    let hourElem = setParentID.querySelector('.hours');
    let deyElem = setParentID.querySelector('.days');


    projectsStorage.startTracker(
      setParentID.id,
      secondElem,
      minuteElem,
      hourElem,
      deyElem
      );*/


    // console.log(icon);
    // console.log(setParentID);
    // console.log("----------------------------------");
    // console.log(secondElem);
    // console.log(minuteElem);
    // console.log(hourElem);
    // console.log(deyElem);
    // console.log("----------------------------------");
    // console.log(deyElem);
    //console.log(obj);
    // console.log(thisObj);


    /*    function startTimer(obj) {
          interval = setInterval(function () {

            //Seconds
            if (obj.seconds < 9) {
              secondElem.innerText = obj.seconds;
            }

            if (obj.seconds > 9) {
              secondElem.innerText = obj.seconds;
            }

            if (obj.seconds > 59) {

              obj.minutes++;
              minuteElem.innerText = obj.minutes;

              obj.seconds = 0;
              secondElem.innerText = obj.seconds ;
            }


            //Minutes
            if (obj.minutes < 9) {
              minuteElem.innerText = obj.minutes;
            }

            if (obj.minutes > 9) {
              minuteElem.innerText = obj.minutes;
            }

            if (obj.minutes > 59) {

              obj.hours++;
              hourElem.innerText =  obj.hours;


              obj.minutes = 0;
              minuteElem.innerText =  obj.minutes;
            }

            //Hours
            if (obj.hours < 9) {
              hourElem.innerText =  obj.hours;
            }

            if (obj.hours > 9) {
              hourElem.innerText = obj.hours;

            }

            if (obj.hours > 23) {

              obj.days++;
              obj.hours = 0;

              hourElem.innerText = obj.hours;
            }
          }, 1000);

          //iconText = pause;

    /!*      playTime.forEach(btn => {
            btn.removeEventListener('click', startTimer);
            btn.addEventListener('click', stopTimer);
          });
          playIcon.forEach(icon => {
            icon.innerText = "pause";
          });*!/
        }


  }*/
}