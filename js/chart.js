//////////////// Script for creating Bar/Pie/Donut charts /////////////////

const countries = ["Italy", "France", "Spain", "USA", "Argentina"];
const values = [55, 49, 44, 24, 15];
const barColors = ["red", "green", "blue", "orange", "brown"];

function createCharts(containerId, type, legendDisplay) {
  new Chart(containerId, {
    type: type,
    data: {
      labels: countries,
      datasets: [
        {
          backgroundColor: barColors,
          data: values,
        },
      ],
    },
    options: {
      legend: { display: legendDisplay },
      title: {
        display: true,
        text: "Coca Cola Production",
      },
    },
  });
}

createCharts("bar-chart", "bar", false);
createCharts("hz-bar-chart", "horizontalBar", false);
createCharts("pie-chart", "pie", true);
createCharts("donut", "doughnut", true);

///////////////// Script for scatter plots ///////////////////
function scatterPlots() {
  const xyValues = [
    { x: 50, y: 7 },
    { x: 60, y: 8 },
    { x: 70, y: 8 },
    { x: 80, y: 9 },
    { x: 90, y: 9 },
    { x: 100, y: 9 },
    { x: 110, y: 10 },
    { x: 120, y: 11 },
    { x: 130, y: 14 },
    { x: 140, y: 14 },
    { x: 150, y: 15 },
  ];

  new Chart("scatter-plots", {
    type: "scatter",
    data: {
      datasets: [
        {
          pointRadius: 4,
          pointBackgroundColor: "rgb(0,0,255)",
          data: xyValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        xAxes: [{ ticks: { min: 40, max: 160 } }],
        yAxes: [{ ticks: { min: 6, max: 16 } }],
      },
    },
  });
}

scatterPlots();

///////////////// Script for line graphs ///////////////////
function lineGraphs() {
  const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

  new Chart("line-graphs", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: 6, max: 16 } }],
      },
    },
  });
}

lineGraphs();

///////////////// Script for multiple lines ///////////////////
function multipleLines() {
  const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  new Chart("multiple-lines", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
          borderColor: "red",
          fill: false,
        },
        {
          data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
          borderColor: "green",
          fill: false,
        },
        {
          data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
          borderColor: "blue",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: false },
    },
  });
}

multipleLines();

///////////////// Script for linear graphs and function graphs ////////////////
const xValues = [];
const yValues = [];
generateData("x * 2 + 7", 0, 10, 0.5);

new Chart("linear-graphs", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        pointRadius: 1,
        borderColor: "rgba(255,0,0,0.5)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "y = x * 2 + 7",
      fontSize: 16,
    },
  },
});

function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    xValues.push(x);
    yValues.push(eval(value));
  }
}
