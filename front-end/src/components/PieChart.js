import Chart from 'chart.js/auto';

function renderPieChart(counts, chartContainer) {
  const labels = Object.keys(counts).filter(key => key !== 'undefined');
  const data = Object.values(counts).filter(value => value !== undefined);

  return new Chart(chartContainer, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Occurrences',
        data: data,
        borderWidth: 1,
        backgroundColor: [
          'rgba(240, 93, 35, 1)', // orange
          'rgba(11, 110, 79, 1)', // green
          'rgba(255, 227, 41, 1)', // yellow
          'rgba(140, 0, 26, 1)' // red
        ],
        borderColor: '#080d24'
      }]
    },
    options: {
      maintainAspectRatio: true,
      responsive: false
    }
  });
}

export default renderPieChart;
