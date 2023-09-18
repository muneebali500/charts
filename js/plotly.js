////////////////// script for various charts ////////////////////////
// Reusable function to create a plot
function createPlot(
  containerId,
  dataObj,
  type,
  hole,
  orientation,
  markerColor,
  title
) {
  const data = [
    {
      ...dataObj,
      type,
      hole,
      orientation,
      marker: { color: markerColor },
    },
  ];

  const layout = { title };

  Plotly.newPlot(containerId, data, layout);
}

const countries = ["Italy", "France", "Spain", "USA", "Argentina"];
const values = [55, 49, 44, 24, 15];
const title = "Coca Cola Production";

// Vertical Bar Chart
createPlot(
  "bar-chart",
  { x: countries, y: values },
  "bar",
  undefined,
  "v",
  "rgba(0,0,255,0.6)",
  title
);

// Horizontal Bar Chart
createPlot(
  "hz-bar-chart",
  { x: values, y: countries },
  "bar",
  undefined,
  "h",
  "rgba(255,0,0,0.6)",
  title
);

// Pie Chart
createPlot(
  "pie-chart",
  { labels: countries, values },
  "pie",
  undefined,
  undefined,
  undefined,
  title
);

// Donut Chart
createPlot(
  "donut",
  { labels: countries, values },
  "pie",
  0.4,
  undefined,
  undefined,
  title
);

function stackedBarChart() {
  const trace1 = {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [20, 14, 23],
    name: "SF Zoo",
    type: "bar",
  };

  const trace2 = {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [12, 18, 29],
    name: "LA Zoo",
    type: "bar",
  };

  const data = [trace1, trace2];

  const layout = { barmode: "stack" };

  Plotly.newPlot("stacked-barchart", data, layout);
}

stackedBarChart();

////////////////// script for plotting equations ////////////////////////
function plottingEquations(expression, mode, elementId) {
  let exp = expression;

  // Generate values
  const xValues = [];
  const yValues = [];
  for (let x = 0; x <= 10; x += 0.1) {
    xValues.push(x);
    yValues.push(eval(exp));
  }

  // Display using Plotly
  const data = [{ x: xValues, y: yValues, mode }];
  const layout = { title: "y = " + exp };
  Plotly.newPlot(elementId, data, layout);
}

plottingEquations("Math.sin(x)", "lines", "sin-equation");
plottingEquations("Math.cos(x)", "markers", "cos-equation");
plottingEquations("x + 17", "lines", "linear-graphs");

////////////////// script for various graphs ////////////////////////
function plotGraphs(mode, containerId) {
  const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

  // Define Data
  const data = [
    {
      x: xArray,
      y: yArray,
      mode,
      type: "scatter",
    },
  ];

  // Define Layout
  const layout = {
    xaxis: { range: [40, 160], title: "Square Meters" },
    yaxis: { range: [5, 16], title: "Price in Millions" },
    title: "House Prices vs. Size",
  };

  Plotly.newPlot(containerId, data, layout);
}

plotGraphs("markers", "scatter-plots");
plotGraphs("lines", "line-graphs");

////////////////// script for bubble plots ////////////////////////
function bubblePlotes() {
  const xArray = [1, 2, 3, 4];
  const yArray = [10, 20, 30, 40];

  const trace1 = {
    x: xArray,
    y: yArray,
    mode: "markers",
    marker: {
      color: ["red", "green", "blue", "orange"],
      size: [20, 30, 40, 50],
    },
  };

  const data = [trace1];

  const layout = {
    title: "Plotting Bubbles",
  };

  Plotly.newPlot("bubble-plots", data, layout);
}

bubblePlotes();

////////////////// script for mutiple lines ////////////////////////
function multipleLines() {
  let exp1 = "x";
  let exp2 = "1.5*x";
  let exp3 = "1.5*x + 7";

  // Generate values
  const x1Values = [];
  const x2Values = [];
  const x3Values = [];
  const y1Values = [];
  const y2Values = [];
  const y3Values = [];

  for (let x = 0; x <= 10; x += 1) {
    x1Values.push(x);
    x2Values.push(x);
    x3Values.push(x);
    y1Values.push(eval(exp1));
    y2Values.push(eval(exp2));
    y3Values.push(eval(exp3));
  }

  // Define Data
  const data = [
    { x: x1Values, y: y1Values, mode: "lines" },
    { x: x2Values, y: y2Values, mode: "lines" },
    { x: x3Values, y: y3Values, mode: "lines" },
  ];

  // Define Layout
  const layout = {
    title: "[y=" + exp1 + "] [y=" + exp2 + "] [y=" + exp3 + "]",
  };

  // Display using Plotly
  Plotly.newPlot("multiple-lines", data, layout);
}

multipleLines();
