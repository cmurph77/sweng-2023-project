import Chart from 'chart.js/auto';

function renderPieChart(counts, chartContainer) {

  return new Chart(chartContainer, {
    type: 'pie',
    data: {
      labels: Object.keys(counts),
      datasets: [{
        label: '# of Occurrences',
        data: Object.values(counts),
        borderWidth: 0.5,
        backgroundColor: [
          'rgba(240, 93, 35, 1)', // orange
          'rgba(11, 110, 79, 1)', // green
          'rgba(255, 227, 41, 1)', // yellow
          'rgba(140, 0, 26, 1)', // red
          'rgba(255, 13, 145, 1)' // pink
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
