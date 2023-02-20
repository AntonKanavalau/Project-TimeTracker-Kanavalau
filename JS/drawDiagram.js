import {projectsStorage} from "./ProjectsData.js";
import {TemporaryStorage} from "./TemporaryData.js";

export let diagramChart = null;
export function drawDiagram() {
  let labels = [];
  let info = [];
  let backgroundColors = [];

  for (let i = 0; i < TemporaryStorage.tHash.length; i++) {
    for (let j = 0; j < projectsStorage.Hash.length; j++) {
      if (TemporaryStorage.tHash[i].id === projectsStorage.Hash[j].id) {
        labels.push(TemporaryStorage.tHash[i].id);
        backgroundColors.push(projectsStorage.Hash[j].color);
        info.push(`${(TemporaryStorage.tHash[i].hHours * 3600) + (TemporaryStorage.tHash[i].hMinutes * 60) + TemporaryStorage.tHash[i].hSeconds}`);
      }
    }
  }

  const data = {
    datasets: [{
      data: info,
      Project: labels,
      backgroundColor: backgroundColors
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      maintainAspectRatio: false,
      animation: {
        duration: 0
      },
      hover: {
        animationDuration: 0
      },
      responsiveAnimationDuration: 0,
      plugins: {
        title: {
          font: {
            size: 24
          },
          color: '#1f1f1f',
          display: true,
          text: 'Projects Diagram'
        },
        tooltip: {
          callbacks: {
            label: context => {
              console.log(context);
              const dataPoint = context.dataIndex;
              console.log(context.dataset.data[dataPoint]);
              return `${context.dataset.Project[dataPoint]}`;
            },
            beforeBody: context => {
              return `${document.getElementById('hours').innerText}:${document.getElementById('minutes').innerText}:${document.getElementById('seconds').innerText}`;
            }
          }
        }
      }
    }
  };

  let myChart = document.getElementById('myChart').getContext('2d');
  if (diagramChart != null) {
    diagramChart.destroy();
  }

  diagramChart = new Chart(myChart, config);
}


