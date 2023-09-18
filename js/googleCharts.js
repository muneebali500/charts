// Function to draw a Bar Chart
function drawBarChart() {
  // Set Data
  const data = google.visualization.arrayToDataTable([
    ["Country", "Mhl"],
    ["Italy", 55],
    ["France", 49],
    ["Spain", 44],
    ["USA", 24],
    ["Argentina", 15],
  ]);

  // Set Options
  const options = {
    title: "Coca Cola Production",
  };

  // Draw
  const chart = new google.visualization.BarChart(
    document.getElementById("hz-bar-chart")
  );
  chart.draw(data, options);
}

// Function to draw a Pie Chart
function drawPieChart() {
  // Set Data
  const data = google.visualization.arrayToDataTable([
    ["Country", "Mhl"],
    ["Italy", 55],
    ["France", 49],
    ["Spain", 44],
    ["USA", 24],
    ["Argentina", 15],
  ]);

  // Set Options
  const options = {
    title: "Coca Cola Production",
    is3D: true,
  };

  // Draw
  const chart = new google.visualization.PieChart(
    document.getElementById("pie-chart")
  );
  chart.draw(data, options);
}

// Function to draw a Line Graph
function drawLineGraph() {
  // Set Data
  const data = google.visualization.arrayToDataTable([
    ["Price", "Size"],
    [50, 7],
    [60, 8],
    [70, 8],
    [80, 9],
    [90, 9],
    [100, 9],
    [110, 10],
    [120, 11],
    [130, 14],
    [140, 14],
    [150, 15],
  ]);

  // Set Options
  const options = {
    title: "House Prices vs. Size",
    hAxis: { title: "Square Meters" },
    vAxis: { title: "Price in Millions" },
    legend: "none",
  };

  // Draw Graph
  const chart = new google.visualization.LineChart(
    document.getElementById("line-graphs")
  );
  chart.draw(data, options);
}

// Function to draw a Scatter Chart
function drawScatterChart() {
  // Set Data
  const data = google.visualization.arrayToDataTable([
    ["Price", "Size"],
    [50, 7],
    [60, 8],
    [70, 8],
    [80, 9],
    [90, 9],
    [100, 9],
    [110, 10],
    [120, 11],
    [130, 14],
    [140, 14],
    [150, 15],
  ]);

  // Set Options
  const options = {
    title: "House Prices vs. Size",
    hAxis: { title: "Square Meters" },
    vAxis: { title: "Price in Millions" },
    legend: "none",
  };

  // Draw Graph
  const chart = new google.visualization.ScatterChart(
    document.getElementById("scatter-plots")
  );
  chart.draw(data, options);
}

// Load Google Charts and draw the charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(() => {
  drawBarChart();
  drawPieChart();
  drawLineGraph();
  drawScatterChart();
});
