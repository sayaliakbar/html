// Chart implementation

// Global chart variables
let currentChart = null;
let chartCanvas = document.getElementById("sales-chart");
let ctx = chartCanvas.getContext("2d");
let chartAnimationDuration = 1000;

// Sample data
const salesData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  values: [
    1200, 1900, 3000, 2400, 2200, 3100, 4800, 4100, 3800, 5200, 6100, 7500,
  ],
};

const categoryData = {
  labels: ["Electronics", "Clothing", "Books", "Food", "Toys"],
  values: [45, 23, 12, 15, 5],
};

const visitorData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  values: [820, 932, 901, 934, 1290, 1330, 1320],
};

// Initialize charts
function initCharts() {
  // Default to bar chart on load
  drawBarChart();
}

// Update chart based on type
function updateChart(type) {
  // Clear existing chart if any
  if (currentChart) {
    currentChart.destroy();
  }

  // Draw the selected chart type
  switch (type) {
    case "line":
      drawLineChart();
      break;
    case "pie":
      drawPieChart();
      break;
    case "bar":
    default:
      drawBarChart();
      break;
  }
}

// Bar Chart
function drawBarChart() {
  // Clear canvas
  ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

  const data = salesData;
  const barWidth = (chartCanvas.width - 60) / data.labels.length;
  const maxValue = Math.max(...data.values);
  const scale = (chartCanvas.height - 60) / maxValue;

  // Draw axes
  ctx.beginPath();
  ctx.moveTo(30, 30);
  ctx.lineTo(30, chartCanvas.height - 30);
  ctx.lineTo(chartCanvas.width - 30, chartCanvas.height - 30);
  ctx.strokeStyle = "#333";
  ctx.stroke();

  // Draw bars with animation
  const animationFrames = 60;
  let currentFrame = 0;

  function animate() {
    if (currentFrame > animationFrames) return;

    // Calculate animation progress
    const progress = currentFrame / animationFrames;

    // Clear the bar area
    ctx.clearRect(31, 30, chartCanvas.width - 61, chartCanvas.height - 60);

    // Draw bars
    data.values.forEach((value, index) => {
      const x = 30 + index * barWidth + 10;
      const barHeight = value * scale * progress;
      const y = chartCanvas.height - 30 - barHeight;

      // Draw bar
      ctx.fillStyle = "rgba(76, 175, 80, 0.8)";
      ctx.fillRect(x, y, barWidth - 20, barHeight);

      // Draw label
      ctx.fillStyle = "#333";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        data.labels[index],
        x + (barWidth - 20) / 2,
        chartCanvas.height - 10
      );
    });

    currentFrame++;

    if (currentFrame <= animationFrames) {
      requestAnimationFrame(animate);
    }
  }

  animate();

  // Store reference to prevent memory leaks
  currentChart = {
    destroy: function () {
      // Simple cleanup function for the custom chart
      ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);
    },
  };
}

// Line Chart
function drawLineChart() {
  // Clear canvas
  ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

  const data = salesData;
  const xStep = (chartCanvas.width - 60) / (data.labels.length - 1);
  const maxValue = Math.max(...data.values);
  const scale = (chartCanvas.height - 60) / maxValue;

  // Draw axes
  ctx.beginPath();
  ctx.moveTo(30, 30);
  ctx.lineTo(30, chartCanvas.height - 30);
  ctx.lineTo(chartCanvas.width - 30, chartCanvas.height - 30);
  ctx.strokeStyle = "#333";
  ctx.stroke();

  // Animate line drawing
  const animationFrames = 60;
  let currentFrame = 0;

  function animate() {
    if (currentFrame > animationFrames) return;

    // Calculate animation progress
    const progress = currentFrame / animationFrames;
    const pointsToDraw = Math.ceil(data.labels.length * progress);

    // Clear the line area
    ctx.clearRect(31, 30, chartCanvas.width - 61, chartCanvas.height - 60);

    // Draw line
    ctx.beginPath();
    for (let i = 0; i < pointsToDraw; i++) {
      const x = 30 + i * xStep;
      const y = chartCanvas.height - 30 - data.values[i] * scale;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      // Draw point
      ctx.fillStyle = "#2196f3";
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Draw label
      ctx.fillStyle = "#333";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(data.labels[i], x, chartCanvas.height - 10);
    }

    ctx.strokeStyle = "#2196f3";
    ctx.lineWidth = 2;
    ctx.stroke();

    currentFrame++;

    if (currentFrame <= animationFrames) {
      requestAnimationFrame(animate);
    }
  }

  animate();

  // Store reference
  currentChart = {
    destroy: function () {
      ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);
    },
  };
}

// Pie Chart
function drawPieChart() {
  // Clear canvas
  ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

  const data = categoryData;
  const total = data.values.reduce((sum, val) => sum + val, 0);
  const centerX = chartCanvas.width / 2;
  const centerY = chartCanvas.height / 2;
  const radius = Math.min(centerX, centerY) - 40;

  // Colors for pie segments
  const colors = ["#4caf50", "#2196f3", "#ff9800", "#f44336", "#9c27b0"];

  // Animate pie drawing
  const animationFrames = 60;
  let currentFrame = 0;

  function animate() {
    if (currentFrame > animationFrames) return;

    // Calculate animation progress
    const progress = currentFrame / animationFrames;

    // Clear the canvas
    ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

    // Draw pie
    let startAngle = -Math.PI / 2; // Start at top

    data.values.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI * progress;

      // Draw slice
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = colors[index % colors.length];
      ctx.fill();

      // Prepare for next slice
      startAngle += sliceAngle;
    });

    // Draw legend if animation is complete
    if (currentFrame === animationFrames) {
      drawPieLegend();
    }

    currentFrame++;

    if (currentFrame <= animationFrames) {
      requestAnimationFrame(animate);
    }
  }

  function drawPieLegend() {
    const legendX = chartCanvas.width - 150;
    const legendY = 50;

    data.labels.forEach((label, index) => {
      const y = legendY + index * 25;

      // Draw color box
      ctx.fillStyle = colors[index % colors.length];
      ctx.fillRect(legendX, y, 15, 15);

      // Draw label
      ctx.fillStyle = "#333";
      ctx.font = "14px Arial";
      ctx.textAlign = "left";
      ctx.fillText(`${label} (${data.values[index]}%)`, legendX + 25, y + 12);
    });
  }

  animate();

  // Store reference
  currentChart = {
    destroy: function () {
      ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);
    },
  };
}
