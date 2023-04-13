
import Chart from 'chart.js/auto';

function renderPieChart(counts, chartContainer) {
  const filteredCounts = Object.entries(counts).filter(([key, value]) => key !== 'undefined' && value !== undefined);
  const labels = filteredCounts.map(([key, _]) => key);
  const data = filteredCounts.map(([_, value]) => value);

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
